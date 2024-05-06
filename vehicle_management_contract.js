const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// Assuming the smart contract has already been deployed and ABI is known
const contractABI = [ /* ABI details here */ ];
const contractAddress = '0x123abc456def...';

const vehicleContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to register a new vehicle
async function registerVehicle(vehicleId, ownerAddress) {
  const accounts = await web3.eth.getAccounts();
  return vehicleContract.methods.registerVehicle(vehicleId).send({ from: ownerAddress });
}

// Function to update vehicle status
async function updateVehicleStatus(vehicleId, newStatus) {
  const accounts = await web3.eth.getAccounts();
  return vehicleContract.methods.updateStatus(vehicleId, newStatus).send({ from: accounts[0] });
}

module.exports = { registerVehicle, updateVehicleStatus };
