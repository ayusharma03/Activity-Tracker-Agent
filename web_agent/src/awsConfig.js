import AWS from 'aws-sdk';

// Configure AWS once, globally
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION_NAME
});

const s3 = new AWS.S3();

export default s3;
