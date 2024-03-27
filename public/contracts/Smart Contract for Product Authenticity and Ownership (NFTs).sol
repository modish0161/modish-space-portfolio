// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ProductAuthenticity
 * Manages authenticity and ownership of products through NFTs
 */
contract ProductAuthenticity is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId = 1;

    struct Product {
        string serialNumber;
        address owner;
        bool isRegistered;
    }

    mapping(uint256 => Product) public products;

    event ProductRegistered(
        uint256 indexed tokenId,
        string serialNumber,
        address owner
    );
    event ProductTransferred(uint256 indexed tokenId, address from, address to);

    constructor() ERC721("AuthenticProduct", "APROD") {}

    function registerProduct(
        string memory serialNumber,
        string memory tokenURI
    ) external returns (uint256) {
        uint256 currentTokenId = _nextTokenId++;
        _mint(msg.sender, currentTokenId);
        _setTokenURI(currentTokenId, tokenURI);
        products[currentTokenId] = Product(serialNumber, msg.sender, true);

        emit ProductRegistered(currentTokenId, serialNumber, msg.sender);
        return currentTokenId;
    }

    function transferProduct(uint256 tokenId, address to) external {
        require(ownerOf(tokenId) == msg.sender, "Not the product owner");
        require(products[tokenId].isRegistered, "Product is not registered");

        _transfer(msg.sender, to, tokenId);
        products[tokenId].owner = to;

        emit ProductTransferred(tokenId, msg.sender, to);
    }

    function updateProductURI(
        uint256 tokenId,
        string memory newTokenURI
    ) external onlyOwner {
        require(_exists(tokenId), "Token does not exist");
        _setTokenURI(tokenId, newTokenURI);
    }

    function deactivateProduct(uint256 tokenId) external onlyOwner {
        require(products[tokenId].isRegistered, "Product is not registered");
        delete products[tokenId];
        _burn(tokenId);
    }

    // Additional functions for querying product details and ownership can be added here
}
