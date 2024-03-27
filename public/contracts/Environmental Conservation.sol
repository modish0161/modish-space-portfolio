// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title EnvironmentalConservationContract
 * @dev Smart contract for incentivizing and rewarding environmental conservation efforts.
 */
contract EnvironmentalConservationContract is ReentrancyGuard, Ownable {
    struct Action {
        string description;
        uint256 rewardAmount;
        uint256 totalRewards;
        bool isActive;
    }

    IERC20 public rewardToken;
    mapping(address => uint256) public rewardsBalance;
    mapping(uint256 => Action) public actions;
    uint256 public nextActionId;

    event ActionAdded(
        uint256 indexed actionId,
        string description,
        uint256 rewardAmount
    );
    event ActionCompleted(
        address indexed participant,
        uint256 indexed actionId
    );

    constructor(address _rewardToken) {
        rewardToken = IERC20(_rewardToken);
    }

    function addAction(
        string memory _description,
        uint256 _rewardAmount
    ) external onlyOwner {
        require(_rewardAmount > 0, "Reward amount must be greater than zero.");
        actions[nextActionId] = Action(_description, _rewardAmount, 0, true);
        emit ActionAdded(nextActionId, _description, _rewardAmount);
        nextActionId++;
    }

    function completeAction(uint256 _actionId) external nonReentrant {
        Action storage action = actions[_actionId];
        require(action.isActive, "Action is not active.");
        require(
            action.rewardAmount > 0,
            "Reward amount must be greater than zero."
        );

        action.totalRewards += action.rewardAmount;
        rewardsBalance[msg.sender] += action.rewardAmount;
        emit ActionCompleted(msg.sender, _actionId);
    }

    function withdrawRewards() external nonReentrant {
        uint256 amount = rewardsBalance[msg.sender];
        require(amount > 0, "No rewards to withdraw.");
        rewardsBalance[msg.sender] = 0;
        rewardToken.transfer(msg.sender, amount);
    }

    function deactivateAction(uint256 _actionId) external onlyOwner {
        actions[_actionId].isActive = false;
    }
}
