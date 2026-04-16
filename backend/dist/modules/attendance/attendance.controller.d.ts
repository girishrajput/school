import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
export declare class AttendanceController {
    private attendanceService;
    constructor(attendanceService: AttendanceService);
    mark(dto: CreateAttendanceDto): import(".prisma/client").Prisma.Prisma__AttendanceClient<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        studentId: string;
        date: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    bulk(dtos: CreateAttendanceDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
    list(req: {
        user: {
            schoolId: string;
        };
    }, schoolId?: string): import(".prisma/client").Prisma.PrismaPromise<({
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
    report(req: {
        user: {
            schoolId: string;
        };
    }, month: string, year: string, schoolId?: string): Promise<(import(".prisma/client").Prisma.PickEnumerable<import(".prisma/client").Prisma.AttendanceGroupByOutputType, ("status" | "studentId")[]> & {
        _count: {
            status: number;
        };
    })[]>;
}
