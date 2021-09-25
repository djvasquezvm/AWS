import { SendMessageCommand } from  "@aws-sdk/client-sqs";
import { sqsClient } from  "../libs/sqsClient.js";

const params = {
  DelaySeconds: 10,
  MessageAttributes: {
    Title: {
      DataType: "String",
      StringValue: "The Whistler",
    },
    Author: {
      DataType: "String",
      StringValue: "John Grisham",
    },
    WeeksOn: {
      DataType: "Number",
      StringValue: "6",
    },
  },
  MessageBody:
    "Information about current NY Times fiction bestseller for week of 12/11/2016.",
  QueueUrl: "https://sqs.us-east-1.amazonaws.com/214837313196/SQS_test"
};

const run = async () => {
  try {
    const data = await sqsClient.send(new SendMessageCommand(params));
    console.log("Success, message sent. MessageID:", data.MessageId);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();