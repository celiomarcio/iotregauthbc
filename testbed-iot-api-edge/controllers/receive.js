const rp = require('request-promise-native');
const ethereumUtils = require('../libs/ethereumUtils');

//const { hashPersonalMessage, ecsign, ecrecover, toRpcSig, fromRpcSig, keccak256, addHexPrefix, sha3 } = require('ethereumjs-util');
const { default: MerkleTree } = require('merkle-tree-solidity');

const deviceConfig = require('../config/' + global.gConfig.deviceFile); 

console.log(deviceConfig);

//Set API endpoint
const platformEndpoint = global.gConfig.endPoint;

// Gather data and sign
const privateKey = Buffer.from(deviceConfig.privateKey, 'hex');

// Receive payload validate on blockchain and send to Endpoint
exports.postReceive = (req, res, next) => {
    console.time('Gateway')
    console.time('Validate')
    console.log('received payload: ' + JSON.stringify(req.body));
    
    let message = JSON.stringify(req.body);

    let signature = ethereumUtils.signMessageEth(message, privateKey);
    // Validate signature
    if (!ethereumUtils.validateSignatureEth(ethereumUtils.hashMessageEth(message), signature, deviceConfig.publicKey, deviceConfig.address)) {
        process.exit();
    }
    console.timeEnd('Validate')
    // Index of metadata element to send
    const elementToSend = 0;
    // Get Proof
    const proof = ethereumUtils.getProof(deviceConfig.metadata, elementToSend);

    // Build payload
    let payload = {
        deviceId: deviceConfig.deviceId,
        message,
        signature: signature,
        metadata: deviceConfig.metadata[elementToSend],
        proof,
        firmware: deviceConfig.firmware,
        curve: deviceConfig.curve
    }
    
    let options = {
        uri: platformEndpoint,
        method: 'POST',
        body: payload,
        json: true
    };

    // Send to platform
    rp(options)
    .then( parsedBody=>  {
            // POST succeeded...
            res.send(parsedBody);
            console.timeEnd('Gateway')
    })
    .catch(err => {
        res.send(err);
        console.timeEnd('Gateway')
        
    });
};

