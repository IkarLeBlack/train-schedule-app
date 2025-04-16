import { IsOptional, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTrainDto {
    @IsOptional()
    @IsString()
    trainNumber?: string;

    @IsString()
    direction!: string;

    @Type(() => Date)
    @IsDate()
    departure!: Date;

    @Type(() => Date)
    @IsDate()
    arrival!: Date;

    @IsString()
    station!: string;
}
