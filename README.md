# Getting Started

Install dependencies:

`npm install`

Trigger test run by running:

`BROWSERSTACK_DEBUG=true BROWSERSTACK_NETWORK_LOGS=true BROWSERSTACK_CONSOLE=errors BROWSERSTACK_USE_AUTOMATE=1 BROWSERSTACK_ACCESS_KEY=<your access key> BROWSERSTACK_USERNAME=<your username> BROWSERSTACK_BUILD_ID="Browserstack Safari issue demo" WHITELIST_TOKEN=<add token here> npm run testcafe:e2e`
