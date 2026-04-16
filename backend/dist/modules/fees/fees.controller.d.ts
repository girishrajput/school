import { FeesService } from './fees.service';
import { CreateFeeStructureDto } from './dto/create-fee-structure.dto';
import { CreateFeePaymentDto } from './dto/create-fee-payment.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
export declare class FeesController {
    private feesService;
    constructor(feesService: FeesService);
    findFeeStructures(req: {
        user: {
            schoolId: string;
        };
    }, schoolId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        school: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            domain: string;
        };
        class: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        };
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        classId: string;
        amount: number;
    })[]>;
    createFeeStructure(dto: CreateFeeStructureDto): import(".prisma/client").Prisma.Prisma__FeeStructureClient<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        classId: string;
        amount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateFeeStructure(id: string, dto: Partial<CreateFeeStructureDto>): Promise<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        classId: string;
        amount: number;
    }>;
    deleteFeeStructure(id: string): Promise<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        classId: string;
        amount: number;
    }>;
    findFeePayments(req: {
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
        feeStructure: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            classId: string;
            amount: number;
        };
        invoice: {
            id: string;
            feePaymentId: string;
            invoiceUrl: string;
            generatedAt: Date;
        } | null;
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        studentId: string;
        amount: number;
        feeStructureId: string;
        transactionId: string;
        paidAt: Date;
    })[]>;
    createFeePayment(dto: CreateFeePaymentDto): import(".prisma/client").Prisma.Prisma__FeePaymentClient<{
        school: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            domain: string;
        };
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
        feeStructure: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            classId: string;
            amount: number;
        };
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        studentId: string;
        amount: number;
        feeStructureId: string;
        transactionId: string;
        paidAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getFeePayment(id: string): Promise<{
        invoice: {
            id: string;
            feePaymentId: string;
            invoiceUrl: string;
            generatedAt: Date;
        } | null;
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        studentId: string;
        amount: number;
        feeStructureId: string;
        transactionId: string;
        paidAt: Date;
    }>;
    createInvoice(dto: CreateInvoiceDto): import(".prisma/client").Prisma.Prisma__InvoiceClient<{
        id: string;
        feePaymentId: string;
        invoiceUrl: string;
        generatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
