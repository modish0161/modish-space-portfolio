# Decentralized Booking and Dynamic Pricing for Tourism and Hospitality

This smart contract enables decentralized booking functionalities with dynamic pricing adjustments for the tourism and hospitality industry. It allows service providers to create listings for their offerings and users to make bookings using a specified ERC20 token as payment.

## Features

- **Listing Creation**: Service providers can create listings for their offerings with customizable pricing and availability.
- **Booking**: Users can make bookings by specifying the listing ID and the number of units to book.
- **Booking Confirmation**: Bookings can be confirmed by the contract owner or the listing provider, releasing funds to the service provider.

## Getting Started

1. Deploy the contract: Deploy the `TourismHospitalityBooking` contract, providing the address of the ERC20 token to be used for payments.
2. Create Listings: Service providers can create listings using the `createListing` function, specifying the price per unit and the available units.
3. Make Bookings: Users can make bookings using the `makeBooking` function, providing the listing ID and the number of units to book.
4. Confirm Bookings: Bookings can be confirmed by the contract owner or the listing provider using the `confirmBooking` function.

## Usage

### Public Functions

- `createListing(uint256 pricePerUnit, uint256 availableUnits)`: Creates a new listing with the specified price per unit and available units.
- `makeBooking(uint256 listingId, uint256 units)`: Makes a booking for the specified listing ID and number of units.
- `confirmBooking(uint256 bookingId)`: Confirms a booking, releasing funds to the service provider.

### External Functions

- `getListing(uint256 listingId) external view returns (Listing memory)`: Retrieves listing details by ID.
- `getBooking(uint256 bookingId) external view returns (Booking memory)`: Retrieves booking details by ID.

## Notes

- For demo purposes, this contract uses a fixed ERC20 token as the payment method. Ensure that the ERC20 token contract is deployed and accessible.
- Additional functionalities such as dynamic pricing algorithms, booking modifications, cancellations, and refunds can be implemented as needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
