import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Track } from 'src/models/track.model';
import { GetTracksFilterDto } from '../../dto/form.dto.js';

@Injectable()
export class TrackService {
    constructor(
        @InjectRepository(Track)
        private readonly trackRepository: Repository<Track>,
    ) { }

    async getTracks(filterDto: GetTracksFilterDto): Promise<Track[]> {
        const { type, userId } = filterDto;

        let query = this.trackRepository.createQueryBuilder('track');

        if (type) {
            query = query.andWhere('track.type = :type', { type });
        }

        if (userId) {
            query = query.andWhere('track.userId = :userId', { userId });
        }

        const tracks = await query.getMany();
        return tracks;
    }
}