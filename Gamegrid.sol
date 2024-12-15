// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract GameGrid {
    // Struct used to store user details 
    struct UserProfile {
        string userId;
        string username;
        string email;
        uint256 lastLoggedIn;
        uint256 joinedDate;
        uint256 lvPoints; // Points for level progression
        uint256 ggPoints; // GameGrid-specific points
        string class;
        string race;
        string gender;
        string background;
        string nftImage;
        address walletAddress;
    }

    // Mappings
    mapping(address => UserProfile) private userProfiles;
    mapping(address => bool) private isRegistered;

    // Events
    event UserProfileCreated(address indexed userAddress, string userId);
    event UserProfileUpdated(address indexed userAddress, string userId);
    event PointsAdded(address indexed userAddress, uint256 lvPoints, uint256 ggPoints);
    event PointsRemoved(address indexed userAddress, uint256 lvPoints, uint256 ggPoints);

    // Modifier to check if the user is registered
    modifier onlyRegistered() {
        require(isRegistered[msg.sender], "User not registered.");
        _;
    }

    // Function to create a user profile
    function createUserProfile(
        string memory _username,
        string memory _email,
        string memory _class,
        string memory _race,
        string memory _gender,
        string memory _background,
        string memory _nftImage
    ) public {
        require(!isRegistered[msg.sender], "User already registered.");

        // Generate a unique userId using the username and current timestamp
        string memory userId = string(abi.encodePacked(_username, "_", uint2str(block.timestamp)));

        userProfiles[msg.sender] = UserProfile({
            userId: userId,
            username: _username,
            email: _email,
            lastLoggedIn: block.timestamp,
            joinedDate: block.timestamp,
            lvPoints: 0,
            ggPoints: 0,
            class: _class,
            race: _race,
            gender: _gender,
            background: _background,
            nftImage: _nftImage,
            walletAddress: msg.sender
        });

        isRegistered[msg.sender] = true;
        emit UserProfileCreated(msg.sender, userId);
    }

    // Function to update username
    function updateUsername(string memory _username) public onlyRegistered {
        UserProfile storage user = userProfiles[msg.sender];
        user.username = _username;
        emit UserProfileUpdated(msg.sender, user.userId);
    }

    // Function to update email
    function updateEmail(string memory _email) public onlyRegistered {
        UserProfile storage user = userProfiles[msg.sender];
        user.email = _email;
        emit UserProfileUpdated(msg.sender, user.userId);
    }

    // Function to update class
    function updateClass(string memory _class) public onlyRegistered {
        UserProfile storage user = userProfiles[msg.sender];
        user.class = _class;
        emit UserProfileUpdated(msg.sender, user.userId);
    }

    // Function to update race
    function updateRace(string memory _race) public onlyRegistered {
        UserProfile storage user = userProfiles[msg.sender];
        user.race = _race;
        emit UserProfileUpdated(msg.sender, user.userId);
    }

    // Function to update gender
    function updateGender(string memory _gender) public onlyRegistered {
        UserProfile storage user = userProfiles[msg.sender];
        user.gender = _gender;
        emit UserProfileUpdated(msg.sender, user.userId);
    }

    // Function to update background
    function updateBackground(string memory _background) public onlyRegistered {
        UserProfile storage user = userProfiles[msg.sender];
        user.background = _background;
        emit UserProfileUpdated(msg.sender, user.userId);
    }

    // Function to update NFT image
    function updateNftImage(string memory _nftImage) public onlyRegistered {
        UserProfile storage user = userProfiles[msg.sender];
        user.nftImage = _nftImage;
        emit UserProfileUpdated(msg.sender, user.userId);
    }

    // Function to add points
    function addPoints(uint256 _lvPoints, uint256 _ggPoints) public onlyRegistered {
        UserProfile storage user = userProfiles[msg.sender];

        user.lvPoints += _lvPoints;
        user.ggPoints += _ggPoints;

        emit PointsAdded(msg.sender, _lvPoints, _ggPoints);
    }

    // Function to remove points
    function removePoints(uint256 _lvPoints, uint256 _ggPoints) public onlyRegistered {
        UserProfile storage user = userProfiles[msg.sender];

        require(user.lvPoints >= _lvPoints, "Insufficient LV points.");
        require(user.ggPoints >= _ggPoints, "Insufficient GG points.");

        user.lvPoints -= _lvPoints;
        user.ggPoints -= _ggPoints;

        emit PointsRemoved(msg.sender, _lvPoints, _ggPoints);
    }

    // Function to retrieve a user's profile
    function getUserProfile() public view onlyRegistered returns (UserProfile memory) {
        return userProfiles[msg.sender];
    }

    // Function to retrieve the wallet address of the connected user
    function getUserWalletAddress() public view onlyRegistered returns (address) {
        return userProfiles[msg.sender].walletAddress;
    }

    // Helper function to convert uint to string
    function uint2str(uint256 _i) internal pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        uint256 temp = _i;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (_i != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(_i % 10)));
            _i /= 10;
        }
        return string(buffer);
    }
}
