import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthReportResponse } from '@elastic/elasticsearch/lib/api/types';
import { LogService } from './log/log.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly logService: LogService) { }


  @Get('log')
  async log() {
    const log = await this.logService.createLog('test log');
    return `Created log with id: ${log.id}`;

  }

  @Get()
  getHello(): Promise<HealthReportResponse> {
    return this.appService.hi();
  }



}
