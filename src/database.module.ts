import { Module } from '@nestjs/common';

@Module({
  /*  imports: [
          TypeOrmModule.forRootAsync({
              imports: [ConfigModule],
              inject: [ConfigService],
              useFactory: async (config: ConfigService) => ({
                  type: "postgres",
                  host: config.get<string>('TYPEORM_HOST'),
                  database: config.get<string>('DB_DATABASE'),
                  username: config.get<string>('DB_USERNAME'),
                  password: config.get<string>('DB_PASSWORD'),
                  synchronize:  true,
                  autoLoadEntities: true,
                  entities: [__dirname + 'dist/!**!/!*.entity{.ts,.js}'],
                  logging: true,
              })
          })
  
      ],*/
})
export class DatabaseModule {}
