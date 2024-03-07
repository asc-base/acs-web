import { Injectable } from '@nestjs/common'
import { CreateExampleDto } from 'src/example/dto/create-example.dto'
import { ExampleEntity } from 'src/example/entities/example.entity'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ExampleRepository {
    constructor(private prisma: PrismaService) {}

    async createExample(body: CreateExampleDto): Promise<ExampleEntity> {
        return await this.prisma.example.create({
            data: {
                ...body,
                createdBy: -1,
                createdDate: new Date(),
            },
        })
    }
}
