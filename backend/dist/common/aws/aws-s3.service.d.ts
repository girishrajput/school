export declare class AwsS3Service {
    private client;
    private bucket;
    constructor();
    uploadFile(file: Express.Multer.File, folder: string): Promise<{
        Location: string;
    }>;
}
