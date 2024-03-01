import { IsNotEmpty, IsString } from 'class-validator'

export class CreateExampleDto {
    @IsNotEmpty()
    @IsString()
    name?: string

    @IsNotEmpty()
    @IsString()
    desc?: string
}
