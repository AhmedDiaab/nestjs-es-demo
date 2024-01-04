import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const DatabaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'estest',
    username: 'postgres',
    password: 'postgres_pw',
    entities: ['dist/**/*.entity.{ts,js}'],
    migrations: [join(process.cwd(), 'src', 'database', 'migrations', '*.{js|ts}')],
    // autoLoadEntities: true,
    retryAttempts: 3,
    retryDelay: 5000,
    logging: false
};

export default DatabaseConfig;

export const Source = new DataSource(DatabaseConfig as DataSourceOptions);