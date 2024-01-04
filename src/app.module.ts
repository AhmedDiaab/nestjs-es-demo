import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { LogModule } from './log/log.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from './database/migrations/database.config';

@Module({
  imports: [
    LogModule,
    TypeOrmModule.forRoot(DatabaseConfig),
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
