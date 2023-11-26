import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { Cat } from './entities/cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedModule } from '../breed/breed.module';
import { BreedService } from '../breed/breed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cat]), BreedModule, AuthModule],
  controllers: [CatsController],
  providers: [CatsService, BreedService],
})
export class CatsModule {}
