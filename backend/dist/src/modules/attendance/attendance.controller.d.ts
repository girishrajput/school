import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
export declare class AttendanceController {
    private attendanceService;
    constructor(attendanceService: AttendanceService);
    mark(dto: CreateAttendanceDto): import(".prisma/client").Prisma.Prisma__AttendanceClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        status: string;
        date: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    bulk(dtos: CreateAttendanceDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
    list(req: {
        user: {
            schoolId: string;
        };
    }, schoolId?: string): import(".prisma/client").Prisma.PrismaPromise<({
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
    report(req: {
        user: {
            schoolId: string;
        };
    }, month: string, year: string, schoolId?: string): Promise<(import(".prisma/client").Prisma.PickEnumerable<import(".prisma/client").Prisma.AttendanceGroupByOutputType, ("studentId" | "status")[]> & {
        _count: {
            status: number;
        };
    })[]>;
}
