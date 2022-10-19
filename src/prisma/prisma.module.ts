import { Module } from '@nestjs/common';

import { Prisma } from '@prisma-module/index';

@Module({
  providers: [Prisma],
})
export class PrismaModule {}
