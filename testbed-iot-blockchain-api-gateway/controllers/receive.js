const ethereumConn = require('../utils/ethereumConn.js');
const logOs = require('../utils/logOs.js')

const rp = require('request-promise-native');

exports.postReceive = (req, res, next) => {
    console.log('received payload: ' + JSON.stringify(req.body));
    const startTimeGW = Date.now();
    const startTimeValidate = Date.now();
    // Validate message
    const { deviceId, message, signature, metadata, proof, firmware } = req.body;
    
    if (ethereumConn.isValidFirmware(deviceId,firmware) 
        && ethereumConn.isValidMetadata(deviceId, metadata, proof) 
        && ethereumConn.isValidMessage(deviceId, message, signature)){
          
          const msElapsedValid = Date.now() - startTimeValidate;
          console.log(`Validate: ${msElapsedValid}`);
          logOs.logOs();
          
          let jsonMessage = JSON.parse(message);
          
          let options = {
            uri: metadata,
            method: 'POST',
            body: jsonMessage,
            json: true
          };
          
          rp(options)
            .then( parsedBody=>  {
                   // POST succeeded...
                   res.send(parsedBody);
                   const msElapsedGW = Date.now() - startTimeGW;
                   console.log(`Gateway: ${msElapsedGW}`);
                   logOs.logOs();
                   console.log(parsedBody);
                   
            })
            .catch(err => {
              res.send(err);
              
              // POST failed...;
              
          });
          
          

          } else {
      res.send({deny: true})
      
    };
}