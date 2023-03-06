const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey:  process.env.AWSSecretKey,
    region: 'eu-central-1',
});

exports.s3 = s3;
exports.bucket =  process.env.AWSBucket;