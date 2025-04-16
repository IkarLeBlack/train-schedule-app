import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: '*',
    });


    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    await app.listen(3001);
    console.log(`🚀 Server running on http://localhost:3001`);
}
bootstrap();
