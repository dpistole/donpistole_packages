# Don Pistole: The Website

A web developer should probably have a website, this is mine.

Feel free to dig around the code. If you have any comments, questions, or suggestions <a href="mailto:donald.pistole@gmail.com">shoot me an email</a>.

<br/>

## Watcha got here, Don?

Well, we've got a lerna monorepo containing a number of packages. A whole lotta typescript code. Some scripts here and there.

All together it makes up the website at <a href="https://donpistole.com">donpistole.com</a>.

<br/>

## Tell me more about these packages...

### **donpistole-api**

An API library for interacting with _the_ official <a href="https://donpistole.com">donpistole.com</a> API.

The UI package consumes this to interact with the backend endpoints for things like submitting contact me requests.

### donpistole-aws-cdk

This is the infrastructure-as-code, defined in Typescript using a custom wrapper around the AWS CDK libraries.

It lets me deploy (or destroy) the entirety of the AWS infrastructure required for running <a href="https://donpistole.com">donpistole.com<a/>.

### donpistole-aws-lambda-handlers

These are the API endpoints for <a href="https://donpistole.com">donpistole.com</a>. Written in Typescript, and packaged neatly, ready to be consumed by the AWS NodeJS Lambda handlers.

### donpistole-website

A React App, written in Typescript, that is the UI for <a href="https://donpistole.com">donpistole.com</a>.

This get's deployed to the S3 bucket that sits behind cloudfront.
