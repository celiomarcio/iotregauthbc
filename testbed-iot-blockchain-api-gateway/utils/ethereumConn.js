const Web3 = require('web3');
const ethereumsLocalNode = global.gConfig.node;
const { hashPersonalMessage, addHexPrefix, sha3 } = require('ethereumjs-util');
const hashMessageHex = message => addHexPrefix(hashPersonalMessage(Buffer.from(message)).toString('hex'));
const DeviceManagerArtifact = require('./DeviceManager.json');
let latestNetwork = DeviceManagerArtifact.networks[Object.keys(DeviceManagerArtifact.networks).reduce((res, curr) => curr > res ? curr : res)];

// Connect to local node
const web3 = new Web3(new Web3.providers.HttpProvider(ethereumsLocalNode));
web3.eth.defaultAccount = web3.eth.accounts[0];

// Instance using ABI and contract address
const deviceManager = web3.eth.contract(DeviceManagerArtifact.abi).at(latestNetwork.address);

const isValidMessage = (deviceIdPar, messagePar, signaturePar) => {
    let validMessage = deviceManager.isValidEthMessage(deviceIdPar, hashMessageHex(messagePar), signaturePar);
    console.log('valid message: ' + validMessage);
    return validMessage;
  };

const isValidMetadata = (deviceIdPar, metadataPar, proofPar) => {
    let metadataHash = addHexPrefix(sha3(metadataPar).toString('hex'));
    let validMetadata = deviceManager.isValidMetadataMember(deviceIdPar, proofPar, metadataHash);
    console.log('valid metadata: ' + validMetadata);
    return validMetadata;
};

const isValidFirmware = (deviceIdPar, firmwarePar) =>{
    let firmwareHash = addHexPrefix(sha3(firmwarePar).toString('hex'));
    let validFirmware = deviceManager.isValidFirmwareHash(deviceIdPar, firmwareHash);
    console.log('valid firmware: ' + validFirmware);
    return validFirmware;
};

module.exports.isValidFirmware = isValidFirmware;
module.exports.isValidMetadata = isValidMetadata;
module.exports.isValidMessage = isValidMessage ;