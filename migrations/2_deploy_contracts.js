var Chitta = artifacts.require("./Chitta.sol");
var Users = artifacts.require("./Users.sol");
module.exports = function(deployer) {
  deployer.deploy(Chitta, "Arani", "TVM", "@", 10000, {gas: '6952225'});
  deployer.deploy(Users);
};
