import * as Yup from 'yup';
// aws-sdk is external
// eslint-disable-next-line import/no-extraneous-dependencies
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import {
  createSuccessResponse,
  createErrorResponse,
  HTTP_BAD_REQUEST,
} from '@cranburi/http';
import { renderEmail } from './lib/renderEmail';

export const ContactMeDataSchema = Yup.object().shape({
  email: Yup.string().required(),
});

export const contactMe = async (event: any) => {
  let useEmail = null;
  try {
    const { data } = JSON.parse(event?.body);
    await ContactMeDataSchema.validate(data);
    useEmail = `${data.email}`;
  } catch (error) {
    return createErrorResponse(undefined, HTTP_BAD_REQUEST);
  }

  try {
    const sendEmailParams = {
      Destination: {
        ToAddresses: ['don@cranburi.com'],
        CcAddresses: [useEmail],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: renderEmail({ email: useEmail }),
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'An important introduction...',
        },
        ReplyToAddresses: [],
        Source: 'aws-robots@cranburi.com',
      },
      Source: 'no-reply@cranburi.com',
    };

    const sesClient = new SESClient({});

    await sesClient.send(new SendEmailCommand(sendEmailParams));
  } catch (error) {
    return createErrorResponse(`Failed to send email ${useEmail} ${error}`);
  }

  return createSuccessResponse();
};
