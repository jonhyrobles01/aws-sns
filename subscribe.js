import { snsClient } from "./snsClient.js";
import { SubscribeCommand } from "@aws-sdk/client-sns";

const params = {
  Protocol: "sms" /* required */,
  TopicArn: process.env.AWS_TOPIC_ARN, //TOPIC_ARN
  Endpoint: "+529999999999", //EMAIL_ADDRESS
};

const run = async () => {
  try {
    const data = await snsClient.send(new SubscribeCommand(params));

    console.log("Success.", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();
