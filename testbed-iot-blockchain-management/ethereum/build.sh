#!/bin/bash

truffle compile && truffle migrate --reset && cp build/contracts/DeviceManager.json ../frontend/src/artifacts/DeviceManager.json && cp build/contracts/DeviceManager.json ../iot-device-management-Gateway/utils/DeviceManager.json