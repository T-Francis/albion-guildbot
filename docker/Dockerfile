FROM node:13.2.0

# create an app user
ARG USERNAME
ARG DOCKER_UID
ARG DOCKER_GID
RUN groupadd -g $DOCKER_GID $USERNAME
RUN useradd -m -u $DOCKER_UID -g $DOCKER_GID -s /bin/bash $USERNAME

WORKDIR /app

RUN chown -R $DOCKER_UID:$DOCKER_UID /app
RUN chmod -R g+w /app \
    && chown -R $USERNAME:$USERNAME /usr/local/bin/

# starter script
COPY start-container /usr/local/bin/start-container
RUN chmod +x /usr/local/bin/*

CMD ["start-container"]