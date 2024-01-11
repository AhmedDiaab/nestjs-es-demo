import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthReportResponse } from '@elastic/elasticsearch/lib/api/types';
import { LogService } from './log/log.service';
import { Logger } from './logger';
import { randomUUID } from 'crypto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get('log')
  async log() {
    const log = {id: randomUUID()};
    Logger.info(`Added Log with id ${log.id}`);
    return `Created log with id: ${log.id}`;

  }

  @Get()
  getHello(): Promise<HealthReportResponse> {
    return this.appService.hi();
  }



}
