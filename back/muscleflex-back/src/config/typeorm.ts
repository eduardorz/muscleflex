import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { Appointment } from 'src/entities/appointments.entity';
import { Class } from 'src/entities/classes.entity';
import { Plan } from 'src/entities/plans.entity';
import { User } from 'src/entities/users.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env'});

const config = {
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [User, Appointment, Class, Plan],
    migrations: ['dist/migrations/*{.js,.ts}'],
    autoLoadEntities: true,
    logging: true, 
    synchronize: false,
    dropSchema: false,
};

export default registerAs('typeorm', () => config);

export const connectionSource = new DataSource(config as DataSourceOptions);
