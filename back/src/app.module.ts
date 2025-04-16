import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth.module';
import { UsersModule } from './modules/users.module';
import { TrainsModule } from './modules/trains.module';

@Module({
    imports: [
        AuthModule,
        UsersModule,
        TrainsModule,
    ],
})
export class AppModule {}
