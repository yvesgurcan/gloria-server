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

## Links

-   CloudFormation templates: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/gettingstarted.templatebasics.html
-   https://www.tothenew.com/blog/launching-an-aws-ec2-instance-using-cloudformation-template/
