import { Module } from '@nestjs/common';
import { CatsController } from './controllers/cats.controller';

@Module({
  controllers: [CatsController],
  providers: [],
  exports: [],
})
export class BackendCatsModule {}
