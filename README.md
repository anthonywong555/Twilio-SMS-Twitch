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

### Setup Environment Variables

1. Rename .env.example to be .env

2. Replace the `XXX` placeholders with credentials.

### Deploy Twilio Serverless Code

In terminal navigate to the folder ./twilio/serverless and execute the following commands.

```sh
twilio serverless:deploy
```

Take the note of Twilio Serverless Domain.

### Edit Code

1. We need to modify the following lines of code:

| File Name                                | Line | Value                                       |
|------------------------------------------|------|---------------------------------------------|
| ./twilio/assets/index.html               | 13   | ``` <<INSERT TWILIO PHONE NUMBER>> ```      |
| ./twilio/assets/scripts/twilio-script.js | 21   | ``` <<INSERT TWILIO SERVERLESS DOMAIN>> ``` |

After all the changes we want to redeploy this project. Execute the following command in the terminal:

```sh
twilio serverless:deploy
```

### Modify Twilio Phone Number

1. The last thing we need to do is modify the [Twilio Phone Number](https://www.twilio.com/console/phone-numbers/incoming) Settings. 

2. Under *A MESSAGE COMES IN* set the value to be 
```
https://<<INSERT TWILIO SERVERLESS DOMAIN>>/livestream/handleSMS
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

### Setup Zoom

If you want to set this as your webcam, you will need to install a OBS Virutal Camera Plugin.

- [OBS Virtual Camera - macOS](https://github.com/johnboiles/obs-mac-virtualcam)
- [OBS Virtual Camera - Windows](https://github.com/CatxFish/obs-virtual-cam)