import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { LogModule } from './log/log.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    LogModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'estest',
      username: 'postgres',
      password: 'postgres_pw',
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: [join(__dirname, '..', '..', '..', 'src', 'database', 'migrations', '*.{js|ts}')],
      // autoLoadEntities: true,
      retryAttempts: 3,
      retryDelay: 5000,
      logging: false
    }),
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
