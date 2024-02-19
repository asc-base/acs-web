/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { Response } from 'express'

const { INTERNAL_SERVER_ERROR } = HttpStatus

const INTERNAL_SERVER_ERROR_MSG = 'Internal server error'

// TODO: fix return message and error response
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const status =
            exception instanceof HttpException ? exception.getStatus() : INTERNAL_SERVER_ERROR

        // switch (status) {
        //     case BAD_REQUEST:
        //         message = `Validate Failed : ${JSON.stringify(exception.getResponse())}`
        //         break
        //     case UNAUTHORIZED:
        //         message = `You're not authentication`
        //         break
        //     case FORBIDDEN:
        //         message = `You're not authorized`
        //         break
        //     case NOT_FOUND:
        //         message = `Not found`
        //         break
        //     case PAYLOAD_TOO_LARGE:
        //         message = `File too large`
        //         break
        //     default:
        //         message = `Internal Server Error`
        //         break
        // }

        response.status(status).json({
            code: status,
            message: exception.getResponse().message || INTERNAL_SERVER_ERROR_MSG,
            errors: exception.getResponse().error || INTERNAL_SERVER_ERROR_MSG,
        })
    }
}
