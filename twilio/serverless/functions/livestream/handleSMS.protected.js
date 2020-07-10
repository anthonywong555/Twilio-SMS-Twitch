let serverlessHelper = null;

exports.handler = async (context, event, callback) => {
  try {
    const twilioClient = require('twilio')(context.ACCOUNT_SID, context.AUTH_TOKEN);
    await loadServerlessModules();

    const result = await driver(context, event, twilioClient);
    return callback(null, result);
  } catch (e) {
    return callback(e);
  }
};

const loadServerlessModules = async () => {
  try {
    const functions = Runtime.getFunctions();
    const serverlessHelperPath = functions['private/boilerplate/helper'].path;
    serverlessHelper = require(serverlessHelperPath);
  } catch (e) {
    throw e;
  }
}

const driver = async (serverlessContext, serverlessEvent, twilioClient) => {
  try {
    const {TWILIO_SYNC_SERVICE_SID, TWILIO_SYNC_LIST_UNIQUE_NAME} = serverlessContext;
    const {Body} = serverlessEvent;
    const payload = {
      message: Body
    }
    const confirmationMessage = "Your message was received";
    await insertListItem(serverlessContext, twilioClient, TWILIO_SYNC_SERVICE_SID, TWILIO_SYNC_LIST_UNIQUE_NAME, payload);
    const result = generateSMSTwiml(confirmationMessage);
    return result;
  } catch (e) {
    throw serverlessHelper.formatErrorMsg(serverlessContext, 'driver', e);
  }
}

const insertListItem = async (serverlessContext, twilioClient, syncServiceSID, syncListSID, data) => {
  try {
    const result = await twilioClient.sync
      .services(syncServiceSID)
      .syncLists(syncListSID)
      .syncListItems
      .create({data});
    return result;
  } catch(e) {
    throw serverlessHelper.formatErrorMsg(serverlessContext, 'insertListItem', e);
  }
}

const generateSMSTwiml = (body) => {
  const twiml = new Twilio.twiml.MessagingResponse();
	twiml.message(body);
	return twiml;
}