# Product Authenticity Smart Contract

The Product Authenticity smart contract enables tracking of product authenticity and ownership using non-fungible tokens (NFTs) on the Ethereum blockchain. It provides a decentralized platform for registering products, verifying authenticity, and transferring ownership securely.

## Features

- **Product Registration:** Allows manufacturers or owners to register products with unique serial numbers, associating them with NFTs.
- **Product Transfer:** Enables transfer of product ownership between addresses, ensuring secure and transparent ownership transfers.
- **Product URI Update:** Provides the contract owner with the ability to update the token URI associated with a product NFT, facilitating metadata updates.
- **Product Deactivation:** Allows the contract owner to deactivate registered products, removing them from the system if necessary.
- **Detailed Product Information:** Offers functions for querying detailed information about registered products, including serial numbers and ownership.

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
