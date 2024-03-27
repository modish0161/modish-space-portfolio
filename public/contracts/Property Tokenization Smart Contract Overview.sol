// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title RealEstateTokenization
 * @dev Tokenize property to enable fractional ownership and trading
 */
contract RealEstateTokenization is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    struct Property {
        string name;
        address owner;
        uint256 totalShares;
        uint256 availableShares;
        mapping(address => uint256) sharesOwned;
        mapping(address => bool) shareholders;
    }

    // Mapping from token ID to Property details
    mapping(uint256 => Property) public properties;

    event PropertyCreated(
        uint256 indexed tokenId,
        string name,
        uint256 totalShares,
        address owner
    );
    event SharesTransferred(
        uint256 indexed tokenId,
        address indexed from,
        address indexed to,
        uint256 shares
    );

    constructor() ERC721("RealEstateToken", "RET") {}

    /**
     * @dev Create a new property token
     * @param name The name of the property
     * @param totalShares The total shares available for the property
     */
    function createProperty(
        string memory name,
        uint256 totalShares
    ) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        properties[tokenId] = Property(
            name,
            msg.sender,
            totalShares,
            totalShares
        );
        _mint(msg.sender, tokenId);

        emit PropertyCreated(tokenId, name, totalShares, msg.sender);
    }

    /**
     * @dev Transfer shares of a property token
     * @param tokenId The ID of the property token
     * @param to The address of the recipient
     * @param shares The number of shares to transfer
     */
    function transferShares(
        uint256 tokenId,
        address to,
        uint256 shares
    ) public {
        require(
            properties[tokenId].shareholders[msg.sender],
            "Sender does not own shares"
        );
        require(
            shares <= properties[tokenId].sharesOwned[msg.sender],
            "Insufficient shares"
        );

        properties[tokenId].sharesOwned[msg.sender] -= shares;
        properties[tokenId].sharesOwned[to] += shares;

        emit SharesTransferred(tokenId, msg.sender, to, shares);
    }

    /**
     * @dev Get the number of shares owned by an address for a property token
     * @param tokenId The ID of the property token
     * @param owner The address of the owner
     * @return The number of shares owned by the address
     */
    function getShares(
        uint256 tokenId,
        address owner
    ) public view returns (uint256) {
        return properties[tokenId].sharesOwned[owner];
    }

    // Additional functions for managing property ownership, dividend distribution, voting rights, etc. can be added here
}
