import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);

  console.log('Starting seed...');

  // 1. Ensure the ADMIN role exists
  const adminRole = await prisma.role.upsert({
    where: { name: 'ADMIN' },
    update: {},
    create: { name: 'ADMIN' },
  });

  console.log('Role verified: ADMIN');

  // 2. Now create the user and connect to the role we just verified/created
  const admin = await prisma.user.upsert({
    where: { email: 'girishkumarlodhi7@gmail.com' },
    update: {},
    create: {
      email: 'girishkumarlodhi7@gmail.com',
      password: hashedPassword,
      firstName: 'Girish',
      lastName: 'Lodhi',
      role: {
        connect: { id: adminRole.id } // Connect using the ID of the role we found/created
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