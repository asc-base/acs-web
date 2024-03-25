import { PrismaClient } from '@prisma/client'
import { executeRole } from './role'

const prisma = new PrismaClient()

async function main(): Promise<void> {
    await executeRole(prisma)
}

// execute the main function
main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect()
    })
