import { Body, Controller, Post } from '@nestjs/common'
import { CreateExampleDto } from './dto/create-example.dto'

@Controller('example')
export class ExampleController {
    constructor() {}

    @Post()
    create(@Body() createExampleDto: CreateExampleDto): void {
        console.log('body -> ', createExampleDto)
    }
}
