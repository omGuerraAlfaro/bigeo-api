import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';


class GeometryDto {
    @ApiProperty()
    gid: number;

    @ApiProperty()
    type: string;

    @ApiProperty({ type: [Number] })
    coordinates: number[];
}

class PropertiesDto {
    @ApiProperty()
    propid: number;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    dateTime: Date;

    @ApiProperty({ nullable: true })
    formSprinkler: string;

    @ApiProperty({ nullable: true })
    formDamage: string;

    @ApiProperty({ nullable: true })
    formHumidity: string;

    @ApiProperty({ nullable: true })
    formCompaction: string;

    @ApiProperty({ nullable: true })
    formFauna: string;

    @ApiProperty({ nullable: true })
    formCount: string;

    @ApiProperty({ nullable: true })
    formDiseases: string;

    @ApiProperty({ nullable: true })
    formGirdling: string;

    @ApiProperty({ nullable: true })
    formPlague: string;
}

export class FormDto {
    @ApiProperty()
    form_id: number;

    @ApiProperty()
    type: string;

    @ApiProperty({ nullable: true })
    image: string;

    @ApiProperty({ type: PropertiesDto })
    properties: PropertiesDto;

    @ApiProperty({ type: GeometryDto })
    geometry: GeometryDto;
}

export class GetTracksFilterDto {
    @IsOptional()
    @IsString()
    type?: string;

    @IsOptional()
    @IsString()
    userId?: string;
}