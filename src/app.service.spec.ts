import { Test, TestingModule } from '@nestjs/testing';

import { AppService } from './app.service';

describe(AppService.name, () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should be defined"', () => {
      expect(appService).toBeDefined();
    });
  });
});
