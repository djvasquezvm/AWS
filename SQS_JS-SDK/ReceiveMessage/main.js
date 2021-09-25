import {
  ReceiveMessageCommand,
  DeleteMessageCommand,
} from  "@aws-sdk/client-sqs";
import { sqsClient } from  "../libs/sqsClient.js";

const queueURL = "https://sqs.us-east-1.amazonaws.com/214837313196/SQS_test";
const params = {
  AttributeNames: ["SentTimestamp"],
  MaxNumberOfMessages: 10,
  MessageAttributeNames: ["All"],
  QueueUrl: queueURL,
  VisibilityTimeout: 20,
  WaitTimeSeconds: 5,
};

const run = async () => {
  try {
    const data = await sqsClient.send(new ReceiveMessageCommand(params));
    if (data.Messages) {
      var deleteParams = {
        QueueUrl: queueURL,
        ReceiptHandle: data.Messages[0].ReceiptHandle,
      };
      try {
        const data = await sqsClient.send(new DeleteMessageCommand(deleteParams));
        console.log("Message deleted", data);
      } catch (err) {
        console.log("Error", err);
      }
    } else {
      console.log("No messages to delete");
    }
    return data;
  } catch (err) {
    console.log("Receive Error", err);
  }
};
run();