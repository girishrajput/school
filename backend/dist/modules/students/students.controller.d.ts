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
        user: {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            roleId: string;
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
        class: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        } | null;
        section: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            classId: string;
        } | null;
        parent: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
        } | null;
        admission: {
            email: string;
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            classId: string | null;
            sectionId: string | null;
            studentName: string;
            parentName: string;
            phone: string;
            status: string;
            comments: string | null;
        } | null;
        documents: {
            id: string;
            createdAt: Date;
            name: string;
            type: string;
            studentId: string;
            url: string;
        }[];
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        parentId: string | null;
        classId: string | null;
        sectionId: string | null;
        admissionId: string | null;
        enrolledAt: Date | null;
    })[]>;
    findOne(id: string): Promise<({
        user: {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            roleId: string;
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
        class: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        } | null;
        section: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            classId: string;
        } | null;
        parent: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
        } | null;
        admission: {
            email: string;
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            classId: string | null;
            sectionId: string | null;
            studentName: string;
            parentName: string;
            phone: string;
            status: string;
            comments: string | null;
        } | null;
        documents: {
            id: string;
            createdAt: Date;
            name: string;
            type: string;
            studentId: string;
            url: string;
        }[];
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        parentId: string | null;
        classId: string | null;
        sectionId: string | null;
        admissionId: string | null;
        enrolledAt: Date | null;
    }) | null>;
    create(dto: CreateStudentDto): Promise<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        parentId: string | null;
        classId: string | null;
        sectionId: string | null;
        admissionId: string | null;
        enrolledAt: Date | null;
    }>;
    update(id: string, dto: UpdateStudentDto): Promise<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        parentId: string | null;
        classId: string | null;
        sectionId: string | null;
        admissionId: string | null;
        enrolledAt: Date | null;
    }>;
    delete(id: string): Promise<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        parentId: string | null;
        classId: string | null;
        sectionId: string | null;
        admissionId: string | null;
        enrolledAt: Date | null;
    }>;
    uploadDocument(id: string, file: Express.Multer.File): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        type: string;
        studentId: string;
        url: string;
    }>;
}
