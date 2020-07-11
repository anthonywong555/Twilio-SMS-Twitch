# Twilio-SMS-Livestream

![](./assets/demo.gif)

## Prerequisite

Before you can get started you will need the following:

- [Twilio Project](https://www.twilio.com/try-twilio)
- [Twilio CLI](https://github.com/twilio/twilio-cli)
- [Twilio CLI Plugin: Serverless](https://github.com/twilio-labs/plugin-serverless)
- [OBS](https://obsproject.com/)

## Setup Twilio

### Buy a Twilio Phone Number.

- [How to Search for and Buy a Twilio Phone Number](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console)

### Generate Twilio Sync Service

- [Twilio Sync Service](https://www.twilio.com/console/sync/services)

### Generate Twilio Sync Service API Key

- [Twilio Sync API Key](https://www.twilio.com/console/sync/project/api-keys)

### Deploy Twilio Serverless Code

In terminal navigate to the folder ./twilio/serverless and execute the following commands.

```sh
twilio serverless:deploy
```

Take the note of Twilio Serverless Domain.

### Edits

Lastly we just need to modify a few things.

1. In ./twilio/serverless add the following values in the .env

| Key                     | Value                              |
|-------------------------|------------------------------------|
| TWILIO_SYNC_SERVICE_SID | ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX |
| TWILIO_SYNC_API_KEY     | SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX |
| TWILIO_SYNC_API_SECRET  | XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   |

2. Modify the following lines of code:

| File Name                                | Line | Value                                       |
|------------------------------------------|------|---------------------------------------------|
| ./twilio/assets/index.html               | 13   | ``` <<INSERT TWILIO PHONE NUMBER>> ```      |
| ./twilio/assets/scripts/twilio-script.js | 21   | ``` <<INSERT TWILIO SERVERLESS DOMAIN>> ``` |

After all the changes we want to redeploy this project. Execute the following command in the terminal:

```sh
twilio serverless:deploy
```

## Setup OBS

![](./assets/setup-obs.gif)

1. Launch OBS
2. Add a Source -> Browser Source
3. In URL field add the following value: 
```
https://<<INSERT TWILIO SERVERLESS DOMAIN>>/index.html
```
4. Click OK