import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class AwsS3Service {
  private client: S3Client;
  private bucket: string;

  constructor() {
    this.bucket = process.env.AWS_S3_BUCKET || 'school-erp-files';
    this.client = new S3Client({
      region: process.env.AWS_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'fake',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'fake',
      },
    });
  }

  async uploadFile(file: Express.Multer.File, folder: string) {
    const key = `${folder}/${Date.now()}-${file.originalname}`;
    try {
      const command = new PutObjectCommand({
        Bucket: this.bucket,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      });
      await this.client.send(command);
      return { Location: `https://${this.bucket}.s3.amazonaws.com/${key}` };
    } catch (error) {
      throw new InternalServerErrorException('S3 upload failed');
    }
  }
}
