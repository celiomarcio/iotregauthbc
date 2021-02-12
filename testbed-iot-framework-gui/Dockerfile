# this is our first build stage, it will not persist in the final image
FROM ubuntu:18.04

# install GIT and RVM
RUN apt-get update && \
    apt-get install -qy procps curl ca-certificates gnupg2 build-essential --no-install-recommends && apt-get clean
RUN apt-get install -y git

RUN gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
RUN curl -sSL https://get.rvm.io | bash -s
RUN /bin/bash -l -c ". /etc/profile.d/rvm.sh && rvm install 2.0.0"
RUN /bin/bash -l -c "rvm requirements"
RUN /bin/bash -l -c "ruby -v"

# install Postgres lib
RUN apt-get install -y libpq-dev 

# Cloning Repository
RUN git clone git@github.com:celiomarcio/iotregauthbc.git

WORKDIR testbed-iot-framework-gui
# Start  
# install Bundler
# RUN /usr/local/rvm/bin/rvm
RUN /bin/bash -l -c "gem install bundler -v 1.17.3"
RUN /bin/bash -l -c "bundle install --system"
RUN /bin/bash -l -c "rake db:migrate"

CMD /bin/bash -l -c "rails server"
