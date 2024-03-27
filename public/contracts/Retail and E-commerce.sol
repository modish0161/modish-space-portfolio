// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title LoyaltyRewardsProgram
 * A decentralized platform for managing loyalty points as ERC20 tokens
 */
contract LoyaltyRewardsProgram is ERC721, ReentrancyGuard, Ownable {
    IERC20 public rewardsToken;

    struct LoyaltyCard {
        uint256 points;
        bool isActive;
        uint256 lastRedeemedAt; // Timestamp of last points redemption
    }

    mapping(uint256 => LoyaltyCard) public loyaltyCards;

    event PointsRedeemed(address indexed user, uint256 points, uint256 tokenId);

    constructor(address _rewardsToken) ERC721("LoyaltyCard", "LCARD") {
        require(_rewardsToken != address(0), "Invalid rewards token address");
        rewardsToken = IERC20(_rewardsToken);
    }

    function createLoyaltyCard(
        address user,
        uint256 initialPoints
    ) external onlyOwner returns (uint256) {
        uint256 tokenId = totalSupply() + 1;
        _mint(user, tokenId);
        loyaltyCards[tokenId] = LoyaltyCard(
            initialPoints,
            true,
            block.timestamp
        );
        return tokenId;
    }

    function redeemPoints(
        uint256 tokenId,
        uint256 points
    ) external nonReentrant {
        require(ownerOf(tokenId) == msg.sender, "Not the card owner");
        require(loyaltyCards[tokenId].isActive, "Card is inactive");
        require(loyaltyCards[tokenId].points >= points, "Insufficient points");

        loyaltyCards[tokenId].points -= points;
        loyaltyCards[tokenId].lastRedeemedAt = block.timestamp;
        rewardsToken.transfer(msg.sender, points);

        emit PointsRedeemed(msg.sender, points, tokenId);
    }

    function deactivateLoyaltyCard(uint256 tokenId) external onlyOwner {
        require(loyaltyCards[tokenId].isActive, "Card is already inactive");
        loyaltyCards[tokenId].isActive = false;
    }

    function reactivateLoyaltyCard(uint256 tokenId) external onlyOwner {
        require(!loyaltyCards[tokenId].isActive, "Card is already active");
        loyaltyCards[tokenId].isActive = true;
    }

    function updateRewardsToken(address newRewardsToken) external onlyOwner {
        require(newRewardsToken != address(0), "Invalid rewards token address");
        rewardsToken = IERC20(newRewardsToken);
    }

    function getLoyaltyCardDetails(
        uint256 tokenId
    ) external view returns (LoyaltyCard memory) {
        return loyaltyCards[tokenId];
    }

    // Additional functions for managing loyalty cards and points can be added here
}
