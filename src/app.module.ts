import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
    imports: [
        CacheModule.register({
            store: redisStore,
            host: 'localhost', // Redis server host
            port: 6379, // Redis server port
            ttl: 60000, // Time-to-live in milliseconds (optional)
        }),
        ProductsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
