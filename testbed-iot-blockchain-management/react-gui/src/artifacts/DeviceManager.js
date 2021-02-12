{
  "contractName": "DeviceManager",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_deviceId",
          "type": "uint256"
        },
        {
          "name": "_newMetadataHash",
          "type": "bytes32"
        }
      ],
      "name": "updateMetadataHash",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_deviceId",
          "type": "uint256"
        }
      ],
      "name": "isDeviceAnEntity",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "devices",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "identifier",
          "type": "bytes32"
        },
        {
          "name": "metadataHash",
          "type": "bytes32"
        },
        {
          "name": "firmwareHash",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "ownerDeviceCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_signatureId",
          "type": "uint256"
        }
      ],
      "name": "revokeSignature",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_identifier",
          "type": "bytes32"
        },
        {
          "name": "_metadataHash",
          "type": "bytes32"
        },
        {
          "name": "_firmwareHash",
          "type": "bytes32"
        }
      ],
      "name": "createDevice",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "getDevicesByOwner",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_deviceId",
          "type": "uint256"
        },
        {
          "name": "_newIdentifier",
          "type": "bytes32"
        }
      ],
      "name": "updateIdentifier",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_data",
          "type": "string"
        }
      ],
      "name": "updateEntityData",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_deviceId",
          "type": "uint256"
        },
        {
          "name": "_newFirmwareHash",
          "type": "bytes32"
        }
      ],
      "name": "updateFirmwareHash",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "signatures",
      "outputs": [
        {
          "name": "signer",
          "type": "address"
        },
        {
          "name": "deviceId",
          "type": "uint256"
        },
        {
          "name": "expiryTime",
          "type": "uint256"
        },
        {
          "name": "revoked",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_deviceId",
          "type": "uint256"
        },
        {
          "name": "_messageHash",
          "type": "bytes32"
        },
        {
          "name": "_signature",
          "type": "bytes"
        }
      ],
      "name": "isValidEthMessage",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_deviceId",
          "type": "uint256"
        }
      ],
      "name": "getActiveSignaturesForDevice",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_deviceId",
          "type": "uint256"
        },
        {
          "name": "_expiryTime",
          "type": "uint256"
        }
      ],
      "name": "signDevice",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "ownerToEntity",
      "outputs": [
        {
          "name": "data",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "deviceSignatureCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_deviceId",
          "type": "uint256"
        },
        {
          "name": "_firmwareHash",
          "type": "bytes32"
        }
      ],
      "name": "isValidFirmwareHash",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_deviceId",
          "type": "uint256"
        },
        {
          "name": "_proof",
          "type": "bytes32[]"
        },
        {
          "name": "_leaf",
          "type": "bytes32"
        }
      ],
      "name": "isValidMetadataMember",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_deviceId",
          "type": "uint256"
        },
        {
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "transferDevice",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "deviceId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "oldOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "DeviceTransfered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "deviceId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "property",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "newValue",
          "type": "bytes32"
        }
      ],
      "name": "DevicePropertyUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "signatureId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "deviceId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "signer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "expiryTime",
          "type": "uint256"
        }
      ],
      "name": "DeviceSigned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "signatureId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "deviceId",
          "type": "uint256"
        }
      ],
      "name": "SignatureRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "deviceId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "identifier",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "metadataHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "firmwareHash",
          "type": "bytes32"
        }
      ],
      "name": "DeviceCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newData",
          "type": "string"
        }
      ],
      "name": "EntityDataUpdated",
      "type": "event"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"_deviceId\",\"type\":\"uint256\"},{\"name\":\"_newMetadataHash\",\"type\":\"bytes32\"}],\"name\":\"updateMetadataHash\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_deviceId\",\"type\":\"uint256\"}],\"name\":\"isDeviceAnEntity\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"devices\",\"outputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"identifier\",\"type\":\"bytes32\"},{\"name\":\"metadataHash\",\"type\":\"bytes32\"},{\"name\":\"firmwareHash\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"ownerDeviceCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_signatureId\",\"type\":\"uint256\"}],\"name\":\"revokeSignature\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_identifier\",\"type\":\"bytes32\"},{\"name\":\"_metadataHash\",\"type\":\"bytes32\"},{\"name\":\"_firmwareHash\",\"type\":\"bytes32\"}],\"name\":\"createDevice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"getDevicesByOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_deviceId\",\"type\":\"uint256\"},{\"name\":\"_newIdentifier\",\"type\":\"bytes32\"}],\"name\":\"updateIdentifier\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_data\",\"type\":\"string\"}],\"name\":\"updateEntityData\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_deviceId\",\"type\":\"uint256\"},{\"name\":\"_newFirmwareHash\",\"type\":\"bytes32\"}],\"name\":\"updateFirmwareHash\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"signatures\",\"outputs\":[{\"name\":\"signer\",\"type\":\"address\"},{\"name\":\"deviceId\",\"type\":\"uint256\"},{\"name\":\"expiryTime\",\"type\":\"uint256\"},{\"name\":\"revoked\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_deviceId\",\"type\":\"uint256\"},{\"name\":\"_messageHash\",\"type\":\"bytes32\"},{\"name\":\"_signature\",\"type\":\"bytes\"}],\"name\":\"isValidEthMessage\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_deviceId\",\"type\":\"uint256\"}],\"name\":\"getActiveSignaturesForDevice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_deviceId\",\"type\":\"uint256\"},{\"name\":\"_expiryTime\",\"type\":\"uint256\"}],\"name\":\"signDevice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"ownerToEntity\",\"outputs\":[{\"name\":\"data\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"deviceSignatureCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_deviceId\",\"type\":\"uint256\"},{\"name\":\"_firmwareHash\",\"type\":\"bytes32\"}],\"name\":\"isValidFirmwareHash\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_deviceId\",\"type\":\"uint256\"},{\"name\":\"_proof\",\"type\":\"bytes32[]\"},{\"name\":\"_leaf\",\"type\":\"bytes32\"}],\"name\":\"isValidMetadataMember\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_deviceId\",\"type\":\"uint256\"},{\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"transferDevice\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"deviceId\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"DeviceTransfered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"deviceId\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"property\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"newValue\",\"type\":\"bytes32\"}],\"name\":\"DevicePropertyUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"signatureId\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"deviceId\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"signer\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"expiryTime\",\"type\":\"uint256\"}],\"name\":\"DeviceSigned\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"signatureId\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"deviceId\",\"type\":\"uint256\"}],\"name\":\"SignatureRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"deviceId\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"identifier\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"metadataHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"firmwareHash\",\"type\":\"bytes32\"}],\"name\":\"DeviceCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"newData\",\"type\":\"string\"}],\"name\":\"EntityDataUpdated\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"createDevice(bytes32,bytes32,bytes32)\":{\"params\":{\"_firmwareHash\":\"Hash of actual firmware hash.\",\"_identifier\":\"Unique device identifier, such as fingerprint of RSA/ECC public key or Ethereum address (recommended).\",\"_metadataHash\":\"Merkle root hash of metadata (recommended) or simple hash of concatenated metadata.\"},\"return\":\"Created device ID.\"},\"getActiveSignaturesForDevice(uint256)\":{\"details\":\"Use this function instead of filtering DeviceSigned event since signatures could have been revoked.\",\"params\":{\"_deviceId\":\"ID of a device.\"},\"return\":\"Array of signature IDs.\"},\"getDevicesByOwner(address)\":{\"details\":\"Use this function instead of filtering DeviceCreated event since devices could have been transferred between owners.\",\"params\":{\"_owner\":\"Owner address.\"},\"return\":\"Array of device IDs.\"},\"isDeviceAnEntity(uint256)\":{\"params\":{\"_deviceId\":\"ID of a  device.\"},\"return\":\"Boolean status.\"},\"isValidEthMessage(uint256,bytes32,bytes)\":{\"params\":{\"_deviceId\":\"ID of a device that signed the message.\",\"_messageHash\":\"Hash of sent message.\",\"_signature\":\"Signature generated using web3.eth.sign().\"},\"return\":\"Boolean status.\"},\"isValidFirmwareHash(uint256,bytes32)\":{\"params\":{\"_deviceId\":\"ID of a device containing firmware hash.\",\"_firmwareHash\":\"Firmware hash (not the actual hash).\"},\"return\":\"Boolean status.\"},\"isValidMetadataMember(uint256,bytes32[],bytes32)\":{\"params\":{\"_deviceId\":\"ID of a device containing metadata hash.\",\"_leaf\":\"Leaf of Merkle tree.\",\"_proof\":\"Merkle proof containing sibling hashes on the branch from the leaf to the root of the Merkle tree.\"},\"return\":\"Boolean status.\"},\"revokeSignature(uint256)\":{\"params\":{\"_signatureId\":\"ID of to be revoked signature.\"}},\"signDevice(uint256,uint256)\":{\"params\":{\"_deviceId\":\"ID of to be signed device.\",\"_expiryTime\":\"Expiry time in Unix seconds.\"},\"return\":\"Created signature ID.\"},\"transferDevice(uint256,address)\":{\"params\":{\"_deviceId\":\"ID of to be transfered device.\",\"_to\":\"Address of new owner.\"}},\"updateEntityData(string)\":{\"params\":{\"_data\":\"Entity data.\"}},\"updateFirmwareHash(uint256,bytes32)\":{\"params\":{\"_deviceId\":\"ID of a device.\",\"_newFirmwareHash\":\"New firmware hash.\"}},\"updateIdentifier(uint256,bytes32)\":{\"params\":{\"_deviceId\":\"ID of a device.\",\"_newIdentifier\":\"New identifier.\"}},\"updateMetadataHash(uint256,bytes32)\":{\"params\":{\"_deviceId\":\"ID of a device.\",\"_newMetadataHash\":\"New metadata hash.\"}}},\"title\":\"Device manager core contract.\"},\"userdoc\":{\"methods\":{\"createDevice(bytes32,bytes32,bytes32)\":{\"notice\":\"Creates and saves device into storage. Emits DeviceCreated. \"},\"getActiveSignaturesForDevice(uint256)\":{\"notice\":\"Gets all signatures for specific device. \"},\"getDevicesByOwner(address)\":{\"notice\":\"Gets all devices owned by specified address. \"},\"isDeviceAnEntity(uint256)\":{\"notice\":\"Checks if device is also an entity. \"},\"isValidEthMessage(uint256,bytes32,bytes)\":{\"notice\":\"Validate authenticity of message signed by Etherium private key. On-chain validation is available only for Ethereum signed messages.\"},\"isValidFirmwareHash(uint256,bytes32)\":{\"notice\":\"Checks if provided firmware hash is equal to firmware hash device property. \"},\"isValidMetadataMember(uint256,bytes32[],bytes32)\":{\"notice\":\"Checks if provided leaf is a member of metadata contained in Merkle tree.  Assumes that each pair of leaves and each pair of pre-images are sorted.\"},\"revokeSignature(uint256)\":{\"notice\":\"Revokes a signature. Emits SignatureRevoked. \"},\"signDevice(uint256,uint256)\":{\"notice\":\"Signs a device and signature into storage. Emits DeviceSigned. \"},\"transferDevice(uint256,address)\":{\"notice\":\"Transfer device ownership from one external account to another. Emits DeviceTransfered.\"},\"updateEntityData(string)\":{\"notice\":\"Update entity data.\"},\"updateFirmwareHash(uint256,bytes32)\":{\"notice\":\"Update device with new firmware hash. Emits DevicePropertyUpdated.\"},\"updateIdentifier(uint256,bytes32)\":{\"notice\":\"Update device with new identifier. Emits DevicePropertyUpdated.\"},\"updateMetadataHash(uint256,bytes32)\":{\"notice\":\"Update device with new metadata hash. Emits DevicePropertyUpdated.\"}}}},\"settings\":{\"compilationTarget\":{\"/home/celio/iot-device-management/contracts/DeviceManager.sol\":\"DeviceManager\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/celio/iot-device-management/contracts/DeviceManager.sol\":{\"keccak256\":\"0xf245642d9dc104d81d22994ee19a8837e1c59d7b67389669ec20bf098bb2b7e6\",\"urls\":[\"bzzr://8502176137ad436c451435e4b987ca1bf69221703e65e0fa8b8c4cdf4c58d971\"]},\"/home/celio/iot-device-management/contracts/ECRecovery.sol\":{\"keccak256\":\"0xf8e71ab0ebf62b7765f312ac4059dd8bf05df7adb0c49d13e395e68b2fe894b0\",\"urls\":[\"bzzr://eef4ac8dd3ef1effff233c77316963c3dce1f12c6d184857610b92331e34ad8f\"]},\"/home/celio/iot-device-management/contracts/MerkleProof.sol\":{\"keccak256\":\"0x4b88759d3c10a2c4902c634257534e7d61957c8e7ef0c10604c2a22f153d5319\",\"urls\":[\"bzzr://02cc60fecd445b0926b268d54484813f1ebc0e370a70e5f9220cef0b4b89f445\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50612273806100206000396000f3fe608060405260043610610107576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806307f637001461010c5780630bcb88e81461015157806310ff8e31146101a45780632a08e601146102345780633da1f79a146102995780634840c63b146102d457806351b0e98714610337578063533293ab146103dd5780635a3f79d2146104225780636231fb0b146104ea5780638be101941461052f5780638e9075be146105c35780639de9662d146106b7578063aa554c9d14610747578063acbcb507146107a0578063b0bd9fda1461086a578063b22d439d146108b9578063c40613df14610916578063ee23578314610a07575b600080fd5b34801561011857600080fd5b5061014f6004803603604081101561012f57600080fd5b810190808035906020019092919080359060200190929190505050610a62565b005b34801561015d57600080fd5b5061018a6004803603602081101561017457600080fd5b8101908080359060200190929190505050610c56565b604051808215151515815260200191505060405180910390f35b3480156101b057600080fd5b506101dd600480360360208110156101c757600080fd5b8101908080359060200190929190505050610cf2565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060405180910390f35b34801561024057600080fd5b506102836004803603602081101561025757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d51565b6040518082815260200191505060405180910390f35b3480156102a557600080fd5b506102d2600480360360208110156102bc57600080fd5b8101908080359060200190929190505050610d69565b005b3480156102e057600080fd5b50610321600480360360608110156102f757600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050610fdd565b6040518082815260200191505060405180910390f35b34801561034357600080fd5b506103866004803603602081101561035a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611176565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156103c95780820151818401526020810190506103ae565b505050509050019250505060405180910390f35b3480156103e957600080fd5b506104206004803603604081101561040057600080fd5b8101908080359060200190929190803590602001909291905050506112b4565b005b34801561042e57600080fd5b506104e86004803603602081101561044557600080fd5b810190808035906020019064010000000081111561046257600080fd5b82018360208201111561047457600080fd5b8035906020019184600183028401116401000000008311171561049657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506114a8565b005b3480156104f657600080fd5b5061052d6004803603604081101561050d57600080fd5b8101908080359060200190929190803590602001909291905050506115b4565b005b34801561053b57600080fd5b506105686004803603602081101561055257600080fd5b81019080803590602001909291905050506117a8565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018381526020018215151515815260200194505050505060405180910390f35b3480156105cf57600080fd5b5061069d600480360360608110156105e657600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561061757600080fd5b82018360208201111561062957600080fd5b8035906020019184600183028401116401000000008311171561064b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611814565b604051808215151515815260200191505060405180910390f35b3480156106c357600080fd5b506106f0600480360360208110156106da57600080fd5b810190808035906020019092919050505061187b565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610733578082015181840152602081019050610718565b505050509050019250505060405180910390f35b34801561075357600080fd5b5061078a6004803603604081101561076a57600080fd5b81019080803590602001909291908035906020019092919050505061197e565b6040518082815260200191505060405180910390f35b3480156107ac57600080fd5b506107ef600480360360208110156107c357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611af5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561082f578082015181840152602081019050610814565b50505050905090810190601f16801561085c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561087657600080fd5b506108a36004803603602081101561088d57600080fd5b8101908080359060200190929190505050611bab565b6040518082815260200191505060405180910390f35b3480156108c557600080fd5b506108fc600480360360408110156108dc57600080fd5b810190808035906020019092919080359060200190929190505050611bc3565b604051808215151515815260200191505060405180910390f35b34801561092257600080fd5b506109ed6004803603606081101561093957600080fd5b81019080803590602001909291908035906020019064010000000081111561096057600080fd5b82018360208201111561097257600080fd5b8035906020019184602083028401116401000000008311171561099457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050611bf0565b604051808215151515815260200191505060405180910390f35b348015610a1357600080fd5b50610a6060048036036040811015610a2a57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c26565b005b813373ffffffffffffffffffffffffffffffffffffffff16600182815481101515610a8957fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610b46576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4f6e6c7920666f7220646576696365206f776e6572000000000000000000000081525060200191505060405180910390fd5b8260006004600083815260200190815260200160002054141515610bd2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4d757374206e6f74206265207369676e6564000000000000000000000000000081525060200191505060405180910390fd5b82600185815481101515610be257fe5b9060005260206000209060040201600201819055507f6d65746164617461000000000000000000000000000000000000000000000000847f67ace838aca3988a026b61036d72b93a8316d05feecb6ee10316e8d59f0e687f856040518082815260200191505060405180910390a350505050565b6000600182815481101515610c6757fe5b9060005260206000209060040201600101546001900473ffffffffffffffffffffffffffffffffffffffff16600183815481101515610ca257fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16149050919050565b600181815481101515610d0157fe5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154905084565b60026020528060005260406000206000915090505481565b3373ffffffffffffffffffffffffffffffffffffffff16600382815481101515610d8f57fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610e72576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001807f4f6e6c7920666f722063726561746f72206f6620746865207369676e6174757281526020017f650000000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b60001515600382815481101515610e8557fe5b906000526020600020906004020160030160009054906101000a900460ff161515141515610f41576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001807f5369676e6174757265206d7573746e2774206265207265766f6b656420616c7281526020017f656164790000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b6000600382815481101515610f5257fe5b9060005260206000209060040201905060018160030160006101000a81548160ff021916908315150217905550600460008260010154815260200190815260200160002060008154809291906001900391905055508060010154827ff93d5095ac7696e643e1fa0aa35d622f4a13e11f4e199f30794679dcdcdb973760405160405180910390a35050565b6000610fe7612119565b6080604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018481525090506000600180839080600181540180825580915050906001820390600052602060002090600402016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301555050039050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919060010191905055503373ffffffffffffffffffffffffffffffffffffffff16817f093aad13dfa930f4f2311a7f59be1c3674ccc072b729756c22447948a2c0520088888860405180848152602001838152602001828152602001935050505060405180910390a380925050509392505050565b606080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040519080825280602002602001820160405280156111e75781602001602082028038833980820191505090505b509050600080905060008090505b6001805490508110156112a9578473ffffffffffffffffffffffffffffffffffffffff1660018281548110151561122857fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561129c5780838381518110151561128557fe5b906020019060200201818152505081806001019250505b80806001019150506111f5565b508192505050919050565b813373ffffffffffffffffffffffffffffffffffffffff166001828154811015156112db57fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611398576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4f6e6c7920666f7220646576696365206f776e6572000000000000000000000081525060200191505060405180910390fd5b8260006004600083815260200190815260200160002054141515611424576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4d757374206e6f74206265207369676e6564000000000000000000000000000081525060200191505060405180910390fd5b8260018581548110151561143457fe5b9060005260206000209060040201600101819055507f6964656e74696669657200000000000000000000000000000000000000000000847f67ace838aca3988a026b61036d72b93a8316d05feecb6ee10316e8d59f0e687f856040518082815260200191505060405180910390a350505050565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000190805190602001906114fd929190612161565b503373ffffffffffffffffffffffffffffffffffffffff167f53d207b6cf416d44764c48a52a7e64ffa2793f67215d452a032a11e0dd34bd2c826040518080602001828103825283818151815260200191508051906020019080838360005b8381101561157757808201518184015260208101905061155c565b50505050905090810190601f1680156115a45780820380516001836020036101000a031916815260200191505b509250505060405180910390a250565b813373ffffffffffffffffffffffffffffffffffffffff166001828154811015156115db57fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611698576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4f6e6c7920666f7220646576696365206f776e6572000000000000000000000081525060200191505060405180910390fd5b8260006004600083815260200190815260200160002054141515611724576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4d757374206e6f74206265207369676e6564000000000000000000000000000081525060200191505060405180910390fd5b8260018581548110151561173457fe5b9060005260206000209060040201600301819055507f6669726d77617265000000000000000000000000000000000000000000000000847f67ace838aca3988a026b61036d72b93a8316d05feecb6ee10316e8d59f0e687f856040518082815260200191505060405180910390a350505050565b6003818154811015156117b757fe5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030160009054906101000a900460ff16905084565b600060018481548110151561182557fe5b9060005260206000209060040201600101546001900473ffffffffffffffffffffffffffffffffffffffff1661185b8484611f78565b73ffffffffffffffffffffffffffffffffffffffff161490509392505050565b60608060046000848152602001908152602001600020546040519080825280602002602001820160405280156118c05781602001602082028038833980820191505090505b509050600080905060008090505b60038054905081101561197357846003828154811015156118eb57fe5b90600052602060002090600402016001015414801561193b57506000151560038281548110151561191857fe5b906000526020600020906004020160030160009054906101000a900460ff161515145b156119665780838381518110151561194f57fe5b906020019060200201818152505081806001019250505b80806001019150506118ce565b508192505050919050565b60006119886121e1565b6080604051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001600015158152509050600060016003839080600181540180825580915050906001820390600052602060002090600402016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160006101000a81548160ff021916908315150217905550505003905060046000868152602001908152602001600020600081548092919060010191905055503373ffffffffffffffffffffffffffffffffffffffff1685827f3739f348a11e3a029a385b4746ea6edba7f01ceec207010638e9d17862b78c40876040518082815260200191505060405180910390a4809250505092915050565b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ba15780601f10611b7657610100808354040283529160200191611ba1565b820191906000526020600020905b815481529060010190602001808311611b8457829003601f168201915b5050505050905081565b60046020528060005260406000206000915090505481565b600081600184815481101515611bd557fe5b90600052602060002090600402016003015414905092915050565b6000611c1d83600186815481101515611c0557fe5b9060005260206000209060040201600201548461205c565b90509392505050565b813373ffffffffffffffffffffffffffffffffffffffff16600182815481101515611c4d57fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611d0a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4f6e6c7920666f7220646576696365206f776e6572000000000000000000000081525060200191505060405180910390fd5b8260006004600083815260200190815260200160002054141515611d96576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4d757374206e6f74206265207369676e6564000000000000000000000000000081525060200191505060405180910390fd5b6000600185815481101515611da757fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083600186815481101515611deb57fe5b906000526020600020906004020160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600190039190505550600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906001019190505550847f848155b8e733cfd6e7258639111d906437ddb051818f4061fc4c7cfbc575cb2e8286604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a25050505050565b60008060008060418551141515611f955760009350505050612056565b6020850151925060408501519150606085015160001a9050601b8160ff161015611fc057601b810190505b601b8160ff1614158015611fd85750601c8160ff1614155b15611fe95760009350505050612056565b60018682858560405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612046573d6000803e3d6000fd5b5050506020604051035193505050505b92915050565b60008082905060008090505b855181101561210b576000868281518110151561208157fe5b906020019060200201519050808310156120cb57828160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092506120fd565b808360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092505b508080600101915050612068565b508381149150509392505050565b608060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000801916815260200160008019168152602001600080191681525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106121a257805160ff19168380011785556121d0565b828001600101855582156121d0579182015b828111156121cf5782518255916020019190600101906121b4565b5b5090506121dd9190612222565b5090565b608060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000151581525090565b61224491905b80821115612240576000816000905550600101612228565b5090565b9056fea165627a7a723058209f27041fdc8d80859e9767f7bc231748cda6f239d0174b59280c91e385edb1b20029",
  "deployedBytecode": "0x608060405260043610610107576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806307f637001461010c5780630bcb88e81461015157806310ff8e31146101a45780632a08e601146102345780633da1f79a146102995780634840c63b146102d457806351b0e98714610337578063533293ab146103dd5780635a3f79d2146104225780636231fb0b146104ea5780638be101941461052f5780638e9075be146105c35780639de9662d146106b7578063aa554c9d14610747578063acbcb507146107a0578063b0bd9fda1461086a578063b22d439d146108b9578063c40613df14610916578063ee23578314610a07575b600080fd5b34801561011857600080fd5b5061014f6004803603604081101561012f57600080fd5b810190808035906020019092919080359060200190929190505050610a62565b005b34801561015d57600080fd5b5061018a6004803603602081101561017457600080fd5b8101908080359060200190929190505050610c56565b604051808215151515815260200191505060405180910390f35b3480156101b057600080fd5b506101dd600480360360208110156101c757600080fd5b8101908080359060200190929190505050610cf2565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060405180910390f35b34801561024057600080fd5b506102836004803603602081101561025757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d51565b6040518082815260200191505060405180910390f35b3480156102a557600080fd5b506102d2600480360360208110156102bc57600080fd5b8101908080359060200190929190505050610d69565b005b3480156102e057600080fd5b50610321600480360360608110156102f757600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050610fdd565b6040518082815260200191505060405180910390f35b34801561034357600080fd5b506103866004803603602081101561035a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611176565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156103c95780820151818401526020810190506103ae565b505050509050019250505060405180910390f35b3480156103e957600080fd5b506104206004803603604081101561040057600080fd5b8101908080359060200190929190803590602001909291905050506112b4565b005b34801561042e57600080fd5b506104e86004803603602081101561044557600080fd5b810190808035906020019064010000000081111561046257600080fd5b82018360208201111561047457600080fd5b8035906020019184600183028401116401000000008311171561049657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506114a8565b005b3480156104f657600080fd5b5061052d6004803603604081101561050d57600080fd5b8101908080359060200190929190803590602001909291905050506115b4565b005b34801561053b57600080fd5b506105686004803603602081101561055257600080fd5b81019080803590602001909291905050506117a8565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018381526020018215151515815260200194505050505060405180910390f35b3480156105cf57600080fd5b5061069d600480360360608110156105e657600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561061757600080fd5b82018360208201111561062957600080fd5b8035906020019184600183028401116401000000008311171561064b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611814565b604051808215151515815260200191505060405180910390f35b3480156106c357600080fd5b506106f0600480360360208110156106da57600080fd5b810190808035906020019092919050505061187b565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610733578082015181840152602081019050610718565b505050509050019250505060405180910390f35b34801561075357600080fd5b5061078a6004803603604081101561076a57600080fd5b81019080803590602001909291908035906020019092919050505061197e565b6040518082815260200191505060405180910390f35b3480156107ac57600080fd5b506107ef600480360360208110156107c357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611af5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561082f578082015181840152602081019050610814565b50505050905090810190601f16801561085c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561087657600080fd5b506108a36004803603602081101561088d57600080fd5b8101908080359060200190929190505050611bab565b6040518082815260200191505060405180910390f35b3480156108c557600080fd5b506108fc600480360360408110156108dc57600080fd5b810190808035906020019092919080359060200190929190505050611bc3565b604051808215151515815260200191505060405180910390f35b34801561092257600080fd5b506109ed6004803603606081101561093957600080fd5b81019080803590602001909291908035906020019064010000000081111561096057600080fd5b82018360208201111561097257600080fd5b8035906020019184602083028401116401000000008311171561099457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050611bf0565b604051808215151515815260200191505060405180910390f35b348015610a1357600080fd5b50610a6060048036036040811015610a2a57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c26565b005b813373ffffffffffffffffffffffffffffffffffffffff16600182815481101515610a8957fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610b46576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4f6e6c7920666f7220646576696365206f776e6572000000000000000000000081525060200191505060405180910390fd5b8260006004600083815260200190815260200160002054141515610bd2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4d757374206e6f74206265207369676e6564000000000000000000000000000081525060200191505060405180910390fd5b82600185815481101515610be257fe5b9060005260206000209060040201600201819055507f6d65746164617461000000000000000000000000000000000000000000000000847f67ace838aca3988a026b61036d72b93a8316d05feecb6ee10316e8d59f0e687f856040518082815260200191505060405180910390a350505050565b6000600182815481101515610c6757fe5b9060005260206000209060040201600101546001900473ffffffffffffffffffffffffffffffffffffffff16600183815481101515610ca257fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16149050919050565b600181815481101515610d0157fe5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154905084565b60026020528060005260406000206000915090505481565b3373ffffffffffffffffffffffffffffffffffffffff16600382815481101515610d8f57fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610e72576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001807f4f6e6c7920666f722063726561746f72206f6620746865207369676e6174757281526020017f650000000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b60001515600382815481101515610e8557fe5b906000526020600020906004020160030160009054906101000a900460ff161515141515610f41576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001807f5369676e6174757265206d7573746e2774206265207265766f6b656420616c7281526020017f656164790000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b6000600382815481101515610f5257fe5b9060005260206000209060040201905060018160030160006101000a81548160ff021916908315150217905550600460008260010154815260200190815260200160002060008154809291906001900391905055508060010154827ff93d5095ac7696e643e1fa0aa35d622f4a13e11f4e199f30794679dcdcdb973760405160405180910390a35050565b6000610fe7612119565b6080604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018481525090506000600180839080600181540180825580915050906001820390600052602060002090600402016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301555050039050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919060010191905055503373ffffffffffffffffffffffffffffffffffffffff16817f093aad13dfa930f4f2311a7f59be1c3674ccc072b729756c22447948a2c0520088888860405180848152602001838152602001828152602001935050505060405180910390a380925050509392505050565b606080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040519080825280602002602001820160405280156111e75781602001602082028038833980820191505090505b509050600080905060008090505b6001805490508110156112a9578473ffffffffffffffffffffffffffffffffffffffff1660018281548110151561122857fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561129c5780838381518110151561128557fe5b906020019060200201818152505081806001019250505b80806001019150506111f5565b508192505050919050565b813373ffffffffffffffffffffffffffffffffffffffff166001828154811015156112db57fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611398576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4f6e6c7920666f7220646576696365206f776e6572000000000000000000000081525060200191505060405180910390fd5b8260006004600083815260200190815260200160002054141515611424576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4d757374206e6f74206265207369676e6564000000000000000000000000000081525060200191505060405180910390fd5b8260018581548110151561143457fe5b9060005260206000209060040201600101819055507f6964656e74696669657200000000000000000000000000000000000000000000847f67ace838aca3988a026b61036d72b93a8316d05feecb6ee10316e8d59f0e687f856040518082815260200191505060405180910390a350505050565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000190805190602001906114fd929190612161565b503373ffffffffffffffffffffffffffffffffffffffff167f53d207b6cf416d44764c48a52a7e64ffa2793f67215d452a032a11e0dd34bd2c826040518080602001828103825283818151815260200191508051906020019080838360005b8381101561157757808201518184015260208101905061155c565b50505050905090810190601f1680156115a45780820380516001836020036101000a031916815260200191505b509250505060405180910390a250565b813373ffffffffffffffffffffffffffffffffffffffff166001828154811015156115db57fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611698576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4f6e6c7920666f7220646576696365206f776e6572000000000000000000000081525060200191505060405180910390fd5b8260006004600083815260200190815260200160002054141515611724576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4d757374206e6f74206265207369676e6564000000000000000000000000000081525060200191505060405180910390fd5b8260018581548110151561173457fe5b9060005260206000209060040201600301819055507f6669726d77617265000000000000000000000000000000000000000000000000847f67ace838aca3988a026b61036d72b93a8316d05feecb6ee10316e8d59f0e687f856040518082815260200191505060405180910390a350505050565b6003818154811015156117b757fe5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030160009054906101000a900460ff16905084565b600060018481548110151561182557fe5b9060005260206000209060040201600101546001900473ffffffffffffffffffffffffffffffffffffffff1661185b8484611f78565b73ffffffffffffffffffffffffffffffffffffffff161490509392505050565b60608060046000848152602001908152602001600020546040519080825280602002602001820160405280156118c05781602001602082028038833980820191505090505b509050600080905060008090505b60038054905081101561197357846003828154811015156118eb57fe5b90600052602060002090600402016001015414801561193b57506000151560038281548110151561191857fe5b906000526020600020906004020160030160009054906101000a900460ff161515145b156119665780838381518110151561194f57fe5b906020019060200201818152505081806001019250505b80806001019150506118ce565b508192505050919050565b60006119886121e1565b6080604051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001600015158152509050600060016003839080600181540180825580915050906001820390600052602060002090600402016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160006101000a81548160ff021916908315150217905550505003905060046000868152602001908152602001600020600081548092919060010191905055503373ffffffffffffffffffffffffffffffffffffffff1685827f3739f348a11e3a029a385b4746ea6edba7f01ceec207010638e9d17862b78c40876040518082815260200191505060405180910390a4809250505092915050565b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ba15780601f10611b7657610100808354040283529160200191611ba1565b820191906000526020600020905b815481529060010190602001808311611b8457829003601f168201915b5050505050905081565b60046020528060005260406000206000915090505481565b600081600184815481101515611bd557fe5b90600052602060002090600402016003015414905092915050565b6000611c1d83600186815481101515611c0557fe5b9060005260206000209060040201600201548461205c565b90509392505050565b813373ffffffffffffffffffffffffffffffffffffffff16600182815481101515611c4d57fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611d0a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4f6e6c7920666f7220646576696365206f776e6572000000000000000000000081525060200191505060405180910390fd5b8260006004600083815260200190815260200160002054141515611d96576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4d757374206e6f74206265207369676e6564000000000000000000000000000081525060200191505060405180910390fd5b6000600185815481101515611da757fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083600186815481101515611deb57fe5b906000526020600020906004020160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600190039190505550600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906001019190505550847f848155b8e733cfd6e7258639111d906437ddb051818f4061fc4c7cfbc575cb2e8286604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a25050505050565b60008060008060418551141515611f955760009350505050612056565b6020850151925060408501519150606085015160001a9050601b8160ff161015611fc057601b810190505b601b8160ff1614158015611fd85750601c8160ff1614155b15611fe95760009350505050612056565b60018682858560405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612046573d6000803e3d6000fd5b5050506020604051035193505050505b92915050565b60008082905060008090505b855181101561210b576000868281518110151561208157fe5b906020019060200201519050808310156120cb57828160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092506120fd565b808360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092505b508080600101915050612068565b508381149150509392505050565b608060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000801916815260200160008019168152602001600080191681525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106121a257805160ff19168380011785556121d0565b828001600101855582156121d0579182015b828111156121cf5782518255916020019190600101906121b4565b5b5090506121dd9190612222565b5090565b608060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000151581525090565b61224491905b80821115612240576000816000905550600101612228565b5090565b9056fea165627a7a723058209f27041fdc8d80859e9767f7bc231748cda6f239d0174b59280c91e385edb1b20029",
  "sourceMap": "12871:88:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;12871:88:0;;;;;;;",
  "deployedSourceMap": "12871:88:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12100:266;;8:9:-1;5:2;;;30:1;27;20:12;5:2;12100:266:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;12100:266:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5066:177;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5066:177:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5066:177:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2721:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2721:23:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2721:23:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2812:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2812:49:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2812:49:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9040:475;;8:9:-1;5:2;;;30:1;27;20:12;5:2;9040:475:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;9040:475:0;;;;;;;;;;;;;;;;;;;;3709:427;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3709:427:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3709:427:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4521:399;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4521:399:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4521:399:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4521:399:0;;;;;;;;;;;;;;;;;11648:258;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11648:258:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11648:258:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;660:161;;8:9:-1;5:2;;;30:1;27;20:12;5:2;660:161:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;660:161:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;660:161:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;660:161:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;660:161:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;660:161:0;;;;;;;;;;;;;;;;;;12560:266;;8:9:-1;5:2;;;30:1;27;20:12;5:2;12560:266:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;12560:266:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7613:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7613:29:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7613:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6732:245;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6732:245:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6732:245:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;6732:245:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;6732:245:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;6732:245:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;6732:245:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9896:472;;8:9:-1;5:2;;;30:1;27;20:12;5:2;9896:472:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;9896:472:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;9896:472:0;;;;;;;;;;;;;;;;;8518:381;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8518:381:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8518:381:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;410:48;;8:9:-1;5:2;;;30:1;27;20:12;5:2;410:48:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;410:48:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;410:48:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7714:50;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7714:50:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7714:50:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6176:167;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6176:167:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6176:167:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5692:209;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5692:209:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5692:209:0;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;5692:209:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;5692:209:0;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;5692:209:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;5692:209:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11118:343;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11118:343:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11118:343:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12100:266;12189:9;3224:10;3196:38;;:7;3204:9;3196:18;;;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;:38;;;3188:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12210:9;8232:1;8197:20;:31;8218:9;8197:31;;;;;;;;;;;;:36;8189:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12265:16;12231:7;12239:9;12231:18;;;;;;;;;;;;;;;;;;;;:31;;:50;;;;12297:62;12319:9;12297:62;12342:16;12297:62;;;;;;;;;;;;;;;;;;3270:1;12100:266;;;:::o;5066:177::-;5129:4;5204:7;5212:9;5204:18;;;;;;;;;;;;;;;;;;;;:29;;;5196:38;;;5152:84;;:7;5160:9;5152:18;;;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;:84;;;5145:91;;5066:177;;;:::o;2721:23::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2812:49::-;;;;;;;;;;;;;;;;;:::o;9040:475::-;9144:10;9109:45;;:10;9120:12;9109:24;;;;;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;:45;;;9101:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9246:5;9210:41;;:10;9221:12;9210:24;;;;;;;;;;;;;;;;;;;;:32;;;;;;;;;;;;:41;;;9202:90;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9302:27;9332:10;9343:12;9332:24;;;;;;;;;;;;;;;;;;;;9302:54;;9386:4;9366:9;:17;;;:24;;;;;;;;;;;;;;;;;;9400:20;:40;9421:9;:18;;;9400:40;;;;;;;;;;;;:42;;;;;;;;;;;;;;9489:9;:18;;;9475:12;9458:50;;;;;;;;;;9040:475;;:::o;3709:427::-;3814:4;3830:23;;:::i;:::-;3856:61;;;;;;;;;3863:10;3856:61;;;;;;3875:11;3856:61;;;;3888:13;3856:61;;;;3903:13;3856:61;;;3830:87;;3927:13;3969:1;3943:7;3956:9;3943:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;3943:23:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:27;3927:43;;3980:16;:28;3997:10;3980:28;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;4050:10;4026:78;;4040:8;4026:78;4062:11;4075:13;4090;4026:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4121:8;4114:15;;;;3709:427;;;;;:::o;4521:399::-;4585:13;4610:23;4647:16;:24;4664:6;4647:24;;;;;;;;;;;;;;;;4636:36;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;4636:36:0;;;;4610:62;;4682:12;4697:1;4682:16;;4713:6;4722:1;4713:10;;4708:180;4729:7;:14;;;;4725:1;:18;4708:180;;;4788:6;4768:26;;:7;4776:1;4768:10;;;;;;;;;;;;;;;;;;;;:16;;;;;;;;;;;;:26;;;4764:114;;;4835:1;4814:9;4824:7;4814:18;;;;;;;;;;;;;;;;;:22;;;;;4854:9;;;;;;;4764:114;4745:3;;;;;;;4708:180;;;;4904:9;4897:16;;;;4521:399;;;:::o;11648:258::-;11733:9;3224:10;3196:38;;:7;3204:9;3196:18;;;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;:38;;;3188:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11754:9;8232:1;8197:20;:31;8218:9;8197:31;;;;;;;;;;;;:36;8189:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11807:14;11775:7;11783:9;11775:18;;;;;;;;;;;;;;;;;;;;:29;;:46;;;;11837:62;11859:9;11837:62;11884:14;11837:62;;;;;;;;;;;;;;;;;;3270:1;11648:258;;;:::o;660:161::-;757:5;724:13;:25;738:10;724:25;;;;;;;;;;;;;;;:30;;:38;;;;;;;;;;;;:::i;:::-;;796:10;778:36;;;808:5;778:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;778:36:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;660:161;:::o;12560:266::-;12649:9;3224:10;3196:38;;:7;3204:9;3196:18;;;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;:38;;;3188:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12670:9;8232:1;8197:20;:31;8218:9;8197:31;;;;;;;;;;;;:36;8189:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12725:16;12691:7;12699:9;12691:18;;;;;;;;;;;;;;;;;;;;:31;;:50;;;;12757:62;12779:9;12757:62;12802:16;12757:62;;;;;;;;;;;;;;;;;;3270:1;12560:266;;;:::o;7613:29::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;6732:245::-;6843:4;6938:7;6946:9;6938:18;;;;;;;;;;;;;;;;;;;;:29;;;6930:38;;;6866:104;;:44;6885:12;6899:10;6866:18;:44::i;:::-;:104;;;6859:111;;6732:245;;;;;:::o;9896:472::-;9971:13;9996:26;10036:20;:31;10057:9;10036:31;;;;;;;;;;;;10025:43;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;10025:43:0;;;;9996:72;;10078:12;10093:1;10078:16;;10109:6;10118:1;10109:10;;10104:229;10125:10;:17;;;;10121:1;:21;10104:229;;;10193:9;10167:10;10178:1;10167:13;;;;;;;;;;;;;;;;;;;;:22;;;:35;:69;;;;;10231:5;10206:30;;:10;10217:1;10206:13;;;;;;;;;;;;;;;;;;;;:21;;;;;;;;;;;;:30;;;10167:69;10163:160;;;10280:1;10256:12;10269:7;10256:21;;;;;;;;;;;;;;;;;:25;;;;;10299:9;;;;;;;10163:160;10144:3;;;;;;;10104:229;;;;10349:12;10342:19;;;;9896:472;;;:::o;8518:381::-;8588:4;8604:26;;:::i;:::-;8633:52;;;;;;;;;8643:10;8633:52;;;;;;8655:9;8633:52;;;;8666:11;8633:52;;;;8679:5;8633:52;;;;;8604:81;;8695:16;8743:1;8714:10;8730:9;8714:26;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;8714:26:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:30;8695:49;;8754:20;:31;8775:9;8754:31;;;;;;;;;;;;:33;;;;;;;;;;;;;8840:10;8803:61;;8829:9;8816:11;8803:61;8852:11;8803:61;;;;;;;;;;;;;;;;;;8881:11;8874:18;;;;8518:381;;;;:::o;410:48::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;7714:50::-;;;;;;;;;;;;;;;;;:::o;6176:167::-;6265:4;6323:13;6288:7;6296:9;6288:18;;;;;;;;;;;;;;;;;;;;:31;;;:48;6281:55;;6176:167;;;;:::o;5692:209::-;5800:4;5823:71;5847:6;5855:7;5863:9;5855:18;;;;;;;;;;;;;;;;;;;;:31;;;5888:5;5823:23;:71::i;:::-;5816:78;;5692:209;;;;;:::o;11118:343::-;11190:9;3224:10;3196:38;;:7;3204:9;3196:18;;;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;:38;;;3188:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11211:9;8232:1;8197:20;:31;8218:9;8197:31;;;;;;;;;;;;:36;8189:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11232:20;11255:7;11263:9;11255:18;;;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;11232:47;;11316:3;11289:7;11297:9;11289:18;;;;;;;;;;;;;;;;;;;;:24;;;:30;;;;;;;;;;;;;;;;;;11329:16;:28;11346:10;11329:28;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;11369:16;:21;11386:3;11369:21;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;;11425:9;11408:46;11436:12;11450:3;11408:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8266:1;3270;11118:343;;;:::o;717:1116:1:-;821:7;844:9;863;882:7;963:2;942:10;:17;:23;;938:73;;;997:1;981:19;;;;;;;938:73;1314:2;1302:10;1298:19;1292:26;1287:31;;1358:2;1346:10;1342:19;1336:26;1331:31;;1410:2;1398:10;1394:19;1388:26;1385:1;1380:35;1375:40;;1534:2;1530:1;:6;;;1526:44;;;1557:2;1552:7;;;;1526:44;1652:2;1647:1;:7;;;;:18;;;;;1663:2;1658:1;:7;;;;1647:18;1643:184;;;1697:1;1681:19;;;;;;;1643:184;1791:25;1801:5;1808:1;1811;1814;1791:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1791:25:1;;;;;;;;1784:32;;;;;717:1116;;;;;:::o;681:848:2:-;834:4;854:20;877:5;854:28;;898:9;910:1;898:13;;893:516;917:6;:13;913:1;:17;893:516;;;951:20;974:6;981:1;974:9;;;;;;;;;;;;;;;;;;951:32;;1017:12;1002;:27;998:401;;;1169:12;1183;1152:44;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1152:44:2;;;1142:55;;;;;;1127:70;;998:401;;;1356:12;1370;1339:44;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1339:44:2;;;1329:55;;;;;;1314:70;;998:401;893:516;932:3;;;;;;;893:516;;;;1517:5;1501:12;:21;1494:28;;;681:848;;;;;:::o;12871:88:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\nimport \"./MerkleProof.sol\";\nimport \"./ECRecovery.sol\";\n\n/**\n * @title Provides base functionalities for entities.\n */\ncontract EntityBase {\n    /// @dev Entity in the device management system.\n    struct Entity {\n        // Arbitary data in case entity wants to have some public information available.\n        string data;\n    }\n\n    /// @notice Maps owner to an Entity structure.\n    mapping (address => Entity) public ownerToEntity;\n\n    /// @dev Fired on entity data update.\n    event EntityDataUpdated(address indexed owner, string newData);\n\n    /**\n     * @notice Update entity data.\n     * @param _data Entity data.\n     */\n    function updateEntityData(string memory _data) public {\n        ownerToEntity[msg.sender].data = _data;\n\n        emit EntityDataUpdated(msg.sender, _data);\n    }\n}\n\n/**\n * @title Provides base functionalities for devices.\n */\ncontract DeviceBase {\n    /// @dev Main device structucture.\n    struct Device {\n        // Ethereum address of a device owner.\n        address owner;\n\n        // Unique device identifier. Can hold anything that fits into 32 bytes. Different from device ID.\n        // Supposed to be a public key or a representation of one, such as fingerprint of RSA/ECC \n        // public key or simply an Ethereum address. To make identifier be an Ethereum address, \n        // use secp256k1 curve to generate public and private key pair, run keccak256 hash function\n        // on public key and take last 20 bytes of generated hash to get Ethereum address.\n        // If a device wants to be it's own entity, use same address as in owner property.\n        bytes32 identifier;\n        \n        // Merkle root hash of metadata or simple hash of concatenated data.\n        // It is recommended to use Merkle tree to store information on device as it enables to \n        // prove membership of specific data by providing Merkle proof without revealing whole dataset.\n        bytes32 metadataHash;\n\n        // Holds a hash of actual firmware hash. Actual firmware hash is not supposed to be stored.\n        // Plain text or hash would expose data that is meant to be private, so \"hash of hash\" principle \n        // gives privacy and makes integrity verification possible.\n        bytes32 firmwareHash;\n\n        // Additional data linked to device. Can be used to store hash of encrypted firmware on IPFS.\n        //string offchainLink;\n\n        // Full public key (even though parties can exchange public key other ways then use\n        // blockchain to verify.)\n        //string publicKey;\n    }\n    \n    /// @notice State variable for storing devices. Index in the array is also a device ID.\n    /// Array can hold a maximum of 2^256-1 entries.\n    Device[] public devices;\n\n    /// @notice Keeps track of total devices for each owner.\n    mapping (address => uint) public ownerDeviceCount;\n\n    /// @dev Fired on creation of new device.\n    event DeviceCreated(uint indexed deviceId, address indexed owner, bytes32 identifier, bytes32 metadataHash, bytes32 firmwareHash);\n\n    /// @dev Modifier for ensuring that the message sender is owner of provided device ID.\n    modifier onlyOwnerOf(uint _deviceId) {\n        require(devices[_deviceId].owner == msg.sender, \"Only for device owner\");\n        _;\n    }\n\n    /**\n     * @notice Creates and saves device into storage. Emits DeviceCreated. \n     * @param _identifier Unique device identifier, such as fingerprint of RSA/ECC public key or Ethereum address (recommended).\n     * @param _metadataHash Merkle root hash of metadata (recommended) or simple hash of concatenated metadata.\n     * @param _firmwareHash Hash of actual firmware hash.\n     * @return Created device ID.\n     */\n    function createDevice(bytes32 _identifier, bytes32 _metadataHash, bytes32 _firmwareHash) public returns (uint) {\n        Device memory newDevice = Device(msg.sender, _identifier, _metadataHash, _firmwareHash);\n        uint deviceId = devices.push(newDevice) - 1;\n        ownerDeviceCount[msg.sender]++;\n\n        emit DeviceCreated(deviceId, msg.sender, _identifier, _metadataHash, _firmwareHash);\n        return deviceId;\n    }\n}\n\n/**\n * @title Provides extra functionalities for devices.\n */\ncontract DeviceHelper is DeviceBase {\n   /**\n     * @notice Gets all devices owned by specified address. \n     * @dev Use this function instead of filtering DeviceCreated event since devices could have been transferred between owners.\n     * @param _owner Owner address.\n     * @return Array of device IDs.\n     */\n    function getDevicesByOwner(address _owner) public view returns (uint[] memory) {\n        uint[] memory deviceIds = new uint[](ownerDeviceCount[_owner]);\n        uint counter = 0;\n        for (uint i = 0; i < devices.length; i++) {\n            if (devices[i].owner == _owner) {\n                deviceIds[counter] = i;\n                counter++;\n            }\n        }\n        return deviceIds;\n    }\n\n    /**\n     * @notice Checks if device is also an entity. \n     * @param _deviceId ID of a  device.\n     * @return Boolean status.\n     */\n    function isDeviceAnEntity(uint _deviceId) public view returns (bool) {\n        return devices[_deviceId].owner == address(uint160(uint256(devices[_deviceId].identifier)));\n    }\n\n    /**\n     * @notice Checks if provided leaf is a member of metadata contained in Merkle tree. \n     * Assumes that each pair of leaves and each pair of pre-images are sorted.\n     * @param _deviceId ID of a device containing metadata hash.\n     * @param _proof Merkle proof containing sibling hashes on the branch from the leaf to the root of the Merkle tree.\n     * @param _leaf Leaf of Merkle tree.\n     * @return Boolean status.\n     */\n    function isValidMetadataMember(uint _deviceId, bytes32[] memory _proof, bytes32 _leaf) public view returns (bool) {\n        return MerkleProof.verifyProof(_proof, devices[_deviceId].metadataHash, _leaf);\n    }\n\n    /**\n     * @notice Checks if provided firmware hash is equal to firmware hash device property. \n     * @param _deviceId ID of a device containing firmware hash.\n     * @param _firmwareHash Firmware hash (not the actual hash).\n     * @return Boolean status.\n     */\n    function isValidFirmwareHash(uint _deviceId, bytes32 _firmwareHash) public view returns (bool) {\n        return devices[_deviceId].firmwareHash == _firmwareHash;\n    }\n\n    /**\n     * @notice Validate authenticity of message signed by Etherium private key.\n     * On-chain validation is available only for Ethereum signed messages.\n     * @param _deviceId ID of a device that signed the message.\n     * @param _messageHash Hash of sent message.\n     * @param _signature Signature generated using web3.eth.sign().\n     * @return Boolean status.\n     */\n    function isValidEthMessage(uint _deviceId, bytes32 _messageHash, bytes memory _signature) public view returns (bool) {\n        return ECRecovery.recover(_messageHash, _signature) == address(uint160(uint256(devices[_deviceId].identifier)));\n    }\n}\n\n/**\n * @title Provides base functionalities for signatures.\n */\ncontract SignatureBase {\n    /// @dev Main signature structucture.\n    struct Signature {\n        // Ethereum address of the signer.\n        address signer;\n\n        // ID of device to sign.\n        uint deviceId;\n\n        // Using 256 bits ensures no overflow on year 2038 (Unix seconds).\n        uint expiryTime;\n\n        // Updates to true once signer decides to revoke signature.\n        bool revoked;\n    }\n\n    /// @notice State variable for storing signatures. Index in the array is also a signature ID.\n    /// Array can hold a maximum of 2^256-1 entries.\n    Signature[] public signatures;\n\n    /// @notice Keeps track of total signatures for each device.\n    mapping (uint => uint) public deviceSignatureCount;\n    \n    /// @dev Fired when an address signs a device.\n    event DeviceSigned(uint indexed signatureId, uint indexed deviceId, address indexed signer, uint expiryTime);\n\n    /// @dev Fired when signature is revoked.\n    event SignatureRevoked(uint indexed signatureId, uint indexed deviceId);\n\n    /// @dev Modifier for ensuring that the device hasn't been signed already.\n    modifier notSigned(uint _deviceId) {\n        require(deviceSignatureCount[_deviceId] == 0, \"Must not be signed\");\n        _;\n    }\n\n    /**\n     * @notice Signs a device and signature into storage. Emits DeviceSigned. \n     * @param _deviceId ID of to be signed device.\n     * @param _expiryTime Expiry time in Unix seconds.\n     * @return Created signature ID.\n     */\n    function signDevice(uint _deviceId, uint _expiryTime) public returns (uint) {\n        Signature memory signature = Signature(msg.sender, _deviceId, _expiryTime, false);\n        uint signatureId = signatures.push(signature) - 1;\n        deviceSignatureCount[_deviceId]++;\n\n        emit DeviceSigned(signatureId, _deviceId, msg.sender, _expiryTime);\n        return signatureId;\n    }\n\n    /**\n     * @notice Revokes a signature. Emits SignatureRevoked. \n     * @param _signatureId ID of to be revoked signature.\n     */\n    function revokeSignature(uint _signatureId) public {\n        require(signatures[_signatureId].signer == msg.sender, \"Only for creator of the signature\");\n        require(signatures[_signatureId].revoked == false, \"Signature mustn't be revoked already\");\n        Signature storage signature = signatures[_signatureId];\n        signature.revoked = true;\n        deviceSignatureCount[signature.deviceId]--;\n\n        emit SignatureRevoked(_signatureId, signature.deviceId);\n    }\n}\n\n/**\n * @title Provides extra functionalities for signatures.\n */\ncontract SignatureHelper is SignatureBase {\n    /**\n     * @notice Gets all signatures for specific device. \n     * @dev Use this function instead of filtering DeviceSigned event since signatures could have been revoked.\n     * @param _deviceId ID of a device.\n     * @return Array of signature IDs.\n     */\n    function getActiveSignaturesForDevice(uint _deviceId) public view returns (uint[] memory) {\n        uint[] memory signatureIds = new uint[](deviceSignatureCount[_deviceId]);\n        uint counter = 0;\n        for (uint i = 0; i < signatures.length; i++) {\n            if (signatures[i].deviceId == _deviceId && signatures[i].revoked == false) {\n                signatureIds[counter] = i;\n                counter++;\n            }\n        }\n        return signatureIds;\n    }\n}\n\n/**\n * @title Enriches devices giving them option to be updated only if not signed already.\n */\ncontract DeviceUpdatable is DeviceHelper, SignatureHelper {\n    /// @dev Fired on device ownership transfer, keeps track of historical device owners.\n    event DeviceTransfered(uint indexed deviceId, address oldOwner, address newOwner);\n    \n    /// @dev Fired on device property update, keeps track of historical property values.\n    event DevicePropertyUpdated(uint indexed deviceId, bytes32 indexed property, bytes32 newValue);\n\n    /**\n     * @notice Transfer device ownership from one external account to another. Emits DeviceTransfered.\n     * @param _deviceId ID of to be transfered device.\n     * @param _to Address of new owner.\n     */\n    function transferDevice(uint _deviceId, address _to) public onlyOwnerOf(_deviceId) notSigned(_deviceId) {\n        address currentOwner = devices[_deviceId].owner;\n        devices[_deviceId].owner = _to;\n        ownerDeviceCount[msg.sender]--;\n        ownerDeviceCount[_to]++;\n\n        emit DeviceTransfered(_deviceId, currentOwner, _to);\n    } \n\n    /**\n     * @notice Update device with new identifier. Emits DevicePropertyUpdated.\n     * @param _deviceId ID of a device.\n     * @param _newIdentifier New identifier.\n     */\n    function updateIdentifier(uint _deviceId, bytes32 _newIdentifier) public onlyOwnerOf(_deviceId) notSigned(_deviceId) {\n        devices[_deviceId].identifier = _newIdentifier;\n\n        emit DevicePropertyUpdated(_deviceId, \"identifier\", _newIdentifier);\n    }\n\n    /**\n     * @notice Update device with new metadata hash. Emits DevicePropertyUpdated.\n     * @param _deviceId ID of a device.\n     * @param _newMetadataHash New metadata hash.\n     */\n    function updateMetadataHash(uint _deviceId, bytes32 _newMetadataHash) public onlyOwnerOf(_deviceId) notSigned(_deviceId) {\n        devices[_deviceId].metadataHash = _newMetadataHash;\n\n        emit DevicePropertyUpdated(_deviceId, \"metadata\", _newMetadataHash);\n    }\n\n    /**\n     * @notice Update device with new firmware hash. Emits DevicePropertyUpdated.\n     * @param _deviceId ID of a device.\n     * @param _newFirmwareHash New firmware hash.\n     */\n    function updateFirmwareHash(uint _deviceId, bytes32 _newFirmwareHash) public onlyOwnerOf(_deviceId) notSigned(_deviceId) {\n        devices[_deviceId].firmwareHash = _newFirmwareHash;\n\n        emit DevicePropertyUpdated(_deviceId, \"firmware\", _newFirmwareHash);\n    }\n}\n\n/// @title Device manager core contract.\ncontract DeviceManager is EntityBase, DeviceUpdatable {\n    /// @dev Merges contracts.\n}\n",
  "sourcePath": "/home/celio/iot-device-management/contracts/DeviceManager.sol",
  "ast": {
    "absolutePath": "/home/celio/iot-device-management/contracts/DeviceManager.sol",
    "exportedSymbols": {
      "DeviceBase": [
        131
      ],
      "DeviceHelper": [
        284
      ],
      "DeviceManager": [
        646
      ],
      "DeviceUpdatable": [
        641
      ],
      "EntityBase": [
        37
      ],
      "SignatureBase": [
        427
      ],
      "SignatureHelper": [
        494
      ]
    },
    "id": 647,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "/home/celio/iot-device-management/contracts/MerkleProof.sol",
        "file": "./MerkleProof.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 647,
        "sourceUnit": 797,
        "src": "25:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/celio/iot-device-management/contracts/ECRecovery.sol",
        "file": "./ECRecovery.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 647,
        "sourceUnit": 728,
        "src": "53:26:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Provides base functionalities for entities.",
        "fullyImplemented": true,
        "id": 37,
        "linearizedBaseContracts": [
          37
        ],
        "name": "EntityBase",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "EntityBase.Entity",
            "id": 6,
            "members": [
              {
                "constant": false,
                "id": 5,
                "name": "data",
                "nodeType": "VariableDeclaration",
                "scope": 6,
                "src": "335:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 4,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "335:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Entity",
            "nodeType": "StructDefinition",
            "scope": 37,
            "src": "222:131:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10,
            "name": "ownerToEntity",
            "nodeType": "VariableDeclaration",
            "scope": 37,
            "src": "410:48:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Entity_$6_storage_$",
              "typeString": "mapping(address => struct EntityBase.Entity)"
            },
            "typeName": {
              "id": 9,
              "keyType": {
                "id": 7,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "419:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "410:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Entity_$6_storage_$",
                "typeString": "mapping(address => struct EntityBase.Entity)"
              },
              "valueType": {
                "contractScope": null,
                "id": 8,
                "name": "Entity",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 6,
                "src": "430:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Entity_$6_storage_ptr",
                  "typeString": "struct EntityBase.Entity"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "@dev Fired on entity data update.",
            "id": 16,
            "name": "EntityDataUpdated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "531:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "531:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14,
                  "indexed": false,
                  "name": "newData",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "554:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "554:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "530:39:0"
            },
            "src": "507:63:0"
          },
          {
            "body": {
              "id": 35,
              "nodeType": "Block",
              "src": "714:107:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 21,
                          "name": "ownerToEntity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10,
                          "src": "724:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Entity_$6_storage_$",
                            "typeString": "mapping(address => struct EntityBase.Entity storage ref)"
                          }
                        },
                        "id": 24,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 22,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 868,
                            "src": "738:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 23,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "738:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "724:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entity_$6_storage",
                          "typeString": "struct EntityBase.Entity storage ref"
                        }
                      },
                      "id": 25,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "data",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5,
                      "src": "724:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 26,
                      "name": "_data",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "757:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "724:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 28,
                  "nodeType": "ExpressionStatement",
                  "src": "724:38:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 30,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "796:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 31,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "796:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 32,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "808:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29,
                      "name": "EntityDataUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16,
                      "src": "778:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 33,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "778:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34,
                  "nodeType": "EmitStatement",
                  "src": "773:41:0"
                }
              ]
            },
            "documentation": "@notice Update entity data.\n@param _data Entity data.",
            "id": 36,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateEntityData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 36,
                  "src": "686:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "685:21:0"
            },
            "returnParameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "714:0:0"
            },
            "scope": 37,
            "src": "660:161:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 647,
        "src": "143:680:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Provides base functionalities for devices.",
        "fullyImplemented": true,
        "id": 131,
        "linearizedBaseContracts": [
          131
        ],
        "name": "DeviceBase",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "DeviceBase.Device",
            "id": 46,
            "members": [
              {
                "constant": false,
                "id": 39,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 46,
                "src": "1022:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 38,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1022:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 41,
                "name": "identifier",
                "nodeType": "VariableDeclaration",
                "scope": 46,
                "src": "1630:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 40,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1630:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 43,
                "name": "metadataHash",
                "nodeType": "VariableDeclaration",
                "scope": 46,
                "src": "1945:20:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 42,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1945:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45,
                "name": "firmwareHash",
                "nodeType": "VariableDeclaration",
                "scope": 46,
                "src": "2250:20:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 44,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "2250:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Device",
            "nodeType": "StructDefinition",
            "scope": 131,
            "src": "951:1615:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 49,
            "name": "devices",
            "nodeType": "VariableDeclaration",
            "scope": 131,
            "src": "2721:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
              "typeString": "struct DeviceBase.Device[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 47,
                "name": "Device",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 46,
                "src": "2721:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Device_$46_storage_ptr",
                  "typeString": "struct DeviceBase.Device"
                }
              },
              "id": 48,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "2721:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage_ptr",
                "typeString": "struct DeviceBase.Device[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 53,
            "name": "ownerDeviceCount",
            "nodeType": "VariableDeclaration",
            "scope": 131,
            "src": "2812:49:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 52,
              "keyType": {
                "id": 50,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "2821:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "2812:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 51,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "2832:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "@dev Fired on creation of new device.",
            "id": 65,
            "name": "DeviceCreated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 64,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55,
                  "indexed": true,
                  "name": "deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "2934:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2934:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "2957:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2957:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59,
                  "indexed": false,
                  "name": "identifier",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "2980:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2980:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61,
                  "indexed": false,
                  "name": "metadataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "3000:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 60,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3000:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63,
                  "indexed": false,
                  "name": "firmwareHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "3022:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 62,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3022:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2933:110:0"
            },
            "src": "2914:130:0"
          },
          {
            "body": {
              "id": 81,
              "nodeType": "Block",
              "src": "3178:100:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 76,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 70,
                              "name": "devices",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49,
                              "src": "3196:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                                "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                              }
                            },
                            "id": 72,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 71,
                              "name": "_deviceId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67,
                              "src": "3204:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3196:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Device_$46_storage",
                              "typeString": "struct DeviceBase.Device storage ref"
                            }
                          },
                          "id": 73,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "owner",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 39,
                          "src": "3196:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 74,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 868,
                            "src": "3224:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 75,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3224:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "3196:38:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f6e6c7920666f7220646576696365206f776e6572",
                        "id": 77,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3236:23:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_d8ad1a9c023f2f7865aaab44a294ffd93a7c2360d9cdcaf7cddf830addfb9fc6",
                          "typeString": "literal_string \"Only for device owner\""
                        },
                        "value": "Only for device owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_d8ad1a9c023f2f7865aaab44a294ffd93a7c2360d9cdcaf7cddf830addfb9fc6",
                          "typeString": "literal_string \"Only for device owner\""
                        }
                      ],
                      "id": 69,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        871,
                        872
                      ],
                      "referencedDeclaration": 872,
                      "src": "3188:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 78,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3188:72:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79,
                  "nodeType": "ExpressionStatement",
                  "src": "3188:72:0"
                },
                {
                  "id": 80,
                  "nodeType": "PlaceholderStatement",
                  "src": "3270:1:0"
                }
              ]
            },
            "documentation": "@dev Modifier for ensuring that the message sender is owner of provided device ID.",
            "id": 82,
            "name": "onlyOwnerOf",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 68,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "3162:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3162:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3161:16:0"
            },
            "src": "3141:137:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 129,
              "nodeType": "Block",
              "src": "3820:316:0",
              "statements": [
                {
                  "assignments": [
                    94
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 94,
                      "name": "newDevice",
                      "nodeType": "VariableDeclaration",
                      "scope": 129,
                      "src": "3830:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Device_$46_memory_ptr",
                        "typeString": "struct DeviceBase.Device"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 93,
                        "name": "Device",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 46,
                        "src": "3830:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage_ptr",
                          "typeString": "struct DeviceBase.Device"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 102,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 96,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "3863:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3863:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 98,
                        "name": "_identifier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 84,
                        "src": "3875:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 99,
                        "name": "_metadataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "3888:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 100,
                        "name": "_firmwareHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 88,
                        "src": "3903:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 95,
                      "name": "Device",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46,
                      "src": "3856:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Device_$46_storage_ptr_$",
                        "typeString": "type(struct DeviceBase.Device storage pointer)"
                      }
                    },
                    "id": 101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3856:61:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Device_$46_memory",
                      "typeString": "struct DeviceBase.Device memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3830:87:0"
                },
                {
                  "assignments": [
                    104
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 104,
                      "name": "deviceId",
                      "nodeType": "VariableDeclaration",
                      "scope": 129,
                      "src": "3927:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 103,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3927:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 111,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 107,
                          "name": "newDevice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 94,
                          "src": "3956:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Device_$46_memory_ptr",
                            "typeString": "struct DeviceBase.Device memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Device_$46_memory_ptr",
                            "typeString": "struct DeviceBase.Device memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 105,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "3943:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3943:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Device_$46_storage_$returns$_t_uint256_$",
                          "typeString": "function (struct DeviceBase.Device storage ref) returns (uint256)"
                        }
                      },
                      "id": 108,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3943:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3969:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "3943:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3927:43:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "3980:30:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 112,
                        "name": "ownerDeviceCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53,
                        "src": "3980:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 115,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 113,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "3997:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3997:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3980:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 117,
                  "nodeType": "ExpressionStatement",
                  "src": "3980:30:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 119,
                        "name": "deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "4040:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 120,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "4050:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4050:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 122,
                        "name": "_identifier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 84,
                        "src": "4062:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 123,
                        "name": "_metadataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "4075:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 124,
                        "name": "_firmwareHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 88,
                        "src": "4090:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 118,
                      "name": "DeviceCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 65,
                      "src": "4026:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_bytes32_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (uint256,address,bytes32,bytes32,bytes32)"
                      }
                    },
                    "id": 125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4026:78:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 126,
                  "nodeType": "EmitStatement",
                  "src": "4021:83:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 127,
                    "name": "deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 104,
                    "src": "4121:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 92,
                  "id": 128,
                  "nodeType": "Return",
                  "src": "4114:15:0"
                }
              ]
            },
            "documentation": "@notice Creates and saves device into storage. Emits DeviceCreated. \n@param _identifier Unique device identifier, such as fingerprint of RSA/ECC public key or Ethereum address (recommended).\n@param _metadataHash Merkle root hash of metadata (recommended) or simple hash of concatenated metadata.\n@param _firmwareHash Hash of actual firmware hash.\n@return Created device ID.",
            "id": 130,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createDevice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 84,
                  "name": "_identifier",
                  "nodeType": "VariableDeclaration",
                  "scope": 130,
                  "src": "3731:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 83,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3731:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 86,
                  "name": "_metadataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 130,
                  "src": "3752:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 85,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3752:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 88,
                  "name": "_firmwareHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 130,
                  "src": "3775:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 87,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3775:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3730:67:0"
            },
            "returnParameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 130,
                  "src": "3814:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 90,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3814:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3813:6:0"
            },
            "scope": 131,
            "src": "3709:427:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 647,
        "src": "886:3252:0"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 132,
              "name": "DeviceBase",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 131,
              "src": "4227:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DeviceBase_$131",
                "typeString": "contract DeviceBase"
              }
            },
            "id": 133,
            "nodeType": "InheritanceSpecifier",
            "src": "4227:10:0"
          }
        ],
        "contractDependencies": [
          131
        ],
        "contractKind": "contract",
        "documentation": "@title Provides extra functionalities for devices.",
        "fullyImplemented": true,
        "id": 284,
        "linearizedBaseContracts": [
          284,
          131
        ],
        "name": "DeviceHelper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 189,
              "nodeType": "Block",
              "src": "4600:320:0",
              "statements": [
                {
                  "assignments": [
                    144
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 144,
                      "name": "deviceIds",
                      "nodeType": "VariableDeclaration",
                      "scope": 189,
                      "src": "4610:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 142,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4610:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 143,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "4610:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 152,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 148,
                          "name": "ownerDeviceCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53,
                          "src": "4647:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 150,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 149,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 135,
                          "src": "4664:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4647:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 147,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4636:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (uint256[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 145,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4640:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 146,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "4640:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      }
                    },
                    "id": 151,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4636:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4610:62:0"
                },
                {
                  "assignments": [
                    154
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 154,
                      "name": "counter",
                      "nodeType": "VariableDeclaration",
                      "scope": 189,
                      "src": "4682:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 153,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4682:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 156,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4697:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4682:16:0"
                },
                {
                  "body": {
                    "id": 185,
                    "nodeType": "Block",
                    "src": "4750:138:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 173,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 168,
                                "name": "devices",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 49,
                                "src": "4768:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                                  "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                                }
                              },
                              "id": 170,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 169,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 158,
                                "src": "4776:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4768:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Device_$46_storage",
                                "typeString": "struct DeviceBase.Device storage ref"
                              }
                            },
                            "id": 171,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 39,
                            "src": "4768:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 172,
                            "name": "_owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 135,
                            "src": "4788:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "4768:26:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 184,
                        "nodeType": "IfStatement",
                        "src": "4764:114:0",
                        "trueBody": {
                          "id": 183,
                          "nodeType": "Block",
                          "src": "4796:82:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 178,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 174,
                                    "name": "deviceIds",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 144,
                                    "src": "4814:9:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 176,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 175,
                                    "name": "counter",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 154,
                                    "src": "4824:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "4814:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 177,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 158,
                                  "src": "4835:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "4814:22:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 179,
                              "nodeType": "ExpressionStatement",
                              "src": "4814:22:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 181,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "4854:9:0",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 180,
                                  "name": "counter",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 154,
                                  "src": "4854:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 182,
                              "nodeType": "ExpressionStatement",
                              "src": "4854:9:0"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 164,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 161,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 158,
                      "src": "4725:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 162,
                        "name": "devices",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "4729:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                          "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                        }
                      },
                      "id": 163,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4729:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4725:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 186,
                  "initializationExpression": {
                    "assignments": [
                      158
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 158,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 186,
                        "src": "4713:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 157,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4713:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 160,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4722:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4713:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4745:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 165,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 158,
                        "src": "4745:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 167,
                    "nodeType": "ExpressionStatement",
                    "src": "4745:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "4708:180:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 187,
                    "name": "deviceIds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 144,
                    "src": "4904:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 140,
                  "id": 188,
                  "nodeType": "Return",
                  "src": "4897:16:0"
                }
              ]
            },
            "documentation": "@notice Gets all devices owned by specified address. \n@dev Use this function instead of filtering DeviceCreated event since devices could have been transferred between owners.\n@param _owner Owner address.\n@return Array of device IDs.",
            "id": 190,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDevicesByOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 135,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 190,
                  "src": "4548:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 134,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4548:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4547:16:0"
            },
            "returnParameters": {
              "id": 140,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 139,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 190,
                  "src": "4585:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 137,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "4585:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 138,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "4585:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4584:15:0"
            },
            "scope": 284,
            "src": "4521:399:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 213,
              "nodeType": "Block",
              "src": "5135:108:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 211,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 197,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "5152:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 199,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 198,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 192,
                          "src": "5160:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5152:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage",
                          "typeString": "struct DeviceBase.Device storage ref"
                        }
                      },
                      "id": 200,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 39,
                      "src": "5152:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 204,
                                      "name": "devices",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 49,
                                      "src": "5204:7:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                                        "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                                      }
                                    },
                                    "id": 206,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 205,
                                      "name": "_deviceId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 192,
                                      "src": "5212:9:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "5204:18:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Device_$46_storage",
                                      "typeString": "struct DeviceBase.Device storage ref"
                                    }
                                  },
                                  "id": 207,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "identifier",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 41,
                                  "src": "5204:29:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "id": 203,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5196:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": "uint256"
                              },
                              "id": 208,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5196:38:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 202,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5188:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint160_$",
                              "typeString": "type(uint160)"
                            },
                            "typeName": "uint160"
                          },
                          "id": 209,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5188:47:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint160",
                            "typeString": "uint160"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint160",
                            "typeString": "uint160"
                          }
                        ],
                        "id": 201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5180:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 210,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5180:56:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "5152:84:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 196,
                  "id": 212,
                  "nodeType": "Return",
                  "src": "5145:91:0"
                }
              ]
            },
            "documentation": "@notice Checks if device is also an entity. \n@param _deviceId ID of a  device.\n@return Boolean status.",
            "id": 214,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isDeviceAnEntity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 192,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 214,
                  "src": "5092:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 191,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5092:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5091:16:0"
            },
            "returnParameters": {
              "id": 196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 195,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 214,
                  "src": "5129:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 194,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5129:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5128:6:0"
            },
            "scope": 284,
            "src": "5066:177:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 236,
              "nodeType": "Block",
              "src": "5806:95:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 228,
                        "name": "_proof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 219,
                        "src": "5847:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 229,
                            "name": "devices",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49,
                            "src": "5855:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                              "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                            }
                          },
                          "id": 231,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 230,
                            "name": "_deviceId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 216,
                            "src": "5863:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5855:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Device_$46_storage",
                            "typeString": "struct DeviceBase.Device storage ref"
                          }
                        },
                        "id": 232,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "metadataHash",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 43,
                        "src": "5855:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 233,
                        "name": "_leaf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 221,
                        "src": "5888:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 226,
                        "name": "MerkleProof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 796,
                        "src": "5823:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_MerkleProof_$796_$",
                          "typeString": "type(library MerkleProof)"
                        }
                      },
                      "id": 227,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "verifyProof",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 795,
                      "src": "5823:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_bytes32_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (bytes32[] memory,bytes32,bytes32) pure returns (bool)"
                      }
                    },
                    "id": 234,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5823:71:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 225,
                  "id": 235,
                  "nodeType": "Return",
                  "src": "5816:78:0"
                }
              ]
            },
            "documentation": "@notice Checks if provided leaf is a member of metadata contained in Merkle tree. \nAssumes that each pair of leaves and each pair of pre-images are sorted.\n@param _deviceId ID of a device containing metadata hash.\n@param _proof Merkle proof containing sibling hashes on the branch from the leaf to the root of the Merkle tree.\n@param _leaf Leaf of Merkle tree.\n@return Boolean status.",
            "id": 237,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidMetadataMember",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 216,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 237,
                  "src": "5723:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 215,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5723:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 219,
                  "name": "_proof",
                  "nodeType": "VariableDeclaration",
                  "scope": 237,
                  "src": "5739:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 217,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5739:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 218,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5739:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 221,
                  "name": "_leaf",
                  "nodeType": "VariableDeclaration",
                  "scope": 237,
                  "src": "5764:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 220,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5764:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5722:56:0"
            },
            "returnParameters": {
              "id": 225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 224,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 237,
                  "src": "5800:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 223,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5800:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5799:6:0"
            },
            "scope": 284,
            "src": "5692:209:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 253,
              "nodeType": "Block",
              "src": "6271:72:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 246,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "6288:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 248,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 247,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 239,
                          "src": "6296:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "6288:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage",
                          "typeString": "struct DeviceBase.Device storage ref"
                        }
                      },
                      "id": 249,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "firmwareHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 45,
                      "src": "6288:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 250,
                      "name": "_firmwareHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 241,
                      "src": "6323:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "6288:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 245,
                  "id": 252,
                  "nodeType": "Return",
                  "src": "6281:55:0"
                }
              ]
            },
            "documentation": "@notice Checks if provided firmware hash is equal to firmware hash device property. \n@param _deviceId ID of a device containing firmware hash.\n@param _firmwareHash Firmware hash (not the actual hash).\n@return Boolean status.",
            "id": 254,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidFirmwareHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 239,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 254,
                  "src": "6205:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 238,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6205:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 241,
                  "name": "_firmwareHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 254,
                  "src": "6221:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 240,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6221:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6204:39:0"
            },
            "returnParameters": {
              "id": 245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 244,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 254,
                  "src": "6265:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 243,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6265:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6264:6:0"
            },
            "scope": 284,
            "src": "6176:167:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 282,
              "nodeType": "Block",
              "src": "6849:128:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 280,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 267,
                          "name": "_messageHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 258,
                          "src": "6885:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 268,
                          "name": "_signature",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 260,
                          "src": "6899:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 265,
                          "name": "ECRecovery",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 727,
                          "src": "6866:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ECRecovery_$727_$",
                            "typeString": "type(library ECRecovery)"
                          }
                        },
                        "id": 266,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "recover",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 710,
                        "src": "6866:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$",
                          "typeString": "function (bytes32,bytes memory) pure returns (address)"
                        }
                      },
                      "id": 269,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6866:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 273,
                                      "name": "devices",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 49,
                                      "src": "6938:7:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                                        "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                                      }
                                    },
                                    "id": 275,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 274,
                                      "name": "_deviceId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 256,
                                      "src": "6946:9:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "6938:18:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Device_$46_storage",
                                      "typeString": "struct DeviceBase.Device storage ref"
                                    }
                                  },
                                  "id": 276,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "identifier",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 41,
                                  "src": "6938:29:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "id": 272,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6930:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": "uint256"
                              },
                              "id": 277,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6930:38:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 271,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6922:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint160_$",
                              "typeString": "type(uint160)"
                            },
                            "typeName": "uint160"
                          },
                          "id": 278,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6922:47:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint160",
                            "typeString": "uint160"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint160",
                            "typeString": "uint160"
                          }
                        ],
                        "id": 270,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6914:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 279,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6914:56:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "6866:104:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 264,
                  "id": 281,
                  "nodeType": "Return",
                  "src": "6859:111:0"
                }
              ]
            },
            "documentation": "@notice Validate authenticity of message signed by Etherium private key.\nOn-chain validation is available only for Ethereum signed messages.\n@param _deviceId ID of a device that signed the message.\n@param _messageHash Hash of sent message.\n@param _signature Signature generated using web3.eth.sign().\n@return Boolean status.",
            "id": 283,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidEthMessage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 256,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 283,
                  "src": "6759:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 255,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6759:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 258,
                  "name": "_messageHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 283,
                  "src": "6775:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 257,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6775:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 260,
                  "name": "_signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 283,
                  "src": "6797:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 259,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6797:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6758:63:0"
            },
            "returnParameters": {
              "id": 264,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 263,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 283,
                  "src": "6843:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 262,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6843:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6842:6:0"
            },
            "scope": 284,
            "src": "6732:245:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 647,
        "src": "4202:2777:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Provides base functionalities for signatures.",
        "fullyImplemented": true,
        "id": 427,
        "linearizedBaseContracts": [
          427
        ],
        "name": "SignatureBase",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "SignatureBase.Signature",
            "id": 293,
            "members": [
              {
                "constant": false,
                "id": 286,
                "name": "signer",
                "nodeType": "VariableDeclaration",
                "scope": 293,
                "src": "7186:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 285,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "7186:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 288,
                "name": "deviceId",
                "nodeType": "VariableDeclaration",
                "scope": 293,
                "src": "7244:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 287,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "7244:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 290,
                "name": "expiryTime",
                "nodeType": "VariableDeclaration",
                "scope": 293,
                "src": "7343:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 289,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "7343:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 292,
                "name": "revoked",
                "nodeType": "VariableDeclaration",
                "scope": 293,
                "src": "7437:12:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 291,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "7437:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Signature",
            "nodeType": "StructDefinition",
            "scope": 427,
            "src": "7116:340:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 296,
            "name": "signatures",
            "nodeType": "VariableDeclaration",
            "scope": 427,
            "src": "7613:29:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
              "typeString": "struct SignatureBase.Signature[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 294,
                "name": "Signature",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 293,
                "src": "7613:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                  "typeString": "struct SignatureBase.Signature"
                }
              },
              "id": 295,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "7613:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage_ptr",
                "typeString": "struct SignatureBase.Signature[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 300,
            "name": "deviceSignatureCount",
            "nodeType": "VariableDeclaration",
            "scope": 427,
            "src": "7714:50:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 299,
              "keyType": {
                "id": 297,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "7723:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "7714:22:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 298,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "7731:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "@dev Fired when an address signs a device.",
            "id": 310,
            "name": "DeviceSigned",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 309,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 302,
                  "indexed": true,
                  "name": "signatureId",
                  "nodeType": "VariableDeclaration",
                  "scope": 310,
                  "src": "7845:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 301,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7845:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 304,
                  "indexed": true,
                  "name": "deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 310,
                  "src": "7871:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 303,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7871:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 306,
                  "indexed": true,
                  "name": "signer",
                  "nodeType": "VariableDeclaration",
                  "scope": 310,
                  "src": "7894:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 305,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7894:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 308,
                  "indexed": false,
                  "name": "expiryTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 310,
                  "src": "7918:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 307,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7918:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7844:90:0"
            },
            "src": "7826:109:0"
          },
          {
            "anonymous": false,
            "documentation": "@dev Fired when signature is revoked.",
            "id": 316,
            "name": "SignatureRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 312,
                  "indexed": true,
                  "name": "signatureId",
                  "nodeType": "VariableDeclaration",
                  "scope": 316,
                  "src": "8010:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 311,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8010:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 314,
                  "indexed": true,
                  "name": "deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 316,
                  "src": "8036:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 313,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8036:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8009:49:0"
            },
            "src": "7987:72:0"
          },
          {
            "body": {
              "id": 330,
              "nodeType": "Block",
              "src": "8179:95:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 325,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 321,
                            "name": "deviceSignatureCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 300,
                            "src": "8197:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 323,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 322,
                            "name": "_deviceId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 318,
                            "src": "8218:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "8197:31:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 324,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8232:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "8197:36:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4d757374206e6f74206265207369676e6564",
                        "id": 326,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8235:20:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_73fc55a17986bff1b99557baa412a11f76b8a2a98ee4458c73a848ffe7b97e84",
                          "typeString": "literal_string \"Must not be signed\""
                        },
                        "value": "Must not be signed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_73fc55a17986bff1b99557baa412a11f76b8a2a98ee4458c73a848ffe7b97e84",
                          "typeString": "literal_string \"Must not be signed\""
                        }
                      ],
                      "id": 320,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        871,
                        872
                      ],
                      "referencedDeclaration": 872,
                      "src": "8189:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 327,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8189:67:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 328,
                  "nodeType": "ExpressionStatement",
                  "src": "8189:67:0"
                },
                {
                  "id": 329,
                  "nodeType": "PlaceholderStatement",
                  "src": "8266:1:0"
                }
              ]
            },
            "documentation": "@dev Modifier for ensuring that the device hasn't been signed already.",
            "id": 331,
            "name": "notSigned",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 319,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 318,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 331,
                  "src": "8163:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 317,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8163:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8162:16:0"
            },
            "src": "8144:130:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 374,
              "nodeType": "Block",
              "src": "8594:305:0",
              "statements": [
                {
                  "assignments": [
                    341
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 341,
                      "name": "signature",
                      "nodeType": "VariableDeclaration",
                      "scope": 374,
                      "src": "8604:26:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Signature_$293_memory_ptr",
                        "typeString": "struct SignatureBase.Signature"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 340,
                        "name": "Signature",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 293,
                        "src": "8604:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                          "typeString": "struct SignatureBase.Signature"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 349,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 343,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "8643:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 344,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8643:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 345,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 333,
                        "src": "8655:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 346,
                        "name": "_expiryTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 335,
                        "src": "8666:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 347,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8679:5:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 342,
                      "name": "Signature",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 293,
                      "src": "8633:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Signature_$293_storage_ptr_$",
                        "typeString": "type(struct SignatureBase.Signature storage pointer)"
                      }
                    },
                    "id": 348,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8633:52:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Signature_$293_memory",
                      "typeString": "struct SignatureBase.Signature memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8604:81:0"
                },
                {
                  "assignments": [
                    351
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 351,
                      "name": "signatureId",
                      "nodeType": "VariableDeclaration",
                      "scope": 374,
                      "src": "8695:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 350,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "8695:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 358,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 354,
                          "name": "signature",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 341,
                          "src": "8730:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Signature_$293_memory_ptr",
                            "typeString": "struct SignatureBase.Signature memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Signature_$293_memory_ptr",
                            "typeString": "struct SignatureBase.Signature memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 352,
                          "name": "signatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 296,
                          "src": "8714:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                            "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                          }
                        },
                        "id": 353,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8714:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Signature_$293_storage_$returns$_t_uint256_$",
                          "typeString": "function (struct SignatureBase.Signature storage ref) returns (uint256)"
                        }
                      },
                      "id": 355,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8714:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 356,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8743:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "8714:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8695:49:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 362,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "8754:33:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 359,
                        "name": "deviceSignatureCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 300,
                        "src": "8754:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 361,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 360,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 333,
                        "src": "8775:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "8754:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 363,
                  "nodeType": "ExpressionStatement",
                  "src": "8754:33:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 365,
                        "name": "signatureId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 351,
                        "src": "8816:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 366,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 333,
                        "src": "8829:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 367,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "8840:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 368,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8840:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 369,
                        "name": "_expiryTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 335,
                        "src": "8852:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 364,
                      "name": "DeviceSigned",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 310,
                      "src": "8803:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,address,uint256)"
                      }
                    },
                    "id": 370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8803:61:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 371,
                  "nodeType": "EmitStatement",
                  "src": "8798:66:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 372,
                    "name": "signatureId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 351,
                    "src": "8881:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 339,
                  "id": 373,
                  "nodeType": "Return",
                  "src": "8874:18:0"
                }
              ]
            },
            "documentation": "@notice Signs a device and signature into storage. Emits DeviceSigned. \n@param _deviceId ID of to be signed device.\n@param _expiryTime Expiry time in Unix seconds.\n@return Created signature ID.",
            "id": 375,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "signDevice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 333,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 375,
                  "src": "8538:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 332,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8538:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 335,
                  "name": "_expiryTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 375,
                  "src": "8554:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 334,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8554:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8537:34:0"
            },
            "returnParameters": {
              "id": 339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 338,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 375,
                  "src": "8588:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 337,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8588:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8587:6:0"
            },
            "scope": 427,
            "src": "8518:381:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 425,
              "nodeType": "Block",
              "src": "9091:424:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 387,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 381,
                              "name": "signatures",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 296,
                              "src": "9109:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                                "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                              }
                            },
                            "id": 383,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 382,
                              "name": "_signatureId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 377,
                              "src": "9120:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "9109:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Signature_$293_storage",
                              "typeString": "struct SignatureBase.Signature storage ref"
                            }
                          },
                          "id": 384,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "signer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 286,
                          "src": "9109:31:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 385,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 868,
                            "src": "9144:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 386,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "9144:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "9109:45:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f6e6c7920666f722063726561746f72206f6620746865207369676e6174757265",
                        "id": 388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9156:35:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3aaaa87a777306387460c3ec7c037c21271b7d2e0f37fa494722618006dc0cdb",
                          "typeString": "literal_string \"Only for creator of the signature\""
                        },
                        "value": "Only for creator of the signature"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3aaaa87a777306387460c3ec7c037c21271b7d2e0f37fa494722618006dc0cdb",
                          "typeString": "literal_string \"Only for creator of the signature\""
                        }
                      ],
                      "id": 380,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        871,
                        872
                      ],
                      "referencedDeclaration": 872,
                      "src": "9101:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 389,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9101:91:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 390,
                  "nodeType": "ExpressionStatement",
                  "src": "9101:91:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 392,
                              "name": "signatures",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 296,
                              "src": "9210:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                                "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                              }
                            },
                            "id": 394,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 393,
                              "name": "_signatureId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 377,
                              "src": "9221:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "9210:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Signature_$293_storage",
                              "typeString": "struct SignatureBase.Signature storage ref"
                            }
                          },
                          "id": 395,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "revoked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 292,
                          "src": "9210:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9246:5:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "9210:41:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5369676e6174757265206d7573746e2774206265207265766f6b656420616c7265616479",
                        "id": 398,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9253:38:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e22c32ac6c26626aeef51dc165bb8bcbe4c9684fc645b2cda8fe482fe7423f3d",
                          "typeString": "literal_string \"Signature mustn't be revoked already\""
                        },
                        "value": "Signature mustn't be revoked already"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e22c32ac6c26626aeef51dc165bb8bcbe4c9684fc645b2cda8fe482fe7423f3d",
                          "typeString": "literal_string \"Signature mustn't be revoked already\""
                        }
                      ],
                      "id": 391,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        871,
                        872
                      ],
                      "referencedDeclaration": 872,
                      "src": "9202:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 399,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9202:90:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 400,
                  "nodeType": "ExpressionStatement",
                  "src": "9202:90:0"
                },
                {
                  "assignments": [
                    402
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 402,
                      "name": "signature",
                      "nodeType": "VariableDeclaration",
                      "scope": 425,
                      "src": "9302:27:0",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                        "typeString": "struct SignatureBase.Signature"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 401,
                        "name": "Signature",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 293,
                        "src": "9302:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                          "typeString": "struct SignatureBase.Signature"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 406,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 403,
                      "name": "signatures",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 296,
                      "src": "9332:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                        "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                      }
                    },
                    "id": 405,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 404,
                      "name": "_signatureId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 377,
                      "src": "9343:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "9332:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Signature_$293_storage",
                      "typeString": "struct SignatureBase.Signature storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9302:54:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 411,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 407,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 402,
                        "src": "9366:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                          "typeString": "struct SignatureBase.Signature storage pointer"
                        }
                      },
                      "id": 409,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "revoked",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 292,
                      "src": "9366:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 410,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9386:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "9366:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 412,
                  "nodeType": "ExpressionStatement",
                  "src": "9366:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 417,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "9400:42:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 413,
                        "name": "deviceSignatureCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 300,
                        "src": "9400:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 416,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 414,
                          "name": "signature",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 402,
                          "src": "9421:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                            "typeString": "struct SignatureBase.Signature storage pointer"
                          }
                        },
                        "id": 415,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "deviceId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 288,
                        "src": "9421:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "9400:40:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 418,
                  "nodeType": "ExpressionStatement",
                  "src": "9400:42:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 420,
                        "name": "_signatureId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 377,
                        "src": "9475:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 421,
                          "name": "signature",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 402,
                          "src": "9489:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                            "typeString": "struct SignatureBase.Signature storage pointer"
                          }
                        },
                        "id": 422,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "deviceId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 288,
                        "src": "9489:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 419,
                      "name": "SignatureRevoked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 316,
                      "src": "9458:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 423,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9458:50:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 424,
                  "nodeType": "EmitStatement",
                  "src": "9453:55:0"
                }
              ]
            },
            "documentation": "@notice Revokes a signature. Emits SignatureRevoked. \n@param _signatureId ID of to be revoked signature.",
            "id": 426,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "revokeSignature",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 378,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 377,
                  "name": "_signatureId",
                  "nodeType": "VariableDeclaration",
                  "scope": 426,
                  "src": "9065:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 376,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "9065:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9064:19:0"
            },
            "returnParameters": {
              "id": 379,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9091:0:0"
            },
            "scope": 427,
            "src": "9040:475:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 647,
        "src": "7045:2472:0"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 428,
              "name": "SignatureBase",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 427,
              "src": "9612:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SignatureBase_$427",
                "typeString": "contract SignatureBase"
              }
            },
            "id": 429,
            "nodeType": "InheritanceSpecifier",
            "src": "9612:13:0"
          }
        ],
        "contractDependencies": [
          427
        ],
        "contractKind": "contract",
        "documentation": "@title Provides extra functionalities for signatures.",
        "fullyImplemented": true,
        "id": 494,
        "linearizedBaseContracts": [
          494,
          427
        ],
        "name": "SignatureHelper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 492,
              "nodeType": "Block",
              "src": "9986:382:0",
              "statements": [
                {
                  "assignments": [
                    440
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 440,
                      "name": "signatureIds",
                      "nodeType": "VariableDeclaration",
                      "scope": 492,
                      "src": "9996:26:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 438,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "9996:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 439,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "9996:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 448,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 444,
                          "name": "deviceSignatureCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 300,
                          "src": "10036:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 446,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 445,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "10057:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "10036:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 443,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "10025:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (uint256[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 441,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "10029:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 442,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "10029:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      }
                    },
                    "id": 447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10025:43:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9996:72:0"
                },
                {
                  "assignments": [
                    450
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 450,
                      "name": "counter",
                      "nodeType": "VariableDeclaration",
                      "scope": 492,
                      "src": "10078:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 449,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "10078:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 452,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "10093:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10078:16:0"
                },
                {
                  "body": {
                    "id": 488,
                    "nodeType": "Block",
                    "src": "10149:184:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 476,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 469,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 464,
                                  "name": "signatures",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 296,
                                  "src": "10167:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                                    "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                                  }
                                },
                                "id": 466,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 465,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 454,
                                  "src": "10178:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "10167:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Signature_$293_storage",
                                  "typeString": "struct SignatureBase.Signature storage ref"
                                }
                              },
                              "id": 467,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "deviceId",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 288,
                              "src": "10167:22:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 468,
                              "name": "_deviceId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 431,
                              "src": "10193:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "10167:35:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 475,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 470,
                                  "name": "signatures",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 296,
                                  "src": "10206:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                                    "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                                  }
                                },
                                "id": 472,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 471,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 454,
                                  "src": "10217:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "10206:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Signature_$293_storage",
                                  "typeString": "struct SignatureBase.Signature storage ref"
                                }
                              },
                              "id": 473,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "revoked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 292,
                              "src": "10206:21:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "66616c7365",
                              "id": 474,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10231:5:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            "src": "10206:30:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "10167:69:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 487,
                        "nodeType": "IfStatement",
                        "src": "10163:160:0",
                        "trueBody": {
                          "id": 486,
                          "nodeType": "Block",
                          "src": "10238:85:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 481,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 477,
                                    "name": "signatureIds",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 440,
                                    "src": "10256:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 479,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 478,
                                    "name": "counter",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 450,
                                    "src": "10269:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "10256:21:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 480,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 454,
                                  "src": "10280:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "10256:25:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 482,
                              "nodeType": "ExpressionStatement",
                              "src": "10256:25:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 484,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "10299:9:0",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 483,
                                  "name": "counter",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 450,
                                  "src": "10299:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 485,
                              "nodeType": "ExpressionStatement",
                              "src": "10299:9:0"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 460,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 457,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 454,
                      "src": "10121:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 458,
                        "name": "signatures",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 296,
                        "src": "10125:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                          "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                        }
                      },
                      "id": 459,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "10125:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10121:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 489,
                  "initializationExpression": {
                    "assignments": [
                      454
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 454,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 489,
                        "src": "10109:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 453,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "10109:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 456,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 455,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10118:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "10109:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 462,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "10144:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 461,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 454,
                        "src": "10144:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 463,
                    "nodeType": "ExpressionStatement",
                    "src": "10144:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "10104:229:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 490,
                    "name": "signatureIds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 440,
                    "src": "10349:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 436,
                  "id": 491,
                  "nodeType": "Return",
                  "src": "10342:19:0"
                }
              ]
            },
            "documentation": "@notice Gets all signatures for specific device. \n@dev Use this function instead of filtering DeviceSigned event since signatures could have been revoked.\n@param _deviceId ID of a device.\n@return Array of signature IDs.",
            "id": 493,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getActiveSignaturesForDevice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 431,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 493,
                  "src": "9934:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 430,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "9934:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9933:16:0"
            },
            "returnParameters": {
              "id": 436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 435,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 493,
                  "src": "9971:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 433,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "9971:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 434,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "9971:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9970:15:0"
            },
            "scope": 494,
            "src": "9896:472:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 647,
        "src": "9584:786:0"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 495,
              "name": "DeviceHelper",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 284,
              "src": "10496:12:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DeviceHelper_$284",
                "typeString": "contract DeviceHelper"
              }
            },
            "id": 496,
            "nodeType": "InheritanceSpecifier",
            "src": "10496:12:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 497,
              "name": "SignatureHelper",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 494,
              "src": "10510:15:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SignatureHelper_$494",
                "typeString": "contract SignatureHelper"
              }
            },
            "id": 498,
            "nodeType": "InheritanceSpecifier",
            "src": "10510:15:0"
          }
        ],
        "contractDependencies": [
          284,
          131,
          427,
          494
        ],
        "contractKind": "contract",
        "documentation": "@title Enriches devices giving them option to be updated only if not signed already.",
        "fullyImplemented": true,
        "id": 641,
        "linearizedBaseContracts": [
          641,
          494,
          427,
          284,
          131
        ],
        "name": "DeviceUpdatable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": "@dev Fired on device ownership transfer, keeps track of historical device owners.",
            "id": 506,
            "name": "DeviceTransfered",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 505,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 500,
                  "indexed": true,
                  "name": "deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 506,
                  "src": "10645:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 499,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "10645:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 502,
                  "indexed": false,
                  "name": "oldOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 506,
                  "src": "10668:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 501,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10668:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 504,
                  "indexed": false,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 506,
                  "src": "10686:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 503,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10686:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "10644:59:0"
            },
            "src": "10622:82:0"
          },
          {
            "anonymous": false,
            "documentation": "@dev Fired on device property update, keeps track of historical property values.",
            "id": 514,
            "name": "DevicePropertyUpdated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 508,
                  "indexed": true,
                  "name": "deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 514,
                  "src": "10831:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 507,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "10831:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 510,
                  "indexed": true,
                  "name": "property",
                  "nodeType": "VariableDeclaration",
                  "scope": 514,
                  "src": "10854:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 509,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10854:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 512,
                  "indexed": false,
                  "name": "newValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 514,
                  "src": "10880:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 511,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10880:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "10830:67:0"
            },
            "src": "10803:95:0"
          },
          {
            "body": {
              "id": 558,
              "nodeType": "Block",
              "src": "11222:239:0",
              "statements": [
                {
                  "assignments": [
                    528
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 528,
                      "name": "currentOwner",
                      "nodeType": "VariableDeclaration",
                      "scope": 558,
                      "src": "11232:20:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 527,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "11232:7:0",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 533,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 529,
                        "name": "devices",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "11255:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                          "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                        }
                      },
                      "id": 531,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 530,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 516,
                        "src": "11263:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "11255:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Device_$46_storage",
                        "typeString": "struct DeviceBase.Device storage ref"
                      }
                    },
                    "id": 532,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "owner",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 39,
                    "src": "11255:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11232:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 539,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 534,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "11289:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 536,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 535,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 516,
                          "src": "11297:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "11289:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage",
                          "typeString": "struct DeviceBase.Device storage ref"
                        }
                      },
                      "id": 537,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 39,
                      "src": "11289:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 538,
                      "name": "_to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 518,
                      "src": "11316:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11289:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 540,
                  "nodeType": "ExpressionStatement",
                  "src": "11289:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "11329:30:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 541,
                        "name": "ownerDeviceCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53,
                        "src": "11329:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 544,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 542,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "11346:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 543,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "11346:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "11329:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 546,
                  "nodeType": "ExpressionStatement",
                  "src": "11329:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 550,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "11369:23:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 547,
                        "name": "ownerDeviceCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53,
                        "src": "11369:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 549,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 548,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 518,
                        "src": "11386:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "11369:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 551,
                  "nodeType": "ExpressionStatement",
                  "src": "11369:23:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 553,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 516,
                        "src": "11425:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 554,
                        "name": "currentOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 528,
                        "src": "11436:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 555,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 518,
                        "src": "11450:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 552,
                      "name": "DeviceTransfered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 506,
                      "src": "11408:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address,address)"
                      }
                    },
                    "id": 556,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11408:46:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 557,
                  "nodeType": "EmitStatement",
                  "src": "11403:51:0"
                }
              ]
            },
            "documentation": "@notice Transfer device ownership from one external account to another. Emits DeviceTransfered.\n@param _deviceId ID of to be transfered device.\n@param _to Address of new owner.",
            "id": 559,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 521,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 516,
                    "src": "11190:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 522,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 520,
                  "name": "onlyOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 82,
                  "src": "11178:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "11178:22:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 524,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 516,
                    "src": "11211:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 525,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 523,
                  "name": "notSigned",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 331,
                  "src": "11201:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "11201:20:0"
              }
            ],
            "name": "transferDevice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 516,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 559,
                  "src": "11142:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 515,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "11142:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 518,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 559,
                  "src": "11158:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 517,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11158:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "11141:29:0"
            },
            "returnParameters": {
              "id": 526,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11222:0:0"
            },
            "scope": 641,
            "src": "11118:343:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 585,
              "nodeType": "Block",
              "src": "11765:141:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 572,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "11775:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 574,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 573,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 561,
                          "src": "11783:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "11775:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage",
                          "typeString": "struct DeviceBase.Device storage ref"
                        }
                      },
                      "id": 575,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "identifier",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 41,
                      "src": "11775:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 576,
                      "name": "_newIdentifier",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 563,
                      "src": "11807:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "11775:46:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 578,
                  "nodeType": "ExpressionStatement",
                  "src": "11775:46:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 580,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 561,
                        "src": "11859:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6964656e746966696572",
                        "id": 581,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11870:12:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c9c8fb0ee362b7a8868ca48cc94ee58e323adab92aeaba9c12b8aa7dca5fe466",
                          "typeString": "literal_string \"identifier\""
                        },
                        "value": "identifier"
                      },
                      {
                        "argumentTypes": null,
                        "id": 582,
                        "name": "_newIdentifier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 563,
                        "src": "11884:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c9c8fb0ee362b7a8868ca48cc94ee58e323adab92aeaba9c12b8aa7dca5fe466",
                          "typeString": "literal_string \"identifier\""
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 579,
                      "name": "DevicePropertyUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 514,
                      "src": "11837:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (uint256,bytes32,bytes32)"
                      }
                    },
                    "id": 583,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11837:62:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 584,
                  "nodeType": "EmitStatement",
                  "src": "11832:67:0"
                }
              ]
            },
            "documentation": "@notice Update device with new identifier. Emits DevicePropertyUpdated.\n@param _deviceId ID of a device.\n@param _newIdentifier New identifier.",
            "id": 586,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 566,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 561,
                    "src": "11733:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 567,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 565,
                  "name": "onlyOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 82,
                  "src": "11721:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "11721:22:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 569,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 561,
                    "src": "11754:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 570,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 568,
                  "name": "notSigned",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 331,
                  "src": "11744:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "11744:20:0"
              }
            ],
            "name": "updateIdentifier",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 561,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 586,
                  "src": "11674:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 560,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "11674:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 563,
                  "name": "_newIdentifier",
                  "nodeType": "VariableDeclaration",
                  "scope": 586,
                  "src": "11690:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 562,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "11690:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "11673:40:0"
            },
            "returnParameters": {
              "id": 571,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11765:0:0"
            },
            "scope": 641,
            "src": "11648:258:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 612,
              "nodeType": "Block",
              "src": "12221:145:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 599,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "12231:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 601,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 600,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 588,
                          "src": "12239:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "12231:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage",
                          "typeString": "struct DeviceBase.Device storage ref"
                        }
                      },
                      "id": 602,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "metadataHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 43,
                      "src": "12231:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 603,
                      "name": "_newMetadataHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 590,
                      "src": "12265:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "12231:50:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 605,
                  "nodeType": "ExpressionStatement",
                  "src": "12231:50:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 607,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 588,
                        "src": "12319:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6d65746164617461",
                        "id": 608,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12330:10:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7a9d3a032b8ff274f09714b56ba8e5ed776ec9638ca303069bc3a3267bb22f65",
                          "typeString": "literal_string \"metadata\""
                        },
                        "value": "metadata"
                      },
                      {
                        "argumentTypes": null,
                        "id": 609,
                        "name": "_newMetadataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 590,
                        "src": "12342:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_7a9d3a032b8ff274f09714b56ba8e5ed776ec9638ca303069bc3a3267bb22f65",
                          "typeString": "literal_string \"metadata\""
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 606,
                      "name": "DevicePropertyUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 514,
                      "src": "12297:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (uint256,bytes32,bytes32)"
                      }
                    },
                    "id": 610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12297:62:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 611,
                  "nodeType": "EmitStatement",
                  "src": "12292:67:0"
                }
              ]
            },
            "documentation": "@notice Update device with new metadata hash. Emits DevicePropertyUpdated.\n@param _deviceId ID of a device.\n@param _newMetadataHash New metadata hash.",
            "id": 613,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 593,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 588,
                    "src": "12189:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 594,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 592,
                  "name": "onlyOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 82,
                  "src": "12177:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "12177:22:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 596,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 588,
                    "src": "12210:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 597,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 595,
                  "name": "notSigned",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 331,
                  "src": "12200:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "12200:20:0"
              }
            ],
            "name": "updateMetadataHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 588,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 613,
                  "src": "12128:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 587,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "12128:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 590,
                  "name": "_newMetadataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 613,
                  "src": "12144:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 589,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12144:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "12127:42:0"
            },
            "returnParameters": {
              "id": 598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12221:0:0"
            },
            "scope": 641,
            "src": "12100:266:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 639,
              "nodeType": "Block",
              "src": "12681:145:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 631,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 626,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "12691:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 628,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 627,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 615,
                          "src": "12699:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "12691:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage",
                          "typeString": "struct DeviceBase.Device storage ref"
                        }
                      },
                      "id": 629,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "firmwareHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 45,
                      "src": "12691:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 630,
                      "name": "_newFirmwareHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 617,
                      "src": "12725:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "12691:50:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 632,
                  "nodeType": "ExpressionStatement",
                  "src": "12691:50:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 634,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 615,
                        "src": "12779:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6669726d77617265",
                        "id": 635,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12790:10:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_99ae24b5e16982fa6bd82ac48369a10e6c7145bd48234d69ccfd0f110eb2e630",
                          "typeString": "literal_string \"firmware\""
                        },
                        "value": "firmware"
                      },
                      {
                        "argumentTypes": null,
                        "id": 636,
                        "name": "_newFirmwareHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 617,
                        "src": "12802:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_99ae24b5e16982fa6bd82ac48369a10e6c7145bd48234d69ccfd0f110eb2e630",
                          "typeString": "literal_string \"firmware\""
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 633,
                      "name": "DevicePropertyUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 514,
                      "src": "12757:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (uint256,bytes32,bytes32)"
                      }
                    },
                    "id": 637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12757:62:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 638,
                  "nodeType": "EmitStatement",
                  "src": "12752:67:0"
                }
              ]
            },
            "documentation": "@notice Update device with new firmware hash. Emits DevicePropertyUpdated.\n@param _deviceId ID of a device.\n@param _newFirmwareHash New firmware hash.",
            "id": 640,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 620,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 615,
                    "src": "12649:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 621,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 619,
                  "name": "onlyOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 82,
                  "src": "12637:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "12637:22:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 623,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 615,
                    "src": "12670:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 624,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 622,
                  "name": "notSigned",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 331,
                  "src": "12660:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "12660:20:0"
              }
            ],
            "name": "updateFirmwareHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 618,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 615,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 640,
                  "src": "12588:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 614,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "12588:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 617,
                  "name": "_newFirmwareHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 640,
                  "src": "12604:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 616,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12604:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "12587:42:0"
            },
            "returnParameters": {
              "id": 625,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12681:0:0"
            },
            "scope": 641,
            "src": "12560:266:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 647,
        "src": "10468:2360:0"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 642,
              "name": "EntityBase",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 37,
              "src": "12897:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_EntityBase_$37",
                "typeString": "contract EntityBase"
              }
            },
            "id": 643,
            "nodeType": "InheritanceSpecifier",
            "src": "12897:10:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 644,
              "name": "DeviceUpdatable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 641,
              "src": "12909:15:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DeviceUpdatable_$641",
                "typeString": "contract DeviceUpdatable"
              }
            },
            "id": 645,
            "nodeType": "InheritanceSpecifier",
            "src": "12909:15:0"
          }
        ],
        "contractDependencies": [
          37,
          284,
          131,
          427,
          494,
          641
        ],
        "contractKind": "contract",
        "documentation": "@title Device manager core contract.",
        "fullyImplemented": true,
        "id": 646,
        "linearizedBaseContracts": [
          646,
          641,
          494,
          427,
          284,
          131,
          37
        ],
        "name": "DeviceManager",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 647,
        "src": "12871:88:0"
      }
    ],
    "src": "0:12960:0"
  },
  "legacyAST": {
    "absolutePath": "/home/celio/iot-device-management/contracts/DeviceManager.sol",
    "exportedSymbols": {
      "DeviceBase": [
        131
      ],
      "DeviceHelper": [
        284
      ],
      "DeviceManager": [
        646
      ],
      "DeviceUpdatable": [
        641
      ],
      "EntityBase": [
        37
      ],
      "SignatureBase": [
        427
      ],
      "SignatureHelper": [
        494
      ]
    },
    "id": 647,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "/home/celio/iot-device-management/contracts/MerkleProof.sol",
        "file": "./MerkleProof.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 647,
        "sourceUnit": 797,
        "src": "25:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/celio/iot-device-management/contracts/ECRecovery.sol",
        "file": "./ECRecovery.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 647,
        "sourceUnit": 728,
        "src": "53:26:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Provides base functionalities for entities.",
        "fullyImplemented": true,
        "id": 37,
        "linearizedBaseContracts": [
          37
        ],
        "name": "EntityBase",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "EntityBase.Entity",
            "id": 6,
            "members": [
              {
                "constant": false,
                "id": 5,
                "name": "data",
                "nodeType": "VariableDeclaration",
                "scope": 6,
                "src": "335:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 4,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "335:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Entity",
            "nodeType": "StructDefinition",
            "scope": 37,
            "src": "222:131:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10,
            "name": "ownerToEntity",
            "nodeType": "VariableDeclaration",
            "scope": 37,
            "src": "410:48:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Entity_$6_storage_$",
              "typeString": "mapping(address => struct EntityBase.Entity)"
            },
            "typeName": {
              "id": 9,
              "keyType": {
                "id": 7,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "419:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "410:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Entity_$6_storage_$",
                "typeString": "mapping(address => struct EntityBase.Entity)"
              },
              "valueType": {
                "contractScope": null,
                "id": 8,
                "name": "Entity",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 6,
                "src": "430:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Entity_$6_storage_ptr",
                  "typeString": "struct EntityBase.Entity"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "@dev Fired on entity data update.",
            "id": 16,
            "name": "EntityDataUpdated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "531:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "531:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14,
                  "indexed": false,
                  "name": "newData",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "554:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "554:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "530:39:0"
            },
            "src": "507:63:0"
          },
          {
            "body": {
              "id": 35,
              "nodeType": "Block",
              "src": "714:107:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 21,
                          "name": "ownerToEntity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10,
                          "src": "724:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Entity_$6_storage_$",
                            "typeString": "mapping(address => struct EntityBase.Entity storage ref)"
                          }
                        },
                        "id": 24,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 22,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 868,
                            "src": "738:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 23,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "738:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "724:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entity_$6_storage",
                          "typeString": "struct EntityBase.Entity storage ref"
                        }
                      },
                      "id": 25,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "data",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5,
                      "src": "724:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 26,
                      "name": "_data",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "757:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "724:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 28,
                  "nodeType": "ExpressionStatement",
                  "src": "724:38:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 30,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "796:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 31,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "796:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 32,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "808:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29,
                      "name": "EntityDataUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16,
                      "src": "778:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 33,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "778:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34,
                  "nodeType": "EmitStatement",
                  "src": "773:41:0"
                }
              ]
            },
            "documentation": "@notice Update entity data.\n@param _data Entity data.",
            "id": 36,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateEntityData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 36,
                  "src": "686:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "685:21:0"
            },
            "returnParameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "714:0:0"
            },
            "scope": 37,
            "src": "660:161:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 647,
        "src": "143:680:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Provides base functionalities for devices.",
        "fullyImplemented": true,
        "id": 131,
        "linearizedBaseContracts": [
          131
        ],
        "name": "DeviceBase",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "DeviceBase.Device",
            "id": 46,
            "members": [
              {
                "constant": false,
                "id": 39,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 46,
                "src": "1022:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 38,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1022:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 41,
                "name": "identifier",
                "nodeType": "VariableDeclaration",
                "scope": 46,
                "src": "1630:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 40,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1630:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 43,
                "name": "metadataHash",
                "nodeType": "VariableDeclaration",
                "scope": 46,
                "src": "1945:20:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 42,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1945:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45,
                "name": "firmwareHash",
                "nodeType": "VariableDeclaration",
                "scope": 46,
                "src": "2250:20:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 44,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "2250:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Device",
            "nodeType": "StructDefinition",
            "scope": 131,
            "src": "951:1615:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 49,
            "name": "devices",
            "nodeType": "VariableDeclaration",
            "scope": 131,
            "src": "2721:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
              "typeString": "struct DeviceBase.Device[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 47,
                "name": "Device",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 46,
                "src": "2721:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Device_$46_storage_ptr",
                  "typeString": "struct DeviceBase.Device"
                }
              },
              "id": 48,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "2721:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage_ptr",
                "typeString": "struct DeviceBase.Device[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 53,
            "name": "ownerDeviceCount",
            "nodeType": "VariableDeclaration",
            "scope": 131,
            "src": "2812:49:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 52,
              "keyType": {
                "id": 50,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "2821:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "2812:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 51,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "2832:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "@dev Fired on creation of new device.",
            "id": 65,
            "name": "DeviceCreated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 64,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55,
                  "indexed": true,
                  "name": "deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "2934:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2934:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "2957:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2957:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59,
                  "indexed": false,
                  "name": "identifier",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "2980:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2980:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61,
                  "indexed": false,
                  "name": "metadataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "3000:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 60,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3000:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63,
                  "indexed": false,
                  "name": "firmwareHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "3022:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 62,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3022:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2933:110:0"
            },
            "src": "2914:130:0"
          },
          {
            "body": {
              "id": 81,
              "nodeType": "Block",
              "src": "3178:100:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 76,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 70,
                              "name": "devices",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49,
                              "src": "3196:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                                "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                              }
                            },
                            "id": 72,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 71,
                              "name": "_deviceId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67,
                              "src": "3204:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3196:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Device_$46_storage",
                              "typeString": "struct DeviceBase.Device storage ref"
                            }
                          },
                          "id": 73,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "owner",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 39,
                          "src": "3196:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 74,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 868,
                            "src": "3224:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 75,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3224:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "3196:38:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f6e6c7920666f7220646576696365206f776e6572",
                        "id": 77,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3236:23:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_d8ad1a9c023f2f7865aaab44a294ffd93a7c2360d9cdcaf7cddf830addfb9fc6",
                          "typeString": "literal_string \"Only for device owner\""
                        },
                        "value": "Only for device owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_d8ad1a9c023f2f7865aaab44a294ffd93a7c2360d9cdcaf7cddf830addfb9fc6",
                          "typeString": "literal_string \"Only for device owner\""
                        }
                      ],
                      "id": 69,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        871,
                        872
                      ],
                      "referencedDeclaration": 872,
                      "src": "3188:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 78,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3188:72:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79,
                  "nodeType": "ExpressionStatement",
                  "src": "3188:72:0"
                },
                {
                  "id": 80,
                  "nodeType": "PlaceholderStatement",
                  "src": "3270:1:0"
                }
              ]
            },
            "documentation": "@dev Modifier for ensuring that the message sender is owner of provided device ID.",
            "id": 82,
            "name": "onlyOwnerOf",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 68,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "3162:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3162:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3161:16:0"
            },
            "src": "3141:137:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 129,
              "nodeType": "Block",
              "src": "3820:316:0",
              "statements": [
                {
                  "assignments": [
                    94
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 94,
                      "name": "newDevice",
                      "nodeType": "VariableDeclaration",
                      "scope": 129,
                      "src": "3830:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Device_$46_memory_ptr",
                        "typeString": "struct DeviceBase.Device"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 93,
                        "name": "Device",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 46,
                        "src": "3830:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage_ptr",
                          "typeString": "struct DeviceBase.Device"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 102,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 96,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "3863:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3863:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 98,
                        "name": "_identifier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 84,
                        "src": "3875:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 99,
                        "name": "_metadataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "3888:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 100,
                        "name": "_firmwareHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 88,
                        "src": "3903:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 95,
                      "name": "Device",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46,
                      "src": "3856:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Device_$46_storage_ptr_$",
                        "typeString": "type(struct DeviceBase.Device storage pointer)"
                      }
                    },
                    "id": 101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3856:61:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Device_$46_memory",
                      "typeString": "struct DeviceBase.Device memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3830:87:0"
                },
                {
                  "assignments": [
                    104
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 104,
                      "name": "deviceId",
                      "nodeType": "VariableDeclaration",
                      "scope": 129,
                      "src": "3927:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 103,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3927:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 111,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 107,
                          "name": "newDevice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 94,
                          "src": "3956:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Device_$46_memory_ptr",
                            "typeString": "struct DeviceBase.Device memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Device_$46_memory_ptr",
                            "typeString": "struct DeviceBase.Device memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 105,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "3943:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3943:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Device_$46_storage_$returns$_t_uint256_$",
                          "typeString": "function (struct DeviceBase.Device storage ref) returns (uint256)"
                        }
                      },
                      "id": 108,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3943:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3969:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "3943:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3927:43:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "3980:30:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 112,
                        "name": "ownerDeviceCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53,
                        "src": "3980:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 115,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 113,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "3997:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3997:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3980:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 117,
                  "nodeType": "ExpressionStatement",
                  "src": "3980:30:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 119,
                        "name": "deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "4040:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 120,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "4050:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4050:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 122,
                        "name": "_identifier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 84,
                        "src": "4062:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 123,
                        "name": "_metadataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "4075:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 124,
                        "name": "_firmwareHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 88,
                        "src": "4090:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 118,
                      "name": "DeviceCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 65,
                      "src": "4026:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_bytes32_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (uint256,address,bytes32,bytes32,bytes32)"
                      }
                    },
                    "id": 125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4026:78:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 126,
                  "nodeType": "EmitStatement",
                  "src": "4021:83:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 127,
                    "name": "deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 104,
                    "src": "4121:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 92,
                  "id": 128,
                  "nodeType": "Return",
                  "src": "4114:15:0"
                }
              ]
            },
            "documentation": "@notice Creates and saves device into storage. Emits DeviceCreated. \n@param _identifier Unique device identifier, such as fingerprint of RSA/ECC public key or Ethereum address (recommended).\n@param _metadataHash Merkle root hash of metadata (recommended) or simple hash of concatenated metadata.\n@param _firmwareHash Hash of actual firmware hash.\n@return Created device ID.",
            "id": 130,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createDevice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 84,
                  "name": "_identifier",
                  "nodeType": "VariableDeclaration",
                  "scope": 130,
                  "src": "3731:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 83,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3731:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 86,
                  "name": "_metadataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 130,
                  "src": "3752:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 85,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3752:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 88,
                  "name": "_firmwareHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 130,
                  "src": "3775:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 87,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3775:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3730:67:0"
            },
            "returnParameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 130,
                  "src": "3814:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 90,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3814:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3813:6:0"
            },
            "scope": 131,
            "src": "3709:427:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 647,
        "src": "886:3252:0"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 132,
              "name": "DeviceBase",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 131,
              "src": "4227:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DeviceBase_$131",
                "typeString": "contract DeviceBase"
              }
            },
            "id": 133,
            "nodeType": "InheritanceSpecifier",
            "src": "4227:10:0"
          }
        ],
        "contractDependencies": [
          131
        ],
        "contractKind": "contract",
        "documentation": "@title Provides extra functionalities for devices.",
        "fullyImplemented": true,
        "id": 284,
        "linearizedBaseContracts": [
          284,
          131
        ],
        "name": "DeviceHelper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 189,
              "nodeType": "Block",
              "src": "4600:320:0",
              "statements": [
                {
                  "assignments": [
                    144
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 144,
                      "name": "deviceIds",
                      "nodeType": "VariableDeclaration",
                      "scope": 189,
                      "src": "4610:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 142,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4610:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 143,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "4610:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 152,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 148,
                          "name": "ownerDeviceCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53,
                          "src": "4647:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 150,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 149,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 135,
                          "src": "4664:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4647:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 147,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4636:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (uint256[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 145,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4640:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 146,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "4640:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      }
                    },
                    "id": 151,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4636:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4610:62:0"
                },
                {
                  "assignments": [
                    154
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 154,
                      "name": "counter",
                      "nodeType": "VariableDeclaration",
                      "scope": 189,
                      "src": "4682:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 153,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4682:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 156,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4697:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4682:16:0"
                },
                {
                  "body": {
                    "id": 185,
                    "nodeType": "Block",
                    "src": "4750:138:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 173,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 168,
                                "name": "devices",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 49,
                                "src": "4768:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                                  "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                                }
                              },
                              "id": 170,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 169,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 158,
                                "src": "4776:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4768:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Device_$46_storage",
                                "typeString": "struct DeviceBase.Device storage ref"
                              }
                            },
                            "id": 171,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 39,
                            "src": "4768:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 172,
                            "name": "_owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 135,
                            "src": "4788:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "4768:26:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 184,
                        "nodeType": "IfStatement",
                        "src": "4764:114:0",
                        "trueBody": {
                          "id": 183,
                          "nodeType": "Block",
                          "src": "4796:82:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 178,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 174,
                                    "name": "deviceIds",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 144,
                                    "src": "4814:9:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 176,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 175,
                                    "name": "counter",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 154,
                                    "src": "4824:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "4814:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 177,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 158,
                                  "src": "4835:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "4814:22:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 179,
                              "nodeType": "ExpressionStatement",
                              "src": "4814:22:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 181,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "4854:9:0",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 180,
                                  "name": "counter",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 154,
                                  "src": "4854:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 182,
                              "nodeType": "ExpressionStatement",
                              "src": "4854:9:0"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 164,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 161,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 158,
                      "src": "4725:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 162,
                        "name": "devices",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "4729:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                          "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                        }
                      },
                      "id": 163,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4729:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4725:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 186,
                  "initializationExpression": {
                    "assignments": [
                      158
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 158,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 186,
                        "src": "4713:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 157,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4713:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 160,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4722:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4713:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4745:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 165,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 158,
                        "src": "4745:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 167,
                    "nodeType": "ExpressionStatement",
                    "src": "4745:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "4708:180:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 187,
                    "name": "deviceIds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 144,
                    "src": "4904:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 140,
                  "id": 188,
                  "nodeType": "Return",
                  "src": "4897:16:0"
                }
              ]
            },
            "documentation": "@notice Gets all devices owned by specified address. \n@dev Use this function instead of filtering DeviceCreated event since devices could have been transferred between owners.\n@param _owner Owner address.\n@return Array of device IDs.",
            "id": 190,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDevicesByOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 135,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 190,
                  "src": "4548:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 134,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4548:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4547:16:0"
            },
            "returnParameters": {
              "id": 140,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 139,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 190,
                  "src": "4585:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 137,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "4585:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 138,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "4585:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4584:15:0"
            },
            "scope": 284,
            "src": "4521:399:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 213,
              "nodeType": "Block",
              "src": "5135:108:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 211,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 197,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "5152:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 199,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 198,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 192,
                          "src": "5160:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5152:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage",
                          "typeString": "struct DeviceBase.Device storage ref"
                        }
                      },
                      "id": 200,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 39,
                      "src": "5152:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 204,
                                      "name": "devices",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 49,
                                      "src": "5204:7:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                                        "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                                      }
                                    },
                                    "id": 206,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 205,
                                      "name": "_deviceId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 192,
                                      "src": "5212:9:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "5204:18:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Device_$46_storage",
                                      "typeString": "struct DeviceBase.Device storage ref"
                                    }
                                  },
                                  "id": 207,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "identifier",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 41,
                                  "src": "5204:29:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "id": 203,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5196:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": "uint256"
                              },
                              "id": 208,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5196:38:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 202,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5188:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint160_$",
                              "typeString": "type(uint160)"
                            },
                            "typeName": "uint160"
                          },
                          "id": 209,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5188:47:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint160",
                            "typeString": "uint160"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint160",
                            "typeString": "uint160"
                          }
                        ],
                        "id": 201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5180:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 210,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5180:56:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "5152:84:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 196,
                  "id": 212,
                  "nodeType": "Return",
                  "src": "5145:91:0"
                }
              ]
            },
            "documentation": "@notice Checks if device is also an entity. \n@param _deviceId ID of a  device.\n@return Boolean status.",
            "id": 214,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isDeviceAnEntity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 192,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 214,
                  "src": "5092:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 191,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5092:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5091:16:0"
            },
            "returnParameters": {
              "id": 196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 195,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 214,
                  "src": "5129:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 194,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5129:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5128:6:0"
            },
            "scope": 284,
            "src": "5066:177:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 236,
              "nodeType": "Block",
              "src": "5806:95:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 228,
                        "name": "_proof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 219,
                        "src": "5847:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 229,
                            "name": "devices",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49,
                            "src": "5855:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                              "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                            }
                          },
                          "id": 231,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 230,
                            "name": "_deviceId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 216,
                            "src": "5863:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5855:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Device_$46_storage",
                            "typeString": "struct DeviceBase.Device storage ref"
                          }
                        },
                        "id": 232,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "metadataHash",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 43,
                        "src": "5855:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 233,
                        "name": "_leaf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 221,
                        "src": "5888:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 226,
                        "name": "MerkleProof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 796,
                        "src": "5823:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_MerkleProof_$796_$",
                          "typeString": "type(library MerkleProof)"
                        }
                      },
                      "id": 227,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "verifyProof",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 795,
                      "src": "5823:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_bytes32_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (bytes32[] memory,bytes32,bytes32) pure returns (bool)"
                      }
                    },
                    "id": 234,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5823:71:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 225,
                  "id": 235,
                  "nodeType": "Return",
                  "src": "5816:78:0"
                }
              ]
            },
            "documentation": "@notice Checks if provided leaf is a member of metadata contained in Merkle tree. \nAssumes that each pair of leaves and each pair of pre-images are sorted.\n@param _deviceId ID of a device containing metadata hash.\n@param _proof Merkle proof containing sibling hashes on the branch from the leaf to the root of the Merkle tree.\n@param _leaf Leaf of Merkle tree.\n@return Boolean status.",
            "id": 237,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidMetadataMember",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 216,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 237,
                  "src": "5723:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 215,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5723:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 219,
                  "name": "_proof",
                  "nodeType": "VariableDeclaration",
                  "scope": 237,
                  "src": "5739:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 217,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5739:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 218,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5739:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 221,
                  "name": "_leaf",
                  "nodeType": "VariableDeclaration",
                  "scope": 237,
                  "src": "5764:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 220,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5764:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5722:56:0"
            },
            "returnParameters": {
              "id": 225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 224,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 237,
                  "src": "5800:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 223,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5800:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5799:6:0"
            },
            "scope": 284,
            "src": "5692:209:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 253,
              "nodeType": "Block",
              "src": "6271:72:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 246,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "6288:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 248,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 247,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 239,
                          "src": "6296:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "6288:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage",
                          "typeString": "struct DeviceBase.Device storage ref"
                        }
                      },
                      "id": 249,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "firmwareHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 45,
                      "src": "6288:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 250,
                      "name": "_firmwareHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 241,
                      "src": "6323:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "6288:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 245,
                  "id": 252,
                  "nodeType": "Return",
                  "src": "6281:55:0"
                }
              ]
            },
            "documentation": "@notice Checks if provided firmware hash is equal to firmware hash device property. \n@param _deviceId ID of a device containing firmware hash.\n@param _firmwareHash Firmware hash (not the actual hash).\n@return Boolean status.",
            "id": 254,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidFirmwareHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 239,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 254,
                  "src": "6205:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 238,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6205:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 241,
                  "name": "_firmwareHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 254,
                  "src": "6221:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 240,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6221:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6204:39:0"
            },
            "returnParameters": {
              "id": 245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 244,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 254,
                  "src": "6265:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 243,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6265:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6264:6:0"
            },
            "scope": 284,
            "src": "6176:167:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 282,
              "nodeType": "Block",
              "src": "6849:128:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 280,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 267,
                          "name": "_messageHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 258,
                          "src": "6885:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 268,
                          "name": "_signature",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 260,
                          "src": "6899:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 265,
                          "name": "ECRecovery",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 727,
                          "src": "6866:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ECRecovery_$727_$",
                            "typeString": "type(library ECRecovery)"
                          }
                        },
                        "id": 266,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "recover",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 710,
                        "src": "6866:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$",
                          "typeString": "function (bytes32,bytes memory) pure returns (address)"
                        }
                      },
                      "id": 269,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6866:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 273,
                                      "name": "devices",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 49,
                                      "src": "6938:7:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                                        "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                                      }
                                    },
                                    "id": 275,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 274,
                                      "name": "_deviceId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 256,
                                      "src": "6946:9:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "6938:18:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Device_$46_storage",
                                      "typeString": "struct DeviceBase.Device storage ref"
                                    }
                                  },
                                  "id": 276,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "identifier",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 41,
                                  "src": "6938:29:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "id": 272,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6930:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": "uint256"
                              },
                              "id": 277,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6930:38:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 271,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6922:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint160_$",
                              "typeString": "type(uint160)"
                            },
                            "typeName": "uint160"
                          },
                          "id": 278,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6922:47:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint160",
                            "typeString": "uint160"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint160",
                            "typeString": "uint160"
                          }
                        ],
                        "id": 270,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6914:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 279,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6914:56:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "6866:104:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 264,
                  "id": 281,
                  "nodeType": "Return",
                  "src": "6859:111:0"
                }
              ]
            },
            "documentation": "@notice Validate authenticity of message signed by Etherium private key.\nOn-chain validation is available only for Ethereum signed messages.\n@param _deviceId ID of a device that signed the message.\n@param _messageHash Hash of sent message.\n@param _signature Signature generated using web3.eth.sign().\n@return Boolean status.",
            "id": 283,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidEthMessage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 256,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 283,
                  "src": "6759:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 255,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6759:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 258,
                  "name": "_messageHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 283,
                  "src": "6775:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 257,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6775:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 260,
                  "name": "_signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 283,
                  "src": "6797:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 259,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6797:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6758:63:0"
            },
            "returnParameters": {
              "id": 264,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 263,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 283,
                  "src": "6843:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 262,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6843:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6842:6:0"
            },
            "scope": 284,
            "src": "6732:245:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 647,
        "src": "4202:2777:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Provides base functionalities for signatures.",
        "fullyImplemented": true,
        "id": 427,
        "linearizedBaseContracts": [
          427
        ],
        "name": "SignatureBase",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "SignatureBase.Signature",
            "id": 293,
            "members": [
              {
                "constant": false,
                "id": 286,
                "name": "signer",
                "nodeType": "VariableDeclaration",
                "scope": 293,
                "src": "7186:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 285,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "7186:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 288,
                "name": "deviceId",
                "nodeType": "VariableDeclaration",
                "scope": 293,
                "src": "7244:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 287,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "7244:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 290,
                "name": "expiryTime",
                "nodeType": "VariableDeclaration",
                "scope": 293,
                "src": "7343:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 289,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "7343:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 292,
                "name": "revoked",
                "nodeType": "VariableDeclaration",
                "scope": 293,
                "src": "7437:12:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 291,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "7437:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Signature",
            "nodeType": "StructDefinition",
            "scope": 427,
            "src": "7116:340:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 296,
            "name": "signatures",
            "nodeType": "VariableDeclaration",
            "scope": 427,
            "src": "7613:29:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
              "typeString": "struct SignatureBase.Signature[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 294,
                "name": "Signature",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 293,
                "src": "7613:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                  "typeString": "struct SignatureBase.Signature"
                }
              },
              "id": 295,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "7613:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage_ptr",
                "typeString": "struct SignatureBase.Signature[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 300,
            "name": "deviceSignatureCount",
            "nodeType": "VariableDeclaration",
            "scope": 427,
            "src": "7714:50:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 299,
              "keyType": {
                "id": 297,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "7723:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "7714:22:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 298,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "7731:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "@dev Fired when an address signs a device.",
            "id": 310,
            "name": "DeviceSigned",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 309,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 302,
                  "indexed": true,
                  "name": "signatureId",
                  "nodeType": "VariableDeclaration",
                  "scope": 310,
                  "src": "7845:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 301,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7845:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 304,
                  "indexed": true,
                  "name": "deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 310,
                  "src": "7871:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 303,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7871:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 306,
                  "indexed": true,
                  "name": "signer",
                  "nodeType": "VariableDeclaration",
                  "scope": 310,
                  "src": "7894:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 305,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7894:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 308,
                  "indexed": false,
                  "name": "expiryTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 310,
                  "src": "7918:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 307,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7918:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7844:90:0"
            },
            "src": "7826:109:0"
          },
          {
            "anonymous": false,
            "documentation": "@dev Fired when signature is revoked.",
            "id": 316,
            "name": "SignatureRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 312,
                  "indexed": true,
                  "name": "signatureId",
                  "nodeType": "VariableDeclaration",
                  "scope": 316,
                  "src": "8010:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 311,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8010:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 314,
                  "indexed": true,
                  "name": "deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 316,
                  "src": "8036:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 313,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8036:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8009:49:0"
            },
            "src": "7987:72:0"
          },
          {
            "body": {
              "id": 330,
              "nodeType": "Block",
              "src": "8179:95:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 325,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 321,
                            "name": "deviceSignatureCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 300,
                            "src": "8197:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 323,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 322,
                            "name": "_deviceId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 318,
                            "src": "8218:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "8197:31:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 324,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8232:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "8197:36:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4d757374206e6f74206265207369676e6564",
                        "id": 326,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8235:20:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_73fc55a17986bff1b99557baa412a11f76b8a2a98ee4458c73a848ffe7b97e84",
                          "typeString": "literal_string \"Must not be signed\""
                        },
                        "value": "Must not be signed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_73fc55a17986bff1b99557baa412a11f76b8a2a98ee4458c73a848ffe7b97e84",
                          "typeString": "literal_string \"Must not be signed\""
                        }
                      ],
                      "id": 320,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        871,
                        872
                      ],
                      "referencedDeclaration": 872,
                      "src": "8189:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 327,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8189:67:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 328,
                  "nodeType": "ExpressionStatement",
                  "src": "8189:67:0"
                },
                {
                  "id": 329,
                  "nodeType": "PlaceholderStatement",
                  "src": "8266:1:0"
                }
              ]
            },
            "documentation": "@dev Modifier for ensuring that the device hasn't been signed already.",
            "id": 331,
            "name": "notSigned",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 319,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 318,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 331,
                  "src": "8163:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 317,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8163:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8162:16:0"
            },
            "src": "8144:130:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 374,
              "nodeType": "Block",
              "src": "8594:305:0",
              "statements": [
                {
                  "assignments": [
                    341
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 341,
                      "name": "signature",
                      "nodeType": "VariableDeclaration",
                      "scope": 374,
                      "src": "8604:26:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Signature_$293_memory_ptr",
                        "typeString": "struct SignatureBase.Signature"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 340,
                        "name": "Signature",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 293,
                        "src": "8604:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                          "typeString": "struct SignatureBase.Signature"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 349,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 343,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "8643:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 344,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8643:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 345,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 333,
                        "src": "8655:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 346,
                        "name": "_expiryTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 335,
                        "src": "8666:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 347,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8679:5:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 342,
                      "name": "Signature",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 293,
                      "src": "8633:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Signature_$293_storage_ptr_$",
                        "typeString": "type(struct SignatureBase.Signature storage pointer)"
                      }
                    },
                    "id": 348,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8633:52:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Signature_$293_memory",
                      "typeString": "struct SignatureBase.Signature memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8604:81:0"
                },
                {
                  "assignments": [
                    351
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 351,
                      "name": "signatureId",
                      "nodeType": "VariableDeclaration",
                      "scope": 374,
                      "src": "8695:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 350,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "8695:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 358,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 354,
                          "name": "signature",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 341,
                          "src": "8730:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Signature_$293_memory_ptr",
                            "typeString": "struct SignatureBase.Signature memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Signature_$293_memory_ptr",
                            "typeString": "struct SignatureBase.Signature memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 352,
                          "name": "signatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 296,
                          "src": "8714:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                            "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                          }
                        },
                        "id": 353,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8714:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Signature_$293_storage_$returns$_t_uint256_$",
                          "typeString": "function (struct SignatureBase.Signature storage ref) returns (uint256)"
                        }
                      },
                      "id": 355,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8714:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 356,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8743:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "8714:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8695:49:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 362,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "8754:33:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 359,
                        "name": "deviceSignatureCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 300,
                        "src": "8754:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 361,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 360,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 333,
                        "src": "8775:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "8754:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 363,
                  "nodeType": "ExpressionStatement",
                  "src": "8754:33:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 365,
                        "name": "signatureId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 351,
                        "src": "8816:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 366,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 333,
                        "src": "8829:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 367,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "8840:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 368,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8840:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 369,
                        "name": "_expiryTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 335,
                        "src": "8852:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 364,
                      "name": "DeviceSigned",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 310,
                      "src": "8803:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,address,uint256)"
                      }
                    },
                    "id": 370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8803:61:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 371,
                  "nodeType": "EmitStatement",
                  "src": "8798:66:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 372,
                    "name": "signatureId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 351,
                    "src": "8881:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 339,
                  "id": 373,
                  "nodeType": "Return",
                  "src": "8874:18:0"
                }
              ]
            },
            "documentation": "@notice Signs a device and signature into storage. Emits DeviceSigned. \n@param _deviceId ID of to be signed device.\n@param _expiryTime Expiry time in Unix seconds.\n@return Created signature ID.",
            "id": 375,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "signDevice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 333,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 375,
                  "src": "8538:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 332,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8538:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 335,
                  "name": "_expiryTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 375,
                  "src": "8554:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 334,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8554:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8537:34:0"
            },
            "returnParameters": {
              "id": 339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 338,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 375,
                  "src": "8588:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 337,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8588:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8587:6:0"
            },
            "scope": 427,
            "src": "8518:381:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 425,
              "nodeType": "Block",
              "src": "9091:424:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 387,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 381,
                              "name": "signatures",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 296,
                              "src": "9109:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                                "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                              }
                            },
                            "id": 383,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 382,
                              "name": "_signatureId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 377,
                              "src": "9120:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "9109:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Signature_$293_storage",
                              "typeString": "struct SignatureBase.Signature storage ref"
                            }
                          },
                          "id": 384,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "signer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 286,
                          "src": "9109:31:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 385,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 868,
                            "src": "9144:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 386,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "9144:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "9109:45:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f6e6c7920666f722063726561746f72206f6620746865207369676e6174757265",
                        "id": 388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9156:35:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3aaaa87a777306387460c3ec7c037c21271b7d2e0f37fa494722618006dc0cdb",
                          "typeString": "literal_string \"Only for creator of the signature\""
                        },
                        "value": "Only for creator of the signature"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3aaaa87a777306387460c3ec7c037c21271b7d2e0f37fa494722618006dc0cdb",
                          "typeString": "literal_string \"Only for creator of the signature\""
                        }
                      ],
                      "id": 380,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        871,
                        872
                      ],
                      "referencedDeclaration": 872,
                      "src": "9101:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 389,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9101:91:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 390,
                  "nodeType": "ExpressionStatement",
                  "src": "9101:91:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 392,
                              "name": "signatures",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 296,
                              "src": "9210:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                                "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                              }
                            },
                            "id": 394,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 393,
                              "name": "_signatureId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 377,
                              "src": "9221:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "9210:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Signature_$293_storage",
                              "typeString": "struct SignatureBase.Signature storage ref"
                            }
                          },
                          "id": 395,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "revoked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 292,
                          "src": "9210:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9246:5:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "9210:41:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5369676e6174757265206d7573746e2774206265207265766f6b656420616c7265616479",
                        "id": 398,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9253:38:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e22c32ac6c26626aeef51dc165bb8bcbe4c9684fc645b2cda8fe482fe7423f3d",
                          "typeString": "literal_string \"Signature mustn't be revoked already\""
                        },
                        "value": "Signature mustn't be revoked already"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e22c32ac6c26626aeef51dc165bb8bcbe4c9684fc645b2cda8fe482fe7423f3d",
                          "typeString": "literal_string \"Signature mustn't be revoked already\""
                        }
                      ],
                      "id": 391,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        871,
                        872
                      ],
                      "referencedDeclaration": 872,
                      "src": "9202:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 399,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9202:90:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 400,
                  "nodeType": "ExpressionStatement",
                  "src": "9202:90:0"
                },
                {
                  "assignments": [
                    402
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 402,
                      "name": "signature",
                      "nodeType": "VariableDeclaration",
                      "scope": 425,
                      "src": "9302:27:0",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                        "typeString": "struct SignatureBase.Signature"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 401,
                        "name": "Signature",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 293,
                        "src": "9302:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                          "typeString": "struct SignatureBase.Signature"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 406,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 403,
                      "name": "signatures",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 296,
                      "src": "9332:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                        "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                      }
                    },
                    "id": 405,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 404,
                      "name": "_signatureId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 377,
                      "src": "9343:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "9332:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Signature_$293_storage",
                      "typeString": "struct SignatureBase.Signature storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9302:54:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 411,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 407,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 402,
                        "src": "9366:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                          "typeString": "struct SignatureBase.Signature storage pointer"
                        }
                      },
                      "id": 409,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "revoked",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 292,
                      "src": "9366:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 410,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9386:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "9366:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 412,
                  "nodeType": "ExpressionStatement",
                  "src": "9366:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 417,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "9400:42:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 413,
                        "name": "deviceSignatureCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 300,
                        "src": "9400:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 416,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 414,
                          "name": "signature",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 402,
                          "src": "9421:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                            "typeString": "struct SignatureBase.Signature storage pointer"
                          }
                        },
                        "id": 415,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "deviceId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 288,
                        "src": "9421:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "9400:40:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 418,
                  "nodeType": "ExpressionStatement",
                  "src": "9400:42:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 420,
                        "name": "_signatureId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 377,
                        "src": "9475:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 421,
                          "name": "signature",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 402,
                          "src": "9489:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Signature_$293_storage_ptr",
                            "typeString": "struct SignatureBase.Signature storage pointer"
                          }
                        },
                        "id": 422,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "deviceId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 288,
                        "src": "9489:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 419,
                      "name": "SignatureRevoked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 316,
                      "src": "9458:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 423,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9458:50:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 424,
                  "nodeType": "EmitStatement",
                  "src": "9453:55:0"
                }
              ]
            },
            "documentation": "@notice Revokes a signature. Emits SignatureRevoked. \n@param _signatureId ID of to be revoked signature.",
            "id": 426,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "revokeSignature",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 378,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 377,
                  "name": "_signatureId",
                  "nodeType": "VariableDeclaration",
                  "scope": 426,
                  "src": "9065:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 376,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "9065:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9064:19:0"
            },
            "returnParameters": {
              "id": 379,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9091:0:0"
            },
            "scope": 427,
            "src": "9040:475:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 647,
        "src": "7045:2472:0"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 428,
              "name": "SignatureBase",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 427,
              "src": "9612:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SignatureBase_$427",
                "typeString": "contract SignatureBase"
              }
            },
            "id": 429,
            "nodeType": "InheritanceSpecifier",
            "src": "9612:13:0"
          }
        ],
        "contractDependencies": [
          427
        ],
        "contractKind": "contract",
        "documentation": "@title Provides extra functionalities for signatures.",
        "fullyImplemented": true,
        "id": 494,
        "linearizedBaseContracts": [
          494,
          427
        ],
        "name": "SignatureHelper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 492,
              "nodeType": "Block",
              "src": "9986:382:0",
              "statements": [
                {
                  "assignments": [
                    440
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 440,
                      "name": "signatureIds",
                      "nodeType": "VariableDeclaration",
                      "scope": 492,
                      "src": "9996:26:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 438,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "9996:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 439,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "9996:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 448,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 444,
                          "name": "deviceSignatureCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 300,
                          "src": "10036:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 446,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 445,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "10057:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "10036:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 443,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "10025:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (uint256[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 441,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "10029:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 442,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "10029:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      }
                    },
                    "id": 447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10025:43:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9996:72:0"
                },
                {
                  "assignments": [
                    450
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 450,
                      "name": "counter",
                      "nodeType": "VariableDeclaration",
                      "scope": 492,
                      "src": "10078:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 449,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "10078:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 452,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "10093:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10078:16:0"
                },
                {
                  "body": {
                    "id": 488,
                    "nodeType": "Block",
                    "src": "10149:184:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 476,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 469,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 464,
                                  "name": "signatures",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 296,
                                  "src": "10167:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                                    "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                                  }
                                },
                                "id": 466,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 465,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 454,
                                  "src": "10178:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "10167:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Signature_$293_storage",
                                  "typeString": "struct SignatureBase.Signature storage ref"
                                }
                              },
                              "id": 467,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "deviceId",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 288,
                              "src": "10167:22:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 468,
                              "name": "_deviceId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 431,
                              "src": "10193:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "10167:35:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 475,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 470,
                                  "name": "signatures",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 296,
                                  "src": "10206:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                                    "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                                  }
                                },
                                "id": 472,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 471,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 454,
                                  "src": "10217:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "10206:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Signature_$293_storage",
                                  "typeString": "struct SignatureBase.Signature storage ref"
                                }
                              },
                              "id": 473,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "revoked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 292,
                              "src": "10206:21:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "66616c7365",
                              "id": 474,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10231:5:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            "src": "10206:30:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "10167:69:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 487,
                        "nodeType": "IfStatement",
                        "src": "10163:160:0",
                        "trueBody": {
                          "id": 486,
                          "nodeType": "Block",
                          "src": "10238:85:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 481,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 477,
                                    "name": "signatureIds",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 440,
                                    "src": "10256:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 479,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 478,
                                    "name": "counter",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 450,
                                    "src": "10269:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "10256:21:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 480,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 454,
                                  "src": "10280:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "10256:25:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 482,
                              "nodeType": "ExpressionStatement",
                              "src": "10256:25:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 484,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "10299:9:0",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 483,
                                  "name": "counter",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 450,
                                  "src": "10299:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 485,
                              "nodeType": "ExpressionStatement",
                              "src": "10299:9:0"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 460,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 457,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 454,
                      "src": "10121:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 458,
                        "name": "signatures",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 296,
                        "src": "10125:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Signature_$293_storage_$dyn_storage",
                          "typeString": "struct SignatureBase.Signature storage ref[] storage ref"
                        }
                      },
                      "id": 459,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "10125:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10121:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 489,
                  "initializationExpression": {
                    "assignments": [
                      454
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 454,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 489,
                        "src": "10109:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 453,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "10109:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 456,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 455,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10118:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "10109:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 462,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "10144:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 461,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 454,
                        "src": "10144:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 463,
                    "nodeType": "ExpressionStatement",
                    "src": "10144:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "10104:229:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 490,
                    "name": "signatureIds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 440,
                    "src": "10349:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 436,
                  "id": 491,
                  "nodeType": "Return",
                  "src": "10342:19:0"
                }
              ]
            },
            "documentation": "@notice Gets all signatures for specific device. \n@dev Use this function instead of filtering DeviceSigned event since signatures could have been revoked.\n@param _deviceId ID of a device.\n@return Array of signature IDs.",
            "id": 493,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getActiveSignaturesForDevice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 431,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 493,
                  "src": "9934:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 430,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "9934:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9933:16:0"
            },
            "returnParameters": {
              "id": 436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 435,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 493,
                  "src": "9971:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 433,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "9971:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 434,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "9971:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9970:15:0"
            },
            "scope": 494,
            "src": "9896:472:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 647,
        "src": "9584:786:0"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 495,
              "name": "DeviceHelper",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 284,
              "src": "10496:12:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DeviceHelper_$284",
                "typeString": "contract DeviceHelper"
              }
            },
            "id": 496,
            "nodeType": "InheritanceSpecifier",
            "src": "10496:12:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 497,
              "name": "SignatureHelper",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 494,
              "src": "10510:15:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SignatureHelper_$494",
                "typeString": "contract SignatureHelper"
              }
            },
            "id": 498,
            "nodeType": "InheritanceSpecifier",
            "src": "10510:15:0"
          }
        ],
        "contractDependencies": [
          284,
          131,
          427,
          494
        ],
        "contractKind": "contract",
        "documentation": "@title Enriches devices giving them option to be updated only if not signed already.",
        "fullyImplemented": true,
        "id": 641,
        "linearizedBaseContracts": [
          641,
          494,
          427,
          284,
          131
        ],
        "name": "DeviceUpdatable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": "@dev Fired on device ownership transfer, keeps track of historical device owners.",
            "id": 506,
            "name": "DeviceTransfered",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 505,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 500,
                  "indexed": true,
                  "name": "deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 506,
                  "src": "10645:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 499,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "10645:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 502,
                  "indexed": false,
                  "name": "oldOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 506,
                  "src": "10668:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 501,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10668:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 504,
                  "indexed": false,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 506,
                  "src": "10686:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 503,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10686:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "10644:59:0"
            },
            "src": "10622:82:0"
          },
          {
            "anonymous": false,
            "documentation": "@dev Fired on device property update, keeps track of historical property values.",
            "id": 514,
            "name": "DevicePropertyUpdated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 508,
                  "indexed": true,
                  "name": "deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 514,
                  "src": "10831:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 507,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "10831:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 510,
                  "indexed": true,
                  "name": "property",
                  "nodeType": "VariableDeclaration",
                  "scope": 514,
                  "src": "10854:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 509,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10854:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 512,
                  "indexed": false,
                  "name": "newValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 514,
                  "src": "10880:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 511,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10880:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "10830:67:0"
            },
            "src": "10803:95:0"
          },
          {
            "body": {
              "id": 558,
              "nodeType": "Block",
              "src": "11222:239:0",
              "statements": [
                {
                  "assignments": [
                    528
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 528,
                      "name": "currentOwner",
                      "nodeType": "VariableDeclaration",
                      "scope": 558,
                      "src": "11232:20:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 527,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "11232:7:0",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 533,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 529,
                        "name": "devices",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "11255:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                          "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                        }
                      },
                      "id": 531,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 530,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 516,
                        "src": "11263:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "11255:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Device_$46_storage",
                        "typeString": "struct DeviceBase.Device storage ref"
                      }
                    },
                    "id": 532,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "owner",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 39,
                    "src": "11255:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11232:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 539,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 534,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "11289:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 536,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 535,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 516,
                          "src": "11297:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "11289:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage",
                          "typeString": "struct DeviceBase.Device storage ref"
                        }
                      },
                      "id": 537,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 39,
                      "src": "11289:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 538,
                      "name": "_to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 518,
                      "src": "11316:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11289:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 540,
                  "nodeType": "ExpressionStatement",
                  "src": "11289:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "11329:30:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 541,
                        "name": "ownerDeviceCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53,
                        "src": "11329:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 544,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 542,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "11346:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 543,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "11346:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "11329:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 546,
                  "nodeType": "ExpressionStatement",
                  "src": "11329:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 550,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "11369:23:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 547,
                        "name": "ownerDeviceCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53,
                        "src": "11369:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 549,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 548,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 518,
                        "src": "11386:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "11369:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 551,
                  "nodeType": "ExpressionStatement",
                  "src": "11369:23:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 553,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 516,
                        "src": "11425:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 554,
                        "name": "currentOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 528,
                        "src": "11436:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 555,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 518,
                        "src": "11450:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 552,
                      "name": "DeviceTransfered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 506,
                      "src": "11408:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address,address)"
                      }
                    },
                    "id": 556,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11408:46:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 557,
                  "nodeType": "EmitStatement",
                  "src": "11403:51:0"
                }
              ]
            },
            "documentation": "@notice Transfer device ownership from one external account to another. Emits DeviceTransfered.\n@param _deviceId ID of to be transfered device.\n@param _to Address of new owner.",
            "id": 559,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 521,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 516,
                    "src": "11190:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 522,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 520,
                  "name": "onlyOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 82,
                  "src": "11178:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "11178:22:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 524,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 516,
                    "src": "11211:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 525,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 523,
                  "name": "notSigned",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 331,
                  "src": "11201:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "11201:20:0"
              }
            ],
            "name": "transferDevice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 516,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 559,
                  "src": "11142:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 515,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "11142:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 518,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 559,
                  "src": "11158:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 517,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11158:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "11141:29:0"
            },
            "returnParameters": {
              "id": 526,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11222:0:0"
            },
            "scope": 641,
            "src": "11118:343:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 585,
              "nodeType": "Block",
              "src": "11765:141:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 572,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "11775:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 574,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 573,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 561,
                          "src": "11783:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "11775:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage",
                          "typeString": "struct DeviceBase.Device storage ref"
                        }
                      },
                      "id": 575,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "identifier",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 41,
                      "src": "11775:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 576,
                      "name": "_newIdentifier",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 563,
                      "src": "11807:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "11775:46:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 578,
                  "nodeType": "ExpressionStatement",
                  "src": "11775:46:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 580,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 561,
                        "src": "11859:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6964656e746966696572",
                        "id": 581,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11870:12:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c9c8fb0ee362b7a8868ca48cc94ee58e323adab92aeaba9c12b8aa7dca5fe466",
                          "typeString": "literal_string \"identifier\""
                        },
                        "value": "identifier"
                      },
                      {
                        "argumentTypes": null,
                        "id": 582,
                        "name": "_newIdentifier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 563,
                        "src": "11884:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c9c8fb0ee362b7a8868ca48cc94ee58e323adab92aeaba9c12b8aa7dca5fe466",
                          "typeString": "literal_string \"identifier\""
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 579,
                      "name": "DevicePropertyUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 514,
                      "src": "11837:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (uint256,bytes32,bytes32)"
                      }
                    },
                    "id": 583,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11837:62:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 584,
                  "nodeType": "EmitStatement",
                  "src": "11832:67:0"
                }
              ]
            },
            "documentation": "@notice Update device with new identifier. Emits DevicePropertyUpdated.\n@param _deviceId ID of a device.\n@param _newIdentifier New identifier.",
            "id": 586,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 566,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 561,
                    "src": "11733:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 567,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 565,
                  "name": "onlyOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 82,
                  "src": "11721:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "11721:22:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 569,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 561,
                    "src": "11754:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 570,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 568,
                  "name": "notSigned",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 331,
                  "src": "11744:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "11744:20:0"
              }
            ],
            "name": "updateIdentifier",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 561,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 586,
                  "src": "11674:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 560,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "11674:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 563,
                  "name": "_newIdentifier",
                  "nodeType": "VariableDeclaration",
                  "scope": 586,
                  "src": "11690:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 562,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "11690:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "11673:40:0"
            },
            "returnParameters": {
              "id": 571,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11765:0:0"
            },
            "scope": 641,
            "src": "11648:258:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 612,
              "nodeType": "Block",
              "src": "12221:145:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 599,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "12231:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 601,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 600,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 588,
                          "src": "12239:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "12231:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage",
                          "typeString": "struct DeviceBase.Device storage ref"
                        }
                      },
                      "id": 602,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "metadataHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 43,
                      "src": "12231:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 603,
                      "name": "_newMetadataHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 590,
                      "src": "12265:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "12231:50:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 605,
                  "nodeType": "ExpressionStatement",
                  "src": "12231:50:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 607,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 588,
                        "src": "12319:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6d65746164617461",
                        "id": 608,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12330:10:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7a9d3a032b8ff274f09714b56ba8e5ed776ec9638ca303069bc3a3267bb22f65",
                          "typeString": "literal_string \"metadata\""
                        },
                        "value": "metadata"
                      },
                      {
                        "argumentTypes": null,
                        "id": 609,
                        "name": "_newMetadataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 590,
                        "src": "12342:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_7a9d3a032b8ff274f09714b56ba8e5ed776ec9638ca303069bc3a3267bb22f65",
                          "typeString": "literal_string \"metadata\""
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 606,
                      "name": "DevicePropertyUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 514,
                      "src": "12297:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (uint256,bytes32,bytes32)"
                      }
                    },
                    "id": 610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12297:62:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 611,
                  "nodeType": "EmitStatement",
                  "src": "12292:67:0"
                }
              ]
            },
            "documentation": "@notice Update device with new metadata hash. Emits DevicePropertyUpdated.\n@param _deviceId ID of a device.\n@param _newMetadataHash New metadata hash.",
            "id": 613,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 593,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 588,
                    "src": "12189:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 594,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 592,
                  "name": "onlyOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 82,
                  "src": "12177:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "12177:22:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 596,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 588,
                    "src": "12210:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 597,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 595,
                  "name": "notSigned",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 331,
                  "src": "12200:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "12200:20:0"
              }
            ],
            "name": "updateMetadataHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 588,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 613,
                  "src": "12128:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 587,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "12128:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 590,
                  "name": "_newMetadataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 613,
                  "src": "12144:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 589,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12144:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "12127:42:0"
            },
            "returnParameters": {
              "id": 598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12221:0:0"
            },
            "scope": 641,
            "src": "12100:266:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 639,
              "nodeType": "Block",
              "src": "12681:145:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 631,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 626,
                          "name": "devices",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49,
                          "src": "12691:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Device_$46_storage_$dyn_storage",
                            "typeString": "struct DeviceBase.Device storage ref[] storage ref"
                          }
                        },
                        "id": 628,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 627,
                          "name": "_deviceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 615,
                          "src": "12699:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "12691:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Device_$46_storage",
                          "typeString": "struct DeviceBase.Device storage ref"
                        }
                      },
                      "id": 629,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "firmwareHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 45,
                      "src": "12691:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 630,
                      "name": "_newFirmwareHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 617,
                      "src": "12725:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "12691:50:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 632,
                  "nodeType": "ExpressionStatement",
                  "src": "12691:50:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 634,
                        "name": "_deviceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 615,
                        "src": "12779:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6669726d77617265",
                        "id": 635,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12790:10:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_99ae24b5e16982fa6bd82ac48369a10e6c7145bd48234d69ccfd0f110eb2e630",
                          "typeString": "literal_string \"firmware\""
                        },
                        "value": "firmware"
                      },
                      {
                        "argumentTypes": null,
                        "id": 636,
                        "name": "_newFirmwareHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 617,
                        "src": "12802:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_99ae24b5e16982fa6bd82ac48369a10e6c7145bd48234d69ccfd0f110eb2e630",
                          "typeString": "literal_string \"firmware\""
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 633,
                      "name": "DevicePropertyUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 514,
                      "src": "12757:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (uint256,bytes32,bytes32)"
                      }
                    },
                    "id": 637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12757:62:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 638,
                  "nodeType": "EmitStatement",
                  "src": "12752:67:0"
                }
              ]
            },
            "documentation": "@notice Update device with new firmware hash. Emits DevicePropertyUpdated.\n@param _deviceId ID of a device.\n@param _newFirmwareHash New firmware hash.",
            "id": 640,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 620,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 615,
                    "src": "12649:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 621,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 619,
                  "name": "onlyOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 82,
                  "src": "12637:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "12637:22:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 623,
                    "name": "_deviceId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 615,
                    "src": "12670:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 624,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 622,
                  "name": "notSigned",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 331,
                  "src": "12660:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "12660:20:0"
              }
            ],
            "name": "updateFirmwareHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 618,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 615,
                  "name": "_deviceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 640,
                  "src": "12588:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 614,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "12588:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 617,
                  "name": "_newFirmwareHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 640,
                  "src": "12604:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 616,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12604:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "12587:42:0"
            },
            "returnParameters": {
              "id": 625,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12681:0:0"
            },
            "scope": 641,
            "src": "12560:266:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 647,
        "src": "10468:2360:0"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 642,
              "name": "EntityBase",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 37,
              "src": "12897:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_EntityBase_$37",
                "typeString": "contract EntityBase"
              }
            },
            "id": 643,
            "nodeType": "InheritanceSpecifier",
            "src": "12897:10:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 644,
              "name": "DeviceUpdatable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 641,
              "src": "12909:15:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DeviceUpdatable_$641",
                "typeString": "contract DeviceUpdatable"
              }
            },
            "id": 645,
            "nodeType": "InheritanceSpecifier",
            "src": "12909:15:0"
          }
        ],
        "contractDependencies": [
          37,
          284,
          131,
          427,
          494,
          641
        ],
        "contractKind": "contract",
        "documentation": "@title Device manager core contract.",
        "fullyImplemented": true,
        "id": 646,
        "linearizedBaseContracts": [
          646,
          641,
          494,
          427,
          284,
          131,
          37
        ],
        "name": "DeviceManager",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 647,
        "src": "12871:88:0"
      }
    ],
    "src": "0:12960:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {
        "0x848155b8e733cfd6e7258639111d906437ddb051818f4061fc4c7cfbc575cb2e": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "deviceId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "oldOwner",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "DeviceTransfered",
          "type": "event"
        },
        "0x67ace838aca3988a026b61036d72b93a8316d05feecb6ee10316e8d59f0e687f": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "deviceId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "name": "property",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "name": "newValue",
              "type": "bytes32"
            }
          ],
          "name": "DevicePropertyUpdated",
          "type": "event"
        },
        "0x3739f348a11e3a029a385b4746ea6edba7f01ceec207010638e9d17862b78c40": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "signatureId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "name": "deviceId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "name": "signer",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "expiryTime",
              "type": "uint256"
            }
          ],
          "name": "DeviceSigned",
          "type": "event"
        },
        "0xf93d5095ac7696e643e1fa0aa35d622f4a13e11f4e199f30794679dcdcdb9737": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "signatureId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "name": "deviceId",
              "type": "uint256"
            }
          ],
          "name": "SignatureRevoked",
          "type": "event"
        },
        "0x093aad13dfa930f4f2311a7f59be1c3674ccc072b729756c22447948a2c05200": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "deviceId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "identifier",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "name": "metadataHash",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "name": "firmwareHash",
              "type": "bytes32"
            }
          ],
          "name": "DeviceCreated",
          "type": "event"
        },
        "0x53d207b6cf416d44764c48a52a7e64ffa2793f67215d452a032a11e0dd34bd2c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "newData",
              "type": "string"
            }
          ],
          "name": "EntityDataUpdated",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xCC958703EBB101A652F790299d4D46E85785bCA1",
      "transactionHash": "0xe05eb7bd055e4d5c6ed507f4169523c1d848b570cc3ca83cdd45df0d5abd2705"
    }
  },
  "schemaVersion": "3.1.0",
  "updatedAt": "2020-10-20T20:10:56.211Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "createDevice(bytes32,bytes32,bytes32)": {
        "params": {
          "_firmwareHash": "Hash of actual firmware hash.",
          "_identifier": "Unique device identifier, such as fingerprint of RSA/ECC public key or Ethereum address (recommended).",
          "_metadataHash": "Merkle root hash of metadata (recommended) or simple hash of concatenated metadata."
        },
        "return": "Created device ID."
      },
      "getActiveSignaturesForDevice(uint256)": {
        "details": "Use this function instead of filtering DeviceSigned event since signatures could have been revoked.",
        "params": {
          "_deviceId": "ID of a device."
        },
        "return": "Array of signature IDs."
      },
      "getDevicesByOwner(address)": {
        "details": "Use this function instead of filtering DeviceCreated event since devices could have been transferred between owners.",
        "params": {
          "_owner": "Owner address."
        },
        "return": "Array of device IDs."
      },
      "isDeviceAnEntity(uint256)": {
        "params": {
          "_deviceId": "ID of a  device."
        },
        "return": "Boolean status."
      },
      "isValidEthMessage(uint256,bytes32,bytes)": {
        "params": {
          "_deviceId": "ID of a device that signed the message.",
          "_messageHash": "Hash of sent message.",
          "_signature": "Signature generated using web3.eth.sign()."
        },
        "return": "Boolean status."
      },
      "isValidFirmwareHash(uint256,bytes32)": {
        "params": {
          "_deviceId": "ID of a device containing firmware hash.",
          "_firmwareHash": "Firmware hash (not the actual hash)."
        },
        "return": "Boolean status."
      },
      "isValidMetadataMember(uint256,bytes32[],bytes32)": {
        "params": {
          "_deviceId": "ID of a device containing metadata hash.",
          "_leaf": "Leaf of Merkle tree.",
          "_proof": "Merkle proof containing sibling hashes on the branch from the leaf to the root of the Merkle tree."
        },
        "return": "Boolean status."
      },
      "revokeSignature(uint256)": {
        "params": {
          "_signatureId": "ID of to be revoked signature."
        }
      },
      "signDevice(uint256,uint256)": {
        "params": {
          "_deviceId": "ID of to be signed device.",
          "_expiryTime": "Expiry time in Unix seconds."
        },
        "return": "Created signature ID."
      },
      "transferDevice(uint256,address)": {
        "params": {
          "_deviceId": "ID of to be transfered device.",
          "_to": "Address of new owner."
        }
      },
      "updateEntityData(string)": {
        "params": {
          "_data": "Entity data."
        }
      },
      "updateFirmwareHash(uint256,bytes32)": {
        "params": {
          "_deviceId": "ID of a device.",
          "_newFirmwareHash": "New firmware hash."
        }
      },
      "updateIdentifier(uint256,bytes32)": {
        "params": {
          "_deviceId": "ID of a device.",
          "_newIdentifier": "New identifier."
        }
      },
      "updateMetadataHash(uint256,bytes32)": {
        "params": {
          "_deviceId": "ID of a device.",
          "_newMetadataHash": "New metadata hash."
        }
      }
    },
    "title": "Device manager core contract."
  },
  "userdoc": {
    "methods": {
      "createDevice(bytes32,bytes32,bytes32)": {
        "notice": "Creates and saves device into storage. Emits DeviceCreated. "
      },
      "getActiveSignaturesForDevice(uint256)": {
        "notice": "Gets all signatures for specific device. "
      },
      "getDevicesByOwner(address)": {
        "notice": "Gets all devices owned by specified address. "
      },
      "isDeviceAnEntity(uint256)": {
        "notice": "Checks if device is also an entity. "
      },
      "isValidEthMessage(uint256,bytes32,bytes)": {
        "notice": "Validate authenticity of message signed by Etherium private key. On-chain validation is available only for Ethereum signed messages."
      },
      "isValidFirmwareHash(uint256,bytes32)": {
        "notice": "Checks if provided firmware hash is equal to firmware hash device property. "
      },
      "isValidMetadataMember(uint256,bytes32[],bytes32)": {
        "notice": "Checks if provided leaf is a member of metadata contained in Merkle tree.  Assumes that each pair of leaves and each pair of pre-images are sorted."
      },
      "revokeSignature(uint256)": {
        "notice": "Revokes a signature. Emits SignatureRevoked. "
      },
      "signDevice(uint256,uint256)": {
        "notice": "Signs a device and signature into storage. Emits DeviceSigned. "
      },
      "transferDevice(uint256,address)": {
        "notice": "Transfer device ownership from one external account to another. Emits DeviceTransfered."
      },
      "updateEntityData(string)": {
        "notice": "Update entity data."
      },
      "updateFirmwareHash(uint256,bytes32)": {
        "notice": "Update device with new firmware hash. Emits DevicePropertyUpdated."
      },
      "updateIdentifier(uint256,bytes32)": {
        "notice": "Update device with new identifier. Emits DevicePropertyUpdated."
      },
      "updateMetadataHash(uint256,bytes32)": {
        "notice": "Update device with new metadata hash. Emits DevicePropertyUpdated."
      }
    }
  }
}