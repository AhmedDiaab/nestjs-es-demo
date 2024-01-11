import { Module, OnModuleInit } from '@nestjs/common';
import { ElasticsearchModule as ElasticsearchBaseModule, ElasticsearchService } from '@nestjs/elasticsearch';
import { randomUUID } from 'crypto';

@Module({
    imports: [ElasticsearchBaseModule.register({
        node: 'http://localhost:9200',
        generateRequestId: () => randomUUID(),
        
    })],
    providers: [],
    exports: [ElasticsearchBaseModule]
})
export class ElasticSearchModule implements OnModuleInit {
    constructor(private readonly client: ElasticsearchService) { }
    onModuleInit() { }
};