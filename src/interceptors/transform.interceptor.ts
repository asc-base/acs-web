/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Request } from 'express'
import { Observable, map } from 'rxjs'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctx = _context.switchToHttp()
        const request = ctx.getRequest<Request>()

        let status = 200
        if (request.method === 'POST') status = 201

        return next.handle().pipe(map((data) => ({ code: status, message: 'success', data })))
    }
}
