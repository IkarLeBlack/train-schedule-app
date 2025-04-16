import { Module } from '@nestjs/common';
import { TrainsController } from '../controllers/trains.controller';
import { TrainsService } from '../services/trains.service';
import { PrismaService } from '../services/prisma.service';

@Module({
    controllers: [TrainsController],
    providers: [TrainsService, PrismaService],
})
export class TrainsModule {}
