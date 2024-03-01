import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ExampleModule } from './example/example.module'
import { HealthModule } from './health/health.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        HealthModule,
        ExampleModule,
    ],
})
export class AppModule {}
