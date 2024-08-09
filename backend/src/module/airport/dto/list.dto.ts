import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetAirportDto {
  @ApiPropertyOptional()
  readonly search: string;

  @ApiPropertyOptional()
  readonly page: number;

  @ApiPropertyOptional()
  readonly pageSize: number;
}
