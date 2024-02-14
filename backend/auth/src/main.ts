import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const GLOBAL_PREFIX = "/api/auth";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors();
  app.set("trust proxy", true);
  app.setGlobalPrefix(GLOBAL_PREFIX);
  app.useGlobalPipes(new ValidationPipe());

  // Swagger config (only for dev environment)
  if (configService.get("NODE_ENV", "development") === "development") {
    const config = new DocumentBuilder()
      .setTitle("Auth microservice")
      .setDescription("This service is meant to log in to admin dashboard")
      .build();
    const doc = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(`${GLOBAL_PREFIX}/docs`, app, doc);
  }

  await app.listen(3000);
}
bootstrap();
