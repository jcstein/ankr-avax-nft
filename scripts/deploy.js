// open main asynchronous function will handle deployment
async function main() {
  // use ethers to pass the name of our contract to getContractFactory
  const nftContractFactory = await ethers.getContractFactory(
    "AnkrAvalancheNFT"
  );

  // create variable to allow us to use the deploy function of getContractFactory
  const nftContract = await nftContractFactory.deploy();

  // log the address of the Contract in our console
  console.log("Contract deployed to:", nftContract.address);
  process.exit(0);
}

// run main, catch error, if any, and log in console
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
