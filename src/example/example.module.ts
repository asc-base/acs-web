import { Module } from '@nestjs/common'
import { ExampleRepository } from 'src/example/example.repository'
import { ExampleService } from 'src/example/example.service'
import { PrismaModule } from 'src/prisma/prisma.module'
import { ExampleController } from './example.controller'

@Module({
    imports: [PrismaModule],
    controllers: [ExampleController],
    providers: [ExampleService, ExampleRepository],
})
export class ExampleModule {}
