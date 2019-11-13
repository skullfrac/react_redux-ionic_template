ARG NODEVERSION
FROM node:${NODEVERSION}-alpine
RUN npm install -g \
  yarn \
  webpack

ARG SERVERNAME
ARG REACT_APP_PATH
RUN mkdir -p ${REACT_APP_PATH}
WORKDIR ${REACT_APP_PATH}
RUN npx create-react-app ${SERVERNAME} --typescript

WORKDIR ${REACT_APP_PATH}/${SERVERNAME}
RUN npm install \
    react-router \
    react-router-dom \
    @types/react \
    @types/react-router \
    @types/react-router-dom \
    @ionic/react \
    ionicons \
    redux \
    react-redux \
    redux-persist \
    redux-thunk \
    @types/react-redux

RUN yes | npm run eject
RUN \
  rm -rf ./node-modules \
  && rm -rf ./yarn.lock \
  && yarn install

RUN npm i --save \
  @capacitor/core \
  @capacitor/cli \

RUN npx cap init ${SERVERNAME} com.${SERVERNAME}.com --web-dir ./public --npm-client yarn
RUN npx cap add android
RUN npx cap add electron
RUN npx cap add ios

COPY ./resources/gitignore .gitignore
RUN sed -i -e "s/node scripts\/build.js/node scripts\/build.js && npx cap sync/g" package.json

RUN rm ${REACT_APP_PATH}/frontend/src/App.css \
  && rm ${REACT_APP_PATH}/frontend/src/App.test.tsx \
  && rm ${REACT_APP_PATH}/frontend/src/App.tsx \
  && rm ${REACT_APP_PATH}/frontend/src/index.tsx

RUN mkdir -p ${REACT_APP_PATH}/frontend/src/component \
  && mkdir -p ${REACT_APP_PATH}/frontend/src/container/App \
  && mkdir -p ${REACT_APP_PATH}/frontend/src/page/Home \
  && mkdir -p ${REACT_APP_PATH}/frontend/src/store/layout \
  && mkdir -p ${REACT_APP_PATH}/frontend/src/service

COPY ./resources/App.tsx ${REACT_APP_PATH}/frontend/src/container/App/index.tsx
COPY ./resources/Home.tsx ${REACT_APP_PATH}/frontend/src/page/Home/index.tsx
COPY ./resources/index.tsx ${REACT_APP_PATH}/frontend/src/index.tsx

ENTRYPOINT ["npm", "run", "start"]
