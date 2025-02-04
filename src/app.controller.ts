import { Controller, Get, Inject, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
    constructor(
        private readonly appService: AppService,
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    ) {}

    @Get()
    async getHello() {
        return await this.appService.getHello();
    }
}
