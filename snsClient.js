import * as env from "dotenv";
import { SNSClient } from "@aws-sdk/client-sns";
env.config();

const snsClient = new SNSClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

export { snsClient };
