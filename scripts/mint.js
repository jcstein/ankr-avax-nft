// require the correct libraries

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

// Our contract’s ABI (Application Binary Interface) is the interface enabling our js script to interact with our smart contract. Hardhat generates and stores the ABI version of our contract in the artifacts folder as a JSON file.
const contract = require("../artifacts/contracts/AnkrAvalancheNFT.sol/AnkrAvalancheNFT.json");
const contractInterface = contract.abi;

let provider = ethers.provider;

const tokenURI =
  "https://ipfs.io/ipfs/bafybeib3skazl2dhjctsmiroc6ug5zketfooovt53ast5pxytcan2n3zba/avaxankr.json";
const privateKey = `0x${process.env.PRIVATE_KEY}`;
const wallet = new ethers.Wallet(privateKey);

wallet.provider = provider;
const signer = wallet.connect(provider);

// https://docs.ethers.io/v5/api/contract/contract
const nft = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  contractInterface,
  signer
);

const main = () => {
  console.log("Waiting 5 blocks for confirmation...");
  nft
    .mint(process.env.PUBLIC_KEY, tokenURI)
    .then((tx) => tx.wait(5))
    .then((receipt) =>
      console.log(
        `Your transaction is confirmed, its receipt is: ${receipt.transactionHash}`
      )
    )
    .catch((e) => console.log("something went wrong", e));
};

main();
