import { ListQueuesCommand } from  "@aws-sdk/client-sqs";
import { sqsClient } from  "../libs/sqsClient.js";

const run = async () => {
  try {
    const data = await sqsClient.send(new ListQueuesCommand({}));
    console.log("Success", data);
    return data;
  } catch (err) {
    console.error(err, err.stack);
  }
};
run();