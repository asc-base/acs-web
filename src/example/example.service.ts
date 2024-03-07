import { Injectable } from '@nestjs/common'
import { CreateExampleDto } from 'src/example/dto/create-example.dto'
import { ExampleEntity } from 'src/example/entities/example.entity'
import { ExampleRepository } from 'src/example/example.repository'

@Injectable()
export class ExampleService {
    constructor(private exampleRepository: ExampleRepository) {}

    async createExample(body: CreateExampleDto): Promise<ExampleEntity> {
        return await this.exampleRepository.createExample(body)
    }
}
