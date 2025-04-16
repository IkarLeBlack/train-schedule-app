import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateTrainDto } from '../dto/create-train.dto';

@Injectable()
export class TrainsService {
    constructor(private prisma: PrismaService) {}

    create(data: CreateTrainDto) {
        return this.prisma.train.create({ data });
    }

    findAll() {
        return this.prisma.train.findMany();
    }

    async update(id: number, data: Partial<CreateTrainDto>) {
        return this.prisma.train.update({
            where: { id },
            data,
        });
    }
    findOne(id: number) {
        return this.prisma.train.findUnique({ where: { id } });
    }

    remove(id: number) {
        return this.prisma.train.delete({ where: { id } });
    }
}
