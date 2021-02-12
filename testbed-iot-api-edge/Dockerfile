# this is our first build stage, it will not persist in the final image
FROM ubuntu:18.04 as intermediate

# install git
RUN apt-get update
RUN apt-get install -y git

# Cloning Repository
RUN git clone git@github.com:celiomarcio/iotregauthbc.git

# Add NodeJs
RUN apt-get install -y curl
RUN apt-get install -y nodejs
RUN apt-get install -y npm

RUN cd /testbed-iot-api-edge && npm install 

# Start  
CMD cd /testbed-iot-api-edge && npm start  
#python postData.py 0 1 http://localhost:1338/receive

