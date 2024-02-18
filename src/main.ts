import { NestFactory } from '@nestjs/core'
import { TransformInterceptor } from 'src/interceptors/transform.interceptor'
import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule)

    const port = process.env.APP_PORT || 9001

    // global prefix
    app.setGlobalPrefix('/api')

    // global interceptors
    // transform
    app.useGlobalInterceptors(new TransformInterceptor())

    await app.listen(port)
}
bootstrap()
