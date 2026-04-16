import { CreateAdmissionDto } from './create-admission.dto';
declare const UpdateAdmissionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAdmissionDto>>;
export declare class UpdateAdmissionDto extends UpdateAdmissionDto_base {
    status?: string;
    comments?: string;
}
export {};
