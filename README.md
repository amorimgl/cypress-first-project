#### First step:

npm install

### to run the tests with the browser:

yarn run cypress open --env fileConfig=prod

npm run-script cy:prod

#### to run the tests without the browser:

npx cypress run --env fileConfig=prod --reporter mocha-junit-reporter

npm run-script cy-prod
"video": false,