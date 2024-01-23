FROM node:21-alpine

#RUN chown -R node:node /app
#VOLUME /app
#RUN chown -R node:node .
WORKDIR /home/node/app
#RUN chown -R node:node .
USER node

ENTRYPOINT ["npm", "run", "dev"]
