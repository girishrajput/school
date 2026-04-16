import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { AwsS3Service } from '../../common/aws/aws-s3.service';
export declare class StudentsController {
    private studentsService;
    private s3Service;
    constructor(studentsService: StudentsService, s3Service: AwsS3Service);
    findAll(req: {
        user: {
            schoolId: string;
        };
    }, schoolId?: string): Promise<({
        parent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            userId: string;
        };
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            roleId: string;
            schoolId: string;
        };
        class: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        };
        section: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            classId: string;
        };
        admission: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            schoolId: string;
            classId: string | null;
            sectionId: string | null;
            studentName: string;
            parentName: string;
            phone: string;
            status: string;
            comments: string | null;
        };
        documents: {
            id: string;
            name: string;
            createdAt: Date;
            type: string;
            url: string;
            studentId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        userId: string;
        parentId: string | null;
        classId: string | null;
        sectionId: string | null;
        admissionId: string | null;
        enrolledAt: Date | null;
    })[]>;
    findOne(id: string): Promise<{
        parent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            userId: string;
        };
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            roleId: string;
            schoolId: string;
        };
        class: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        };
        section: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            classId: string;
        };
        admission: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            schoolId: string;
            classId: string | null;
            sectionId: string | null;
            studentName: string;
            parentName: string;
            phone: string;
            status: string;
            comments: string | null;
        };
        documents: {
            id: string;
            name: string;
            createdAt: Date;
            type: string;
            url: string;
            studentId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        userId: string;
        parentId: string | null;
        classId: string | null;
        sectionId: string | null;
        admissionId: string | null;
        enrolledAt: Date | null;
    }>;
    create(dto: CreateStudentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        userId: string;
        parentId: string | null;
        classId: string | null;
        sectionId: string | null;
        admissionId: string | null;
        enrolledAt: Date | null;
    }>;
    update(id: string, dto: UpdateStudentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        userId: string;
        parentId: string | null;
        classId: string | null;
        sectionId: string | null;
        admissionId: string | null;
        enrolledAt: Date | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        userId: string;
        parentId: string | null;
        classId: string | null;
        sectionId: string | null;
        admissionId: string | null;
        enrolledAt: Date | null;
    }>;
    uploadDocument(id: string, file: Express.Multer.File): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        url: string;
        studentId: string;
    }>;
}
