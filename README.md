# Gloria WebSocket Server

## Main dependencies

-   Node
-   Express
-   Socket.io

## Setup

    npm i

## Development

    npm run dev

A Node microservice will start listening for requests at `localhost:3000`.

## Deployment

### AWS CLI

Follow these steps if you haven't installed the AWS CLI on your machine:

-   Install the AWS CLI: https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html.
-   Verify that the CLI was installed: https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html#cliv2-mac-install-confirm.
-   More info about the AWS CLI: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-using-cli.html

### Create stack

You can deploy this microservice on AWS EC2 thanks to the AWS CLI and AWS CloudFormation.

    aws cloudformation create-stack --stack-name ec2-deploy-test --template-body file://template.yml

### Delete stack

If you want to delete a previously deployed stack:

    aws cloudformation delete-stack --stack-name ec2-deploy-test

Deleted EC2 instances will disappear after 10-20 minutes.

## SSL certificates

Unfortunately, it is not possible to generate SSL certificates directly for the URLs of EC2 instances such as `ec2-54-191-191-113.us-west-2.compute.amazonaws.com` as they are owned by AWS.

The best solution is to purchase a domain such as `gloria.digital` and, thanks to CloudFlare, have its DNS records point to the URL of the EC2 instance running the WebSocket server.

### Generate certificates

    openssl req -nodes -new -x509 -keyout server.key -out server.cert

### Upload certificate to AWS IAM

    aws iam upload-server-certificate --server-certificate-name websocket-test --certificate-body file://server.cert --private-key file://server.key

## Useful links

-   CloudFormation templates: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/gettingstarted.templatebasics.html
-   https://www.tothenew.com/blog/launching-an-aws-ec2-instance-using-cloudformation-template/
-   https://flaviocopes.com/express-https-self-signed-certificate/
-   https://hackernoon.com/how-to-set-up-https-for-your-domain-on-aws-8f771686603d
