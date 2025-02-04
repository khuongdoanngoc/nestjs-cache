import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async getHello() {
        const cachedData = await this.cacheManager.get('myKey');
        if (cachedData) {
            return cachedData;
        }
        // Fetch data from database or other sources
        const newData = { message: 'Hello, World!' };
        // Cache the new data
        await this.cacheManager.set('myKey', newData, 60000);

        return newData;
    }
}
