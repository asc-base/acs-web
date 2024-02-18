/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable, map } from 'rxjs'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(map((data) => ({ message: 'success', data })))
    }
}
