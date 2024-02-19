import { Body, Controller, ForbiddenException, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { UserDTO } from "./dto/user.dto";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("login")
  async login(@Body() user: UserDTO): Promise<{ access_token: string }> {
    try {
      return await this.appService.validateUser(user);
    } catch (error) {
      throw new ForbiddenException();
    }
  }
}
