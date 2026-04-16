import { PrismaService } from '../../prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
export declare class AttendanceService {
    private prisma;
    constructor(prisma: PrismaService);
    markAttendance(dto: CreateAttendanceDto): import(".prisma/client").Prisma.Prisma__AttendanceClient<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        studentId: string;
        date: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findBySchool(schoolId: string): import(".prisma/client").Prisma.PrismaPromise<({
        student: {
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
        };
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        studentId: string;
        date: Date;
    })[]>;
    bulkMark(dtos: CreateAttendanceDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getMonthlyReport(schoolId: string, month: number, year: number): Promise<(import(".prisma/client").Prisma.PickEnumerable<import(".prisma/client").Prisma.AttendanceGroupByOutputType, ("status" | "studentId")[]> & {
        _count: {
            status: number;
        };
    })[]>;
}
