# !/bin/bash
npm i &&
npm run clean &&
npm i &&
doppler run -- npm run db:sync &&
doppler run -- npm run build &&
doppler run -- npm run watch:dev