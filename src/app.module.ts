import { Module } from '@nestjs/common';
import { DiariesController } from './diaries/diaries.controller';
import { DiariesService } from './diaries/diaries.service';
import { DiariesModule } from './diaries/diaries.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DiariesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5550,
      username: 'postgres',
      password: 'postgres',
      database: 'diary-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
