# Patient Records Management Smart Contract

The Patient Records Management smart contract facilitates secure and private management of patient health records on the blockchain. It enables healthcare providers to create, update, and manage patient records while ensuring data privacy, security, and transparency.

## Features

- **Record Creation:** Healthcare providers can create new patient records containing encrypted health data.
- **Record Update:** Patients can update their health records, ensuring data accuracy and integrity.
- **Consent Management:** Patients can manage consent for sharing their health data with authorized parties.
- **Timestamp Tracking:** Records include a timestamp of the last update, providing visibility into record activity.
- **Record Retrieval:** Provides functions to retrieve patient records, total records, and total patient records for better data management and transparency.

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

This project is licensed under the [MIT License](LICENSE).
