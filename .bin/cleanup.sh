# !/bin/bash
npm i --save-dev npm-run-all &&
npm run clean &&
npm i &&
doppler run -- npm run db:sync &&
doppler run -- npm run build