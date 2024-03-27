// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import OpenZeppelin's standards for security and ownership
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
// Import for handling strings
import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title PatientRecordsManagement
 * @dev Implements secure and private management of patient health records
 */
contract PatientRecordsManagement is Ownable, ReentrancyGuard {
    using Strings for uint256;

    struct PatientRecord {
        uint256 id;
        string data; // Encrypted data
        address patient;
        bool privacyConsent; // Consent for sharing data
        uint256 updatedAt; // Timestamp of last record update
    }

    mapping(uint256 => PatientRecord) private patientRecords;
    mapping(address => uint256[]) private patientToRecords;

    event RecordCreated(
        uint256 indexed id,
        address indexed patient,
        uint256 indexed updatedAt
    );
    event RecordUpdated(
        uint256 indexed id,
        string newData,
        uint256 indexed updatedAt
    );
    event ConsentUpdated(uint256 indexed id, bool newConsent);

    /**
     * @dev Create a new patient record. Only the contract owner (healthcare provider) can add records.
     * @param _id Unique ID for the patient record
     * @param _data Encrypted patient data
     * @param _patient Address of the patient
     */
    function createRecord(
        uint256 _id,
        string memory _data,
        address _patient
    ) public onlyOwner {
        require(
            patientRecords[_id].patient == address(0),
            "Record already exists."
        );
        patientRecords[_id] = PatientRecord(
            _id,
            _data,
            _patient,
            false,
            block.timestamp
        );
        patientToRecords[_patient].push(_id);
        emit RecordCreated(_id, _patient, block.timestamp);
    }

    /**
     * @dev Update patient record data. Ensures only the patient can update their consent.
     * @param _id Unique ID for the patient record
     * @param _newData New encrypted patient data
     */
    function updateRecord(uint256 _id, string memory _newData) public {
        require(
            patientRecords[_id].patient == msg.sender,
            "Unauthorized access."
        );
        patientRecords[_id].data = _newData;
        patientRecords[_id].updatedAt = block.timestamp;
        emit RecordUpdated(_id, _newData, block.timestamp);
    }

    /**
     * @dev Update consent for sharing patient record.
     * @param _id Unique ID for the patient record
     * @param _newConsent New consent value
     */
    function updateConsent(uint256 _id, bool _newConsent) public {
        require(
            patientRecords[_id].patient == msg.sender,
            "Unauthorized access."
        );
        patientRecords[_id].privacyConsent = _newConsent;
        emit ConsentUpdated(_id, _newConsent);
    }

    /**
     * @dev Retrieve patient record by ID.
     * @param _id Unique ID for the patient record
     * @return Patient record details
     */
    function getRecord(uint256 _id) public view returns (PatientRecord memory) {
        return patientRecords[_id];
    }

    /**
     * @dev Retrieve all records associated with a patient.
     * @param _patient Address of the patient
     * @return Array of record IDs
     */
    function getPatientRecords(
        address _patient
    ) public view returns (uint256[] memory) {
        return patientToRecords[_patient];
    }

    /**
     * @dev Retrieve the total number of patient records.
     * @return Total number of records
     */
    function getTotalRecords() public view returns (uint256) {
        return patientToRecords[msg.sender].length;
    }

    /**
     * @dev Retrieve the total number of records for a patient.
     * @param _patient Address of the patient
     * @return Total number of records
     */
    function getTotalPatientRecords(
        address _patient
    ) public view returns (uint256) {
        return patientToRecords[_patient].length;
    }
}
