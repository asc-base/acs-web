import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ExampleQuery } from 'src/example/dto/get-examples.dto'
import { ExampleEntity } from 'src/example/entities/example.entity'
import { ExampleService } from 'src/example/example.service'
import { CreateExampleDto } from './dto/create-example.dto'

@Controller('example')
export class ExampleController {
    constructor(private exampleService: ExampleService) {}

    @Post()
    async create(@Body() body: CreateExampleDto): Promise<ExampleEntity> {
        return await this.exampleService.createExample(body)
    }

    @Get()
    getList(@Query() query: ExampleQuery): void {
        console.log(`query: `, query)
    }
}
