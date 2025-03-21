import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Cadastro de profissionais da Saúde')
  .setDescription('Para profissionais da saúde!')
  .setVersion('1.0')
  .addTag('seila')
  .build()
  app.useGlobalPipes(new ValidationPipe)
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app,document)
  await app.listen(3000);
}
bootstrap();
