import { config } from 'dotenv';
import {
  CranburiApp,
  CranburiLambdaApiStack,
  CranburiFrontEndStack,
  CranburiCoreStack,
} from '@cranburi/app-aws-cdk';

import * as path from 'path';

// run dotenv config
config();

// initialize a common envConfig object to be used in the construction of stacks
const defaultAwsEnv = {
  account: `${process.env.CDK_DEFAULT_ACCOUNT_ID}`,
  region: `${process.env.CDK_DEFAULT_REGION}`,
};

// create an app context to be used in our stack creations
const app = new CranburiApp();

// create a "core" stack to house resources shared amongst other stacks
const coreStack = new CranburiCoreStack(app, 'donpistole-core', {
  env: defaultAwsEnv,
});

// create a DNS zone for our domain
const hostedZone = coreStack.createHostedZone({
  name: 'DonPistoleHostedZone',
  domain: 'donpistole.com',
});

// create an SSL certificate
const certificate = coreStack.createCertificate({
  name: 'DonPistoleCert',
  domainName: 'donpistole.com',
  extraDomainNames: ['*.donpistole.com'],
  hostedZone,
});

// create a backend stack
const backEndStack = new CranburiLambdaApiStack(app, 'donpistole-website-api', {
  env: defaultAwsEnv,
  cranburiParams: {
    codePath: path.dirname(
      require.resolve('@cranburi/donpistole-aws-lambda-handlers'),
    ),
    resourceMap: {
      name: 'contact-me',
      methods: {
        POST: {
          handler: 'contactMe',
          allowedActions: ['ses:SendEmail', 'ses:SendRawEmail'],
        },
      },
    },
  },
});

// create the front end stack
const frontEndStack = new CranburiFrontEndStack(app, 'donpistole-website', {
  env: defaultAwsEnv,
  cranburiParams: {
    hostedZone,
    certificate,
    domainName: 'donpistole.com',
    apiPaths: {
      ['api/*']: `${backEndStack.cranburiConstructs.api.restApiId}.execute-api.${backEndStack.region}.${backEndStack.urlSuffix}`,
    },
  },
});
