"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function main() {
    const hashedPassword = await bcrypt.hash('password123', 10);
    console.log('Starting seed...');
    const adminRole = await prisma.role.upsert({
        where: { name: 'ADMIN' },
        update: {},
        create: { name: 'ADMIN' },
    });
    console.log('Role verified: ADMIN');
    const admin = await prisma.user.upsert({
        where: { email: 'girishkumarlodhi7@gmail.com' },
        update: {},
        create: {
            email: 'girishkumarlodhi7@gmail.com',
            password: hashedPassword,
            firstName: 'Girish',
            lastName: 'Lodhi',
            role: {
                connect: { id: adminRole.id }
            },
            school: {
                create: {
                    name: 'VGM School',
                    domain: 'vgm-test',
                },
            },
        },
    });
    console.log('Seed successful: Admin user created.');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map