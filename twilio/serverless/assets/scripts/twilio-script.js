$( document ).ready(async () =>{
  try {
    await driver();
  } catch (e) {
    console.log(`${e}`);
  }
});

const driver = async (event) => {
  try {
    const tokenResponse = await getTwilioAuth();
    const syncClient = await authSync(tokenResponse);
    await setSyncClientSubscribe(syncClient);
  } catch (e) {
    throw e;
  }
};

const getTwilioAuth = async () => {
  try {
    const tokenResponse = await $.getJSON('https://<<INSERT TWILIO SERVERLESS DOMAIN>>/twilio/sync/get-sync-token');
    return tokenResponse;
  } catch (e) {
    throw e;
  }
}

const authSync = async (tokenResponse) => {
  try {
    const { token } = tokenResponse;
    const syncClient = new Twilio.Sync.Client(token);

    syncClient.on('tokenAboutToExpire', async () => {
      const tokenResponse = await getTwilioAuth();
      const { token } = tokenResponse;
      syncClient.updateToken(token);
    });

    return syncClient;
  } catch (e) {
    throw e;
  }
}

const setSyncClientSubscribe = async (syncClient) => {
  try {
    syncClient.list('MESSAGES').then(function(list) {
      list.on('itemAdded', async (response) => {
        const payload = response.item.value;
        const {message} = payload;
        renderMessage(message);
      });
    });
  } catch (e) {
    throw e;
  }
}