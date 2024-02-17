import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule)

    const port = process.env.APP_PORT || 9001

    await app.listen(port)
}
bootstrap()
