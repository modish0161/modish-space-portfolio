// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title Decentralized Booking and Dynamic Pricing for Tourism and Hospitality
 * @dev Implements booking functionalities with dynamic pricing adjustments
 */
contract TourismHospitalityBooking is Ownable, ReentrancyGuard {
    // Define structures
    struct Listing {
        address payable provider;
        uint256 pricePerUnit;
        uint256 availableUnits;
        bool isActive;
    }

    struct Booking {
        address user;
        uint256 listingId;
        uint256 unitsBooked;
        uint256 totalPricePaid;
        bool isConfirmed;
    }

    // State variables
    mapping(uint256 => Listing) public listings;
    mapping(uint256 => Booking) public bookings;
    uint256 public nextListingId = 1;
    uint256 public nextBookingId = 1;

    // For demo purposes, using a fixed ERC20 token as payment method
    IERC20 public paymentToken;

    // Events
    event ListingCreated(
        uint256 indexed listingId,
        address provider,
        uint256 price,
        uint256 availableUnits
    );
    event BookingMade(
        uint256 indexed bookingId,
        address user,
        uint256 unitsBooked,
        uint256 totalPrice
    );
    event BookingConfirmed(uint256 indexed bookingId);

    // Constructor
    constructor(IERC20 _paymentToken) {
        paymentToken = _paymentToken;
    }

    /**
     * @dev Create a new listing by a service provider.
     * @param pricePerUnit Price per unit of the service (e.g., per night, per seat).
     * @param availableUnits Number of units available for booking.
     */
    function createListing(
        uint256 pricePerUnit,
        uint256 availableUnits
    ) external {
        require(pricePerUnit > 0, "Price per unit must be greater than zero.");
        require(
            availableUnits > 0,
            "Available units must be greater than zero."
        );

        listings[nextListingId] = Listing(
            payable(msg.sender),
            pricePerUnit,
            availableUnits,
            true
        );
        emit ListingCreated(
            nextListingId,
            msg.sender,
            pricePerUnit,
            availableUnits
        );

        nextListingId++;
    }

    /**
     * @dev Make a booking by a user.
     * @param listingId ID of the listing being booked.
     * @param units Number of units to book.
     */
    function makeBooking(
        uint256 listingId,
        uint256 units
    ) external nonReentrant {
        Listing storage listing = listings[listingId];
        require(listing.isActive, "Listing is not active.");
        require(units <= listing.availableUnits, "Not enough units available.");

        uint256 totalPrice = units * listing.pricePerUnit;
        require(
            paymentToken.transferFrom(msg.sender, address(this), totalPrice),
            "Payment transfer failed."
        );

        bookings[nextBookingId] = Booking(
            msg.sender,
            listingId,
            units,
            totalPrice,
            false
        );
        emit BookingMade(nextBookingId, msg.sender, units, totalPrice);

        listing.availableUnits -= units; // Update available units
        nextBookingId++;
    }

    /**
     * @dev Confirm a booking and release funds to the service provider. Only callable by the contract owner or listing provider.
     * @param bookingId ID of the booking to confirm.
     */
    function confirmBooking(uint256 bookingId) external {
        Booking storage booking = bookings[bookingId];
        Listing storage listing = listings[booking.listingId];

        require(
            msg.sender == owner() || msg.sender == listing.provider,
            "Caller is not authorized to confirm this booking."
        );
        require(!booking.isConfirmed, "Booking is already confirmed.");

        booking.isConfirmed = true;
        require(
            paymentToken.transfer(listing.provider, booking.totalPricePaid),
            "Payment transfer to provider failed."
        );
        emit BookingConfirmed(bookingId);
    }

    // Additional functions to handle dynamic pricing, booking modifications, cancellations, and refunds could be added here.

    /**
     * @dev Get listing details by ID.
     * @param listingId ID of the listing.
     * @return Listing details.
     */
    function getListing(
        uint256 listingId
    ) external view returns (Listing memory) {
        return listings[listingId];
    }

    /**
     * @dev Get booking details by ID.
     * @param bookingId ID of the booking.
     * @return Booking details.
     */
    function getBooking(
        uint256 bookingId
    ) external view returns (Booking memory) {
        return bookings[bookingId];
    }
}
