import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogModule } from './log/log.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from './database/config/database.config';
import { ElasticSearchModule } from './elastic-search/elastic-search.module';

@Module({
  imports: [
    // LogModule,
    // TypeOrmModule.forRoot(DatabaseConfig),
    ElasticSearchModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
