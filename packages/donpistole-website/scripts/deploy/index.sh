#!/bin/bash
echo "deploying to $S3_BUCKET_NAME"
aws s3 rm s3://$S3_BUCKET_NAME --recursive
aws s3 cp dist/ s3://$S3_BUCKET_NAME --recursive
