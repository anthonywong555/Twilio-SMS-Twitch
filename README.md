# Twilio-SMS-Twitch

![](./assets/demo.gif)

## Prerequisite

Before you can get started you will need the following:

- [Twilio Project](https://www.twilio.com/try-twilio)
- [Twilio Phone Number](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console)
- [Twilio Sync Service](https://www.twilio.com/console/sync/services)
- [Twilio Sync API Key](https://www.twilio.com/console/sync/project/api-keys)
- [Twilio CLI](https://github.com/twilio/twilio-cli)
- [Twilio CLI Plugin: Serverless](https://github.com/twilio-labs/plugin-serverless)

## Setup

In ./twilio/serverless add the following values in the .env

| Key                     | Value                              |
|-------------------------|------------------------------------|
| TWILIO_SYNC_SERVICE_SID | ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX |
| TWILIO_SYNC_API_KEY     | SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX |
| TWILIO_SYNC_API_SECRET  | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   |

Modify the following lines of code:

| File Name                                | Line | Value                                       |
|------------------------------------------|------|---------------------------------------------|
| ./twilio/assets/index.html               | 13   | ``` <<INSERT TWILIO PHONE NUMBER>> ```      |
| ./twilio/assets/scripts/twilio-script.js | 21   | ``` <<INSERT TWILIO SERVERLESS DOMAIN>> ``` |