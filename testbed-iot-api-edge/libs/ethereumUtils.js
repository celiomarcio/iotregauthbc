const { 
    hashPersonalMessage,
    ecsign,
    ecrecover,
    toRpcSig,
    fromRpcSig,
    keccak256,
    addHexPrefix,
    sha3 
} = require('ethereumjs-util');

const { default: MerkleTree } = require('merkle-tree-solidity');

const hashMessageEth = message => hashPersonalMessage(Buffer.from(message));

const signMessageEth = (message, privateKey) => {
    let messageHash = hashMessageEth(message);
    console.log('Message hash: ' + messageHash.toString('hex'));
    let { v, r, s } = ecsign(messageHash, privateKey);
    let rpcSignature = toRpcSig(v, r, s);
    console.log('Message signature: ' + rpcSignature);
    return rpcSignature;
};

const validateSignatureEth = (messageHash, signature, publicKey, address) => {
    signature = fromRpcSig(signature);
    let recoveredPublicKey = ecrecover(messageHash, signature.v, signature.r, signature.s);
    let recoveredPublicKeyHex = recoveredPublicKey.toString('hex');
    let recoveredAddress = addHexPrefix(keccak256(recoveredPublicKey).toString('hex').substring(64 - 40));
    console.log('Recovered public key: ' + recoveredPublicKeyHex);
    console.log('Recovered address: ' + recoveredAddress);
    if (recoveredPublicKeyHex === publicKey && recoveredAddress === address) return true;
    return false;
};

const getProof = (metadata,elementToSend) => { 
    // Construct Merkle tree
    const metadataHashes = metadata.map(el => sha3(el));
    const merkleTree = new MerkleTree(metadataHashes);

    // Generate proof
    let proof = merkleTree.getProof(metadataHashes[elementToSend]);
    proof = proof.map(el => addHexPrefix(el.toString('hex')));
    return proof;
};

module.exports.hashMessageEth = hashMessageEth;
module.exports.signMessageEth = signMessageEth;
module.exports.validateSignatureEth = validateSignatureEth;
module.exports.getProof = getProof;