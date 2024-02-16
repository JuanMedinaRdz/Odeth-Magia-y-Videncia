import { Body, Controller, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { UserDTO } from "./dto/user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("login")
  login(@Body() user: UserDTO): boolean {
    try {
      return this.appService.validateUser(user);
    } catch (error) {
      return false;
    }
  }
}
