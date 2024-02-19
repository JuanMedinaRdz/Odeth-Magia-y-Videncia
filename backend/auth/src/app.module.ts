import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { JwtModule } from "@nestjs/jwt";
import { UserController } from './user/user.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid("development", "production", "test").default("developmenttt"),
        PASSWORD: Joi.string().not().empty(),
      }),
    }),
    JwtModule.register({
      global: true,
      secret: "my-super.jwt-secret",
      signOptions: { expiresIn: "10m" },
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
