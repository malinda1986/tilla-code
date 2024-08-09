import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { AirportService } from './airport.service';
import { Airport } from './airport.interface';
import { ValidationPipe } from '../../shared/pipes/validation.pipe';
import { GetAirportDto } from './dto/list.dto';

@Controller()
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Get('/api/airports')
  @UsePipes(new ValidationPipe())
  async get(@Query() listAirportProps: GetAirportDto): Promise<Airport[]> {
    return this.airportService.getAirports(listAirportProps);
  }
}
