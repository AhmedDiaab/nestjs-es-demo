import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class AppService {
  constructor(private readonly es: ElasticsearchService) {

  }
  async hi() {
    const s = await this.es.healthReport()
    
    return s;
  }
}
