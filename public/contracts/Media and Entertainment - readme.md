# Media Entertainment Smart Contract

## Overview

The Media Entertainment Smart Contract is a decentralized application (DApp) built on the Ethereum blockchain that facilitates the creation, ownership, and distribution of non-fungible tokens (NFTs) for digital collectibles in the media and entertainment industry. The contract includes features for royalty distribution, fan engagement, and payment splitting among stakeholders.

## Features

1. **NFT Minting**: Allows content creators to mint NFTs for digital collectibles, such as artworks, music, videos, and more.
2. **Royalty Distribution**: Assigns royalty percentages to NFTs, ensuring content creators receive a portion of sales proceeds for each transaction.
3. **Payment Splitting**: Distributes payments among shareholders based on predefined shares, enabling fair revenue distribution among stakeholders.
4. **Royalty Update**: Provides functionality for content creators to update the royalty percentage for their NFTs.
5. **Royalty Withdrawal**: Allows NFT owners to withdraw accumulated royalties from their NFTs.

## Usage

### Prerequisites

- Install [Metamask](https://metamask.io/) or any Ethereum-compatible wallet.
- Connect to an Ethereum test network or mainnet.

### Deploying the Contract

1. Deploy the `MediaEntertainmentContract.sol` smart contract to an Ethereum network.
2. Specify the initial shareholders and their shares during contract deployment.
3. Interact with the contract using Ethereum-compatible wallets or DApp browsers.

### Minting NFTs

1. Call the `mintNFT` function to mint NFTs for digital collectibles.
2. Provide the recipient address, metadata URI, and royalty percentage for each NFT.

### Updating Royalty Percentage

1. Call the `updateRoyaltyPercentage` function to update the royalty percentage for a specific NFT.
2. Only the owner of the NFT can update the royalty percentage.

### Withdrawing Royalties

1. Call the `withdrawRoyalties` function to withdraw accumulated royalties for a specific NFT.
2. Only the owner of the NFT can withdraw royalties.

## License

This project is licensed under the [MIT License](LICENSE).
