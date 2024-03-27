# Loyalty Rewards Program Smart Contract

The Loyalty Rewards Program smart contract enables retail and e-commerce businesses to manage loyalty points as ERC20 tokens on the Ethereum blockchain. It provides a decentralized platform for issuing, redeeming, and managing loyalty points for customers.

## Features

- **Loyalty Card Creation:** Allows businesses to create loyalty cards for customers, assigning initial points upon creation.
- **Points Redemption:** Customers can redeem loyalty points for rewards, transferring points to the business in exchange for products or services.
- **Card Activation/Deactivation:** Provides functions for businesses to activate or deactivate loyalty cards, enabling control over card status.
- **Rewards Token Update:** Allows the contract owner to update the rewards token contract address, ensuring flexibility in token management.
- **Timestamp Tracking:** Tracks the timestamp of the last points redemption for each loyalty card, providing insights into card activity.
- **Detailed Card Information:** Offers a function to retrieve detailed information about a loyalty card, enhancing transparency and user insight.

## Usage

### Prerequisites

- Truffle Suite or Hardhat for development and testing
- Node.js and npm installed

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Testing

Run the Truffle or Hardhat tests:

```bash
truffle test
# or
npx hardhat test
```

### Deployment

Deploy the smart contract to your desired blockchain network using Truffle or Hardhat.

### Examples

Examples of interacting with the smart contract can be found in the `examples/` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).
