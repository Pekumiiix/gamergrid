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

// Address of your deployed contract
const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";

// Connect to Ethereum provider (MetaMask, for instance)
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// Connect to your contract
const contract = new ethers.Contract(contractAddress, contractABI, signer);

// Example: Call the `createUserProfile` function
export async function createUserProfile() {
  try {
    const tx = await contract.createUserProfile(
      "JohnDoe", // username
      "john@example.com", // email
      "WARRIOR", // class
      "HUMAN", // race
      "Male", // gender
      "Forest", // background
      "NFTImageURI" // nftImage
    );
    await tx.wait(); // Wait for the transaction to be mined
    console.log("Profile created successfully!");
  } catch (error) {
    console.error("Error creating profile:", error);
  }
}
