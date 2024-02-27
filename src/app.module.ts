import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from 'src/prisma/prisma.module'
import { ExampleModule } from './example/example.module'
import { HealthModule } from './health/health.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        HealthModule,
        ExampleModule,
        PrismaModule,
    ],
})
export class AppModule {}
