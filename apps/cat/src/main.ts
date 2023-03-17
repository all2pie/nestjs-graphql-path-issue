import { NestFactory } from '@nestjs/core';
import { CatModule } from './cat.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    CatModule,
    new FastifyAdapter(),
  );
  await app.listen(3000);
}
bootstrap();
