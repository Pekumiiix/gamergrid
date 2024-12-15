import { ethers } from "ethers";

// Import the ABI JSON or paste it directly here
const contractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lvPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ggPoints",
        type: "uint256",
      },
    ],
    name: "addPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_class",
        type: "string",
      },
      {
        internalType: "string",
        name: "_race",
        type: "string",
      },
      {
        internalType: "string",
        name: "_gender",
        type: "string",
      },
      {
        internalType: "string",
        name: "_background",
        type: "string",
      },
      {
        internalType: "string",
        name: "_nftImage",
        type: "string",
      },
    ],
    name: "createUserProfile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lvPoints",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ggPoints",
        type: "uint256",
      },
    ],
    name: "PointsAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lvPoints",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ggPoints",
        type: "uint256",
      },
    ],
    name: "PointsRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lvPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ggPoints",
        type: "uint256",
      },
    ],
    name: "removePoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_background",
        type: "string",
      },
    ],
    name: "updateBackground",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_class",
        type: "string",
      },
    ],
    name: "updateClass",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
    ],
    name: "updateEmail",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_gender",
        type: "string",
      },
    ],
    name: "updateGender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_nftImage",
        type: "string",
      },
    ],
    name: "updateNftImage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_race",
        type: "string",
      },
    ],
    name: "updateRace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
    ],
    name: "updateUsername",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "userId",
        type: "string",
      },
    ],
    name: "UserProfileCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "userId",
        type: "string",
      },
    ],
    name: "UserProfileUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "getUserProfile",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "userId",
            type: "string",
          },
          {
            internalType: "string",
            name: "username",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "lastLoggedIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "joinedDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lvPoints",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ggPoints",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "class",
            type: "string",
          },
          {
            internalType: "string",
            name: "race",
            type: "string",
          },
          {
            internalType: "string",
            name: "gender",
            type: "string",
          },
          {
            internalType: "string",
            name: "background",
            type: "string",
          },
          {
            internalType: "string",
            name: "nftImage",
            type: "string",
          },
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
        ],
        internalType: "struct GameGrid.UserProfile",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserWalletAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const contractAddress = "0xCe3c0C888C7A3d4ec1948849416d521A603b7964";

// Check if the user has MetaMask and request account access
export async function createUserProfile(
  username,
  email,
  userClass,
  race,
  gender
) {
  // Check if we're in a browser environment
  if (typeof window !== "undefined" && window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Rest of your contract interaction code
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const tx = await contract.createUserProfile(
        username,
        email,
        userClass,
        race,
        gender,
        "Forest",
        "NFTImageURI"
      );
      await tx.wait();
      console.log("Profile created successfully!");
      return { hash: tx.hash };
    } catch (error) {
      console.error("Error creating profile:", error);
      throw error;
    }
  } else {
    throw new Error("Ethereum provider not available");
  }
}
