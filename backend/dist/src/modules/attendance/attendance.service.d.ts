import { PrismaService } from '../../prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
export declare class AttendanceService {
    private prisma;
    constructor(prisma: PrismaService);
    markAttendance(dto: CreateAttendanceDto): import(".prisma/client").Prisma.Prisma__AttendanceClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        status: string;
        date: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findBySchool(schoolId: string): import(".prisma/client").Prisma.PrismaPromise<({
        student: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        status: string;
        date: Date;
    })[]>;
    bulkMark(dtos: CreateAttendanceDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getMonthlyReport(schoolId: string, month: number, year: number): Promise<(import(".prisma/client").Prisma.PickEnumerable<import(".prisma/client").Prisma.AttendanceGroupByOutputType, ("studentId" | "status")[]> & {
        _count: {
            status: number;
        };
    })[]>;
}
