import * as env from "dotenv";
import { snsClient } from "./snsClient.js";
import { ListSubscriptionsByTopicCommand } from "@aws-sdk/client-sns";

env.config();

const run = async () => {
  try {
    const data = await snsClient.send(
      new ListSubscriptionsByTopicCommand({
        TopicArn: process.env.AWS_TOPIC_ARN,
      })
    );
    console.log("Success.", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();
