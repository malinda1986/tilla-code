import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../shared/services/prisma.service';
import { Airport } from './airport.interface';
import { GetAirportDto } from './dto/list.dto';

@Injectable()
export class AirportService {
  constructor(private readonly prisma: PrismaService) {}

  buildWhereCondition(params: GetAirportDto): Prisma.AirportsWhereInput {
    const searchTerm = params.search;
    if (!searchTerm) {
      return {};
    } else {
      return {
        OR: [
          {
            name: {
              contains: searchTerm,
              mode: 'insensitive', // Optional: makes the search case-insensitive
            },
          },
          {
            iata: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
          {
            city: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
          {
            country: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
        ],
      };
    }
  }
  async getAirports(params: GetAirportDto): Promise<Airport[]> {
    return this.prisma.airports.findMany({
      where: this.buildWhereCondition(params),
      take: +params.pageSize || undefined, // Number of items per page
      skip:
        params.page && params.pageSize
          ? +params.pageSize * (+params.page - 1)
          : undefined, // Skip items to get to the correct page
    });
  }
}
