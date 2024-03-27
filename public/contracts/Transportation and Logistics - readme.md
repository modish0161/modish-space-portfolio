# Transportation and Logistics Smart Contract

This smart contract facilitates freight tracking and automated carrier settlements in the transportation and logistics industry. It enables the registration of freight items, confirmation of delivery, and settlement of payments to carriers upon successful delivery.

## Features

- **Freight Registration**: Allows the owner to register new freight items with unique tracking IDs, designated carriers, expected delivery dates, and settlement amounts.
- **Delivery Confirmation**: Enables the designated carrier to confirm the delivery of freight items, triggering the settlement of payments.
- **Automated Payment Settlement**: Automatically settles payments to carriers upon delivery confirmation, transferring the agreed-upon settlement amount using a specified ERC20 token.

## Getting Started

1. Deploy the Contract: Deploy the `TransportLogisticsContract` contract, providing the address of the ERC20 token to be used for settlements.
2. Register Freight: Use the `registerFreight` function to register new freight items, specifying the tracking ID, carrier address, delivery due date, and settlement amount.
3. Confirm Delivery: Carriers can confirm the delivery of freight items using the `confirmDelivery` function, triggering automated payment settlements.
4. Settlements: Upon successful delivery confirmation, payments are automatically settled to carriers using the specified ERC20 token.

## Usage

### Public Functions

- `registerFreight(string memory _trackingId, address _carrier, uint256 _deliveryDueDate, uint256 _settlementAmount)`: Registers a new freight item with the specified details.
- `confirmDelivery(string memory _trackingId)`: Confirms the delivery of a freight item, triggering automated payment settlements.

### External Functions

- `freights(string memory _trackingId) external view returns (Freight memory)`: Retrieves freight details by tracking ID.
- `settlements(string memory _trackingId) external view returns (Settlement memory)`: Retrieves settlement details by tracking ID.

## Notes

- Ensure that the specified ERC20 token contract is deployed and accessible for payment settlements.
- Additional functionalities such as dispute resolution mechanisms, freight updates, integration with IoT devices for real-time tracking, and support for Layer 2 solutions like zk-Rollups can be implemented as needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
