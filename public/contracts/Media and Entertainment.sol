// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/finance/PaymentSplitter.sol";

/**
 * @title MediaEntertainmentContract
 * @dev Implements royalty distribution and NFT-based fan engagement
 */
contract MediaEntertainmentContract is ERC721URIStorage, PaymentSplitter {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    mapping(uint256 => uint256) public royalties; // TokenID to royalty percentage

    address[] private shareholders;
    uint256[] private shares;

    constructor(
        address[] memory _shareholders,
        uint256[] memory _shares
    )
        ERC721("MediaEntertainmentNFT", "MENT")
        PaymentSplitter(_shareholders, _shares)
    {
        require(
            _shareholders.length == _shares.length,
            "Shareholders and shares array lengths must match"
        );
        shareholders = _shareholders;
        shares = _shares;
    }

    /**
     * @dev Mints NFTs for digital collectibles and assigns royalties
     * @param recipient Recipient of the NFT
     * @param metadataURI URI for the NFT's metadata
     * @param royaltyPercentage Percentage of sales to be paid as royalties
     * @return tokenId The ID of the minted token
     */
    function mintNFT(
        address recipient,
        string memory metadataURI,
        uint256 royaltyPercentage
    ) public returns (uint256 tokenId) {
        require(
            royaltyPercentage <= 100,
            "Royalty percentage cannot exceed 100"
        );
        _tokenIds.increment();
        tokenId = _tokenIds.current();
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, metadataURI);
        royalties[tokenId] = royaltyPercentage;
        return tokenId;
    }

    /**
     * @dev Splits payment among shareholders based on their shares for each sale
     * Overridden to distribute royalties for secondary sales
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        super._afterTokenTransfer(from, to, tokenId);
        if (from != address(0)) {
            // Secondary sale
            uint256 saleAmount = msg.value;
            uint256 royaltyAmount = (saleAmount * royalties[tokenId]) / 100;
            (bool sent, ) = from.call{value: royaltyAmount}("");
            require(sent, "Failed to send Ether");
            // Split the remaining amount
            for (uint256 i = 0; i < shareholders.length; i++) {
                (sent, ) = shareholders[i].call{
                    value: ((saleAmount - royaltyAmount) * shares[i]) /
                        totalShares()
                }("");
                require(sent, "Failed to send Ether");
            }
        }
    }

    /**
     * @dev Updates the royalty percentage for a specific NFT token
     * @param tokenId The ID of the NFT token
     * @param newRoyaltyPercentage The new royalty percentage to set
     */
    function updateRoyaltyPercentage(
        uint256 tokenId,
        uint256 newRoyaltyPercentage
    ) external {
        require(
            ownerOf(tokenId) == msg.sender,
            "Only the owner can update the royalty percentage"
        );
        require(
            newRoyaltyPercentage <= 100,
            "Royalty percentage cannot exceed 100"
        );
        royalties[tokenId] = newRoyaltyPercentage;
    }

    /**
     * @dev Withdraws accumulated royalties for a specific NFT token
     * @param tokenId The ID of the NFT token
     */
    function withdrawRoyalties(uint256 tokenId) external {
        require(
            ownerOf(tokenId) == msg.sender,
            "Only the owner can withdraw royalties"
        );
        uint256 royaltyAmount = (address(this).balance * royalties[tokenId]) /
            100;
        (bool sent, ) = msg.sender.call{value: royaltyAmount}("");
        require(sent, "Failed to send Ether");
    }

    // Additional functions for managing NFT metadata, updating royalty percentages,
    // and interacting with external data for consumption tracking could be added here.
}
