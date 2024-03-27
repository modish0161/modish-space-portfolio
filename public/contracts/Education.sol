// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import OpenZeppelin's ERC-721 token standard for NFTs
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// Importing OpenZeppelin's contracts for safe math operations, access control, and enumerable extensions
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title EducationCredential
 * @dev Implements credential verification and record-keeping for educational institutions
 */
contract EducationCredential is ERC721, Ownable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    // Structure to hold credential details
    struct Credential {
        uint256 id;
        string name;
        string issueDate;
        string issuer;
        bool verified;
        string metadataURI; // URI to additional metadata for the credential
    }

    // Counter to track credential IDs
    Counters.Counter private _credentialIds;

    // Mapping from token ID to Credential
    mapping(uint256 => Credential) private _credentials;

    // Event for credential issuance
    event CredentialIssued(
        uint256 indexed id,
        string name,
        string issueDate,
        string issuer
    );

    // Event for credential verification
    event CredentialVerified(uint256 indexed id, bool verified);

    // Constructor for the contract
    constructor() ERC721("EducationCredential", "EDUCR") {}

    /**
     * @dev Issue a new credential
     * @param _to address of the credential recipient
     * @param _name name of the credential
     * @param _issueDate date of issuance
     * @param _issuer issuer of the credential
     * @param _metadataURI URI to additional metadata for the credential
     */
    function issueCredential(
        address _to,
        string memory _name,
        string memory _issueDate,
        string memory _issuer,
        string memory _metadataURI
    ) public onlyOwner {
        _credentialIds.increment();
        uint256 newCredentialId = _credentialIds.current();
        _mint(_to, newCredentialId);
        _credentials[newCredentialId] = Credential(
            newCredentialId,
            _name,
            _issueDate,
            _issuer,
            false,
            _metadataURI
        );
        emit CredentialIssued(newCredentialId, _name, _issueDate, _issuer);
    }

    /**
     * @dev Verify a credential
     * @param _id credential ID
     */
    function verifyCredential(uint256 _id) public onlyOwner {
        require(_exists(_id), "Credential does not exist.");
        _credentials[_id].verified = true;
        emit CredentialVerified(_id, true);
    }

    /**
     * @dev Retrieve details of a credential
     * @param _id credential ID
     * @return credential details
     */
    function getCredential(
        uint256 _id
    ) public view returns (Credential memory) {
        require(_exists(_id), "Credential does not exist.");
        return _credentials[_id];
    }

    /**
     * @dev Update metadata URI for a credential
     * @param _id credential ID
     * @param _metadataURI new metadata URI
     */
    function updateCredentialMetadata(
        uint256 _id,
        string memory _metadataURI
    ) public onlyOwner {
        require(_exists(_id), "Credential does not exist.");
        _credentials[_id].metadataURI = _metadataURI;
    }
}
