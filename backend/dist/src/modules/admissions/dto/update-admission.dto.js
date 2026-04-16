"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdmissionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_admission_dto_1 = require("./create-admission.dto");
class UpdateAdmissionDto extends (0, mapped_types_1.PartialType)(create_admission_dto_1.CreateAdmissionDto) {
}
exports.UpdateAdmissionDto = UpdateAdmissionDto;
//# sourceMappingURL=update-admission.dto.js.map