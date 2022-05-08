/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.6",

  networks: {
    avalanche: {
      url: "https://rpc.ankr.com/avalanche",
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 43114,
      gasLimit: 6000000000,
    },
    fuji: {
      url: "https://rpc.ankr.com/avalanche_fuji",
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 43113,
    },
  },
  etherscan: {
    apiKey: process.env.SNOWTRACE_API_KEY,
    apiUrl: "https://api.snowtrace.io",
    browserURL: "https://snowtrace.io/",
  },
};
