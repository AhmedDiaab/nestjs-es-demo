import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

const DatabaseConfig: TypeOrmModuleOptions = {
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
};

export default DatabaseConfig;