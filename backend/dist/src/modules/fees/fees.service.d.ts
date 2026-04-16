import { PrismaService } from '../../prisma/prisma.service';
import { CreateFeeStructureDto } from './dto/create-fee-structure.dto';
import { CreateFeePaymentDto } from './dto/create-fee-payment.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
export declare class FeesService {
    private prisma;
    constructor(prisma: PrismaService);
    findFeeStructures(schoolId: string): import(".prisma/client").Prisma.PrismaPromise<({
        school: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            domain: string;
        };
        class: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        classId: string;
        amount: number;
    })[]>;
    createFeeStructure(dto: CreateFeeStructureDto): import(".prisma/client").Prisma.Prisma__FeeStructureClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        classId: string;
        amount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateFeeStructure(id: string, dto: Partial<CreateFeeStructureDto>): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        classId: string;
        amount: number;
    }>;
    deleteFeeStructure(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        classId: string;
        amount: number;
    }>;
    createFeePayment(dto: CreateFeePaymentDto): import(".prisma/client").Prisma.Prisma__FeePaymentClient<{
        school: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            domain: string;
        };
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
        feeStructure: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            classId: string;
            amount: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        status: string;
        amount: number;
        feeStructureId: string;
        transactionId: string;
        paidAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findFeePayments(schoolId: string): import(".prisma/client").Prisma.PrismaPromise<({
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
        feeStructure: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            classId: string;
            amount: number;
        };
        invoice: {
            id: string;
            feePaymentId: string;
            invoiceUrl: string;
            generatedAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        status: string;
        amount: number;
        feeStructureId: string;
        transactionId: string;
        paidAt: Date;
    })[]>;
    getFeePayment(id: string): Promise<{
        invoice: {
            id: string;
            feePaymentId: string;
            invoiceUrl: string;
            generatedAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        status: string;
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
