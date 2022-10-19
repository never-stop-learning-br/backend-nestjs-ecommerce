import { Module } from '@nestjs/common';

import { Prisma, PrismaModule } from '@prisma-module/index';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService, Prisma],
})
export class AppModule {}
