# Environmental Conservation Contract

The Environmental Conservation Contract is a smart contract designed to incentivize and reward participants for contributing to environmental conservation efforts. It allows users to perform specified environmental actions and earn rewards in the form of tokens.

## Features

- **Action Management**: Contract owner can add environmental actions, each with a specified reward amount.
- **Participant Engagement**: Participants can complete actions and earn rewards based on the specified reward amount.
- **Reward Distribution**: Earned rewards are stored in the participant's balance and can be withdrawn at any time.
- **Deactivation**: Contract owner can deactivate actions if needed.

## Usage

### Adding Actions

To add a new environmental action, the contract owner can call the `addAction` function, specifying the description of the action and the reward amount.

### Completing Actions

Participants can complete actions by calling the `completeAction` function, passing the ID of the action they want to complete. Upon completion, the participant earns the specified reward amount.

### Withdrawing Rewards

Participants can withdraw their earned rewards by calling the `withdrawRewards` function. Rewards are transferred from the participant's balance to their wallet.

### Deactivating Actions

The contract owner can deactivate actions by calling the `deactivateAction` function, passing the ID of the action to deactivate. Deactivated actions cannot be completed by participants.

## Installation

To deploy and interact with the Environmental Conservation Contract, you will need:

- An Ethereum wallet such as MetaMask
- An Ethereum development environment such as Remix IDE or Truffle

## License

This project is licensed under the terms of the MIT license.
