import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { TrainsService } from '../services/trains.service';
import { CreateTrainDto } from '../dto/create-train.dto';

@Controller('trains')
export class TrainsController {
    constructor(private readonly trainsService: TrainsService) {}

    @Post()
    create(@Body() dto: CreateTrainDto) {
        return this.trainsService.create(dto);
    }

    @Get()
    findAll() {
        return this.trainsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.trainsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: Partial<CreateTrainDto>) {
        return this.trainsService.update(+id, dto);
    }



    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.trainsService.remove(+id);
    }
}
