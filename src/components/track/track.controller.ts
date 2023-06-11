import { Controller, Get, Query } from '@nestjs/common';
import { GetTracksFilterDto } from '../../dto/form.dto.js';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  async getTracks(@Query() filterDto: GetTracksFilterDto) {
    return await this.trackService.getTracks(filterDto);
  }
}