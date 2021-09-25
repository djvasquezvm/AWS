import { GetQueueUrlCommand } from  "@aws-sdk/client-sqs";
import { sqsClient } from  "../libs/sqsClient.js";

const params = { QueueName: "SQS_test" };

const run = async () => {
  try {
    const data = await sqsClient.send(new GetQueueUrlCommand(params));
    console.log("Success", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();