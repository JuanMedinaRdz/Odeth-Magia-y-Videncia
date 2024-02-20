import { Body, Controller, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AppService } from "src/app.service";
import { AuthGuard } from "src/auth.guard";
import { PasswordDTO } from "src/dto/password.dto";

@Controller("admin")
@ApiBearerAuth("Authorization")
@ApiTags("ADMIN")
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Put("setPassword")
  @ApiResponse({
    status: 200,
    description: "Password set",
    type: PasswordDTO,
  })
  updatePassword(@Body() { password }: PasswordDTO): String {
    this.appService.setPassword(password);
    return "ok";
  }
}
