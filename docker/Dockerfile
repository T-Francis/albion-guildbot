FROM node:13.2.0

# supervisor
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    supervisor \
    && rm /bin/sh && ln -s /bin/bash /bin/sh \
    && rm -r /var/lib/apt/lists/*

# supervisord conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# pm2 
RUN npm install -g pm2 && apt-get clean

WORKDIR /app

RUN chown -R node:node /app

USER node

COPY app/ /app

RUN npm install

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]