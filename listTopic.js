import { snsClient } from "./snsClient.js";
import { ListTopicsCommand } from "@aws-sdk/client-sns";

const run = async () => {
  try {
    const data = await snsClient.send(new ListTopicsCommand({}));

    console.log("Success.", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();
