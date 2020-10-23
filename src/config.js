export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "sa-east-1",
    BUCKET: "notes-app-upload-carlos"
  },
  apiGateway: {
    REGION: "sa-east-1",
    URL: "https://z7q7z6x04m.execute-api.sa-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Clm0lMEV2",
    APP_CLIENT_ID: "5dsba3f3j74s77fq8gh25e4pd2",
    IDENTITY_POOL_ID: "us-east-1:193e9027-57f1-48b2-9705-f8d44b6600c5"
  }
};
