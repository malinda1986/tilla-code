import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { AirportModule } from './module/airport/airport.module';

@Module({
  imports: [SharedModule, AirportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
