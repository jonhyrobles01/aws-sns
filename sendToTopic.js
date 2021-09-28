import { PublishCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient.js";

// Set the parameters
var params = {
  Message: "Esta es una prueba", // MESSAGE_TEXT
  TopicArn: "arn:aws:sns:us-east-2:230516944256:prueba", //TOPIC_ARN
};

const run = async () => {
  try {
    const data = await snsClient.send(new PublishCommand(params));
    console.log("Success.", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();
