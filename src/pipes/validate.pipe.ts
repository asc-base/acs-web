/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata): Promise<any> {
        if (!metatype || !this.toValidate(metatype)) {
            return value
        }
        const object = plainToClass(metatype, value)
        const errors = await validate(object)
        if (errors.length > 0) {
            const message = errors.reduce(
                (p, c) => {
                    p[c?.property] = [...Object.values(c.constraints ?? {})]
                    return p
                },
                {} as { [index: string]: string[] },
            )

            throw new BadRequestException(message, message)
        }
        return value
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object]
        return !types.includes(metatype)
    }
}
