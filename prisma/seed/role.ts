import { PrismaClient, Role } from '@prisma/client'

const now = new Date()

export const roles: Array<Omit<Role, 'id'>> = [
    {
        name: 'student',
        createdBy: -1,
        createdDate: now,
        updatedDate: now,
        updatedBy: null,
    },
    {
        name: 'admin',
        createdBy: -1,
        createdDate: now,
        updatedDate: now,
        updatedBy: null,
    },
]

export const executeRole = async (prisma: PrismaClient): Promise<void> => {
    const result = await prisma.role.createMany({ data: roles })
    console.dir({ result })
}
