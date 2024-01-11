import { ecsFormat } from '@elastic/ecs-winston-format';
import * as winston from 'winston';
export const Logger = winston.createLogger({
    format: ecsFormat({
        serviceName: 'test-es-nest-logging',
        convertReqRes: true,
    }),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs.log', level: 'info' }),
    ]
});