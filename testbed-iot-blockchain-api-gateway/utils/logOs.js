const osu = require('node-os-utils')
const cpu = osu.cpu
const mem = osu.mem
var os = require('os');

const logOs= async () =>{

    await cpu.usage()
        .then(info => {
            console.log("CPU:"+ info);
        });

    await mem.info()
        .then(info => {
            console.log("Mem:" + info.usedMemMb);
        })
};

module.exports.logOs = logOs;
