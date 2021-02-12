FROM ubuntu:14.04.2
#FROM ubuntu:16.04
MAINTAINER Konstantinos Vandikas (konstantinos.vandikas@ericsson.com)

RUN apt-get update
RUN apt-get -yq upgrade

# install git and checkout source-code from github
RUN apt-get install -yq git software-properties-common curl wget
WORKDIR /opt
RUN git clone https://github.com/EricssonResearch/iot-framework-engine.git

# configure repositories
#RUN add-apt-repository ppa:chris-lea/node.js
#RUN add-apt-repository "deb http://ftp.sunet.se/pub/lang/CRAN/bin/linux/ubuntu trusty/"
#RUN add-apt-repository "deb http://old-releases.ubuntu.com/releases trusty/"

# update/upgrade base system
RUN apt-get update
RUN apt-get -yq upgrade

# install misc dependencies
RUN apt-get install -yq xsltproc python-pip libpython-dev

# install erlang
RUN apt-get install -yq erlang

# install nodejs
RUN apt-get install -yq python-software-properties python g++ make
RUN apt-get install -yq nodejs
RUN apt-get install -yq npm

# install R
RUN apt-get install -yq r-base --force-yes

# install semantic-adapter
WORKDIR /opt/iot-framework-engine
RUN pip install -r semantic-adapter/pip-freeze.txt

RUN npm config set strict-ssl false
RUN npm i socket.io@1

# compilation
WORKDIR /opt/iot-framework-engine
RUN make install

# expose port
EXPOSE 8000

# Start the IoT-Framework
CMD cd /opt/iot-framework-engine && ./scripts/sensec_light.sh start
