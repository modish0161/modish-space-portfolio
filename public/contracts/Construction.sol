pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "zkSNARKs-lib.sol"; // Placeholder for the actual zk-SNARKs library

contract ConstructionProjectManagement is ERC721, Ownable, ReentrancyGuard {
    struct Project {
        uint256 id;
        string name;
        address contractor;
        uint256 budget;
        uint256 milestonesCompleted;
        uint256 totalMilestones;
        mapping(uint256 => bool) milestoneCompleted;
    }

    struct Material {
        uint256 id;
        string name;
        string origin;
        string certificationURI; // URI to certification or proof of ethical sourcing
        bool isEthicallySourced;
    }

    mapping(uint256 => Project) public projects;
    mapping(uint256 => Material) public materials;

    event ProjectCreated(
        uint256 indexed id,
        string name,
        address contractor,
        uint256 budget,
        uint256 totalMilestones
    );
    event MilestoneCompleted(uint256 indexed projectId, uint256 milestoneIndex);
    event MaterialRegistered(
        uint256 indexed id,
        string name,
        string origin,
        bool isEthicallySourced
    );

    constructor() ERC721("ConstructionProjectManagement", "CPM") {}

    /**
     * @dev Creates a new construction project.
     */
    function createProject(
        string memory name,
        address contractor,
        uint256 budget,
        uint256 totalMilestones
    ) external onlyOwner {
        uint256 projectId = totalSupply() + 1;
        _safeMint(contractor, projectId);
        projects[projectId] = Project(
            projectId,
            name,
            contractor,
            budget,
            0,
            totalMilestones
        );
        emit ProjectCreated(
            projectId,
            name,
            contractor,
            budget,
            totalMilestones
        );
    }

    /**
     * @dev Completes a milestone of a project.
     */
    function completeMilestone(
        uint256 projectId,
        uint256 milestoneIndex
    ) external {
        require(
            ownerOf(projectId) == msg.sender,
            "Only the project owner can complete milestones"
        );
        require(
            !projects[projectId].milestoneCompleted[milestoneIndex],
            "Milestone already completed"
        );

        projects[projectId].milestoneCompleted[milestoneIndex] = true;
        projects[projectId].milestonesCompleted++;

        emit MilestoneCompleted(projectId, milestoneIndex);

        // Additional logic for payment release based on milestone completion
    }

    /**
     * @dev Registers a new material used in the project.
     */
    function registerMaterial(
        string memory name,
        string memory origin,
        string memory certificationURI,
        bytes memory proof
    ) external {
        require(
            verifyEthicalSourcingWithZkSnark(proof),
            "Material sourcing not verified"
        );

        uint256 materialId = totalSupply() + 1;
        _safeMint(msg.sender, materialId);
        materials[materialId] = Material(
            materialId,
            name,
            origin,
            certificationURI,
            true
        );

        emit MaterialRegistered(materialId, name, origin, true);
    }

    // zk-SNARKs function for verifying ethical sourcing without revealing sensitive details
    function verifyEthicalSourcingWithZkSnark(
        bytes memory proof
    ) internal view returns (bool) {
        // Implement zk-SNARKs verification logic here
        return true; // Placeholder return
    }

    // Additional functionalities like dispute resolution, change order management, and integration with external data sources (for material tracking) could be implemented here.
}
