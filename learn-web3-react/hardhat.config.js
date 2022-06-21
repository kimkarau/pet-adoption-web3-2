require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "bsctestnet",
  networks: {
    bsctestnet: {
      url: process.env.MORALIS_API_URL,
      accounts: [`0x${process.env.METAMASK_PRIVATE_KEY}`]
    }
  },
  paths: {
    artifacts: "./src/artifacts"
  }
};