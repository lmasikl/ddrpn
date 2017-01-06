from ubuntu:xenial

ENV DEBIAN_FRONTEND="noninteractive"

RUN locale-gen en_US.UTF-8
ENV LC_ALL en_US.UTF-8

RUN apt-get update && apt-get install -y --no-install-recommends \
        git \
        bash \
        curl \
        vim-nox \
        build-essential \
        python3.5 \
        python3.5-dev \
        libpcre3 \
        libpcre3-dev \
        libpq-dev \
        libjpeg-dev \
        python3-setuptools \
        python3-pip \
        supervisor \
        # redis-tools \
 && rm -rf /var/lib/apt/lists/*

ENV TERM xterm-color
ENV PIP_NO_CACHE_DIR off
ENV PIP_DISABLE_PIP_VERSION_CHECK on
ENV PYTHONUNBUFFERED 1
ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_VERSION 7.4.0
ENV NPM_VERSION 3.10.10

# gpg keys listed at https://github.com/nodejs/node
RUN set -ex \
    && for key in \
        9554F04D7259F04124DE6B476D5A82AC7E37093B \
        94AE36675C464D64BAFA68DD7434390BDBE9B9C5 \
        0034A06D9D9B0064CE8ADF6BF1747F4AD2306D93 \
        FD3A5288F042B6850C66B31F09FE44734EB7990E \
        71DCFD284A79C3B38668286BC97EC7A07EDE3FC1 \
        DD8F2338BAE7501E3DD5AC78C273792F7D83545D \
        B9AE9905FFD7803F25714661B63B535A4C206CA9 \
        C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8 \
    ; do \
        gpg --keyserver ha.pool.sks-keyservers.net --recv-keys "$key"; \
    done

RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \
    && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" \
    && gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \
    && grep " node-v$NODE_VERSION-linux-x64.tar.xz\$" SHASUMS256.txt | sha256sum -c - \
    && tar -xJf "node-v$NODE_VERSION-linux-x64.tar.xz" -C /usr/local --strip-components=1 \
    && rm "node-v$NODE_VERSION-linux-x64.tar.xz" SHASUMS256.txt.asc SHASUMS256.txt \
    && ln -s /usr/local/bin/node /usr/local/bin/nodejs \
    && npm install -g "npm@${NPM_VERSION}" \
    && npm cache clear

RUN mkdir /code

WORKDIR /code

<<<<<<< HEAD
COPY requirements/app.txt /code/

RUN pip install -r app.txt

COPY . /code/
=======
COPY ./requirements/app.txt /code/app.txt

RUN pip3 install -r app.txt

COPY ./package.json /code/package.json

RUN npm install

COPY . /code/

RUN npm run dev

RUN python3 /code/manage.py collectstatic --noinput

RUN ln -s /code/etc/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD ["/usr/bin/supervisord"]
>>>>>>> feature/AUTH
