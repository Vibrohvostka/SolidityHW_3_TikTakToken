require('dotenv').config();

//let TikTakToken = artifacts.require("./TikTakToken.sol");
let Trading = artifacts.require("./Trading.sol");

module.exports = async function (deployer) {
    await deployer.deploy(Trading);
}