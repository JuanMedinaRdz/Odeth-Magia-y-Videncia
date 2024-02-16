import { Injectable } from "@nestjs/common";
import { UserDTO } from "./dto/user.dto";

@Injectable()
export class AppService {
  private readonly admin = {
    username: "maria",
    password: process.env.PASSWORD,
  };

  validateUser(user: UserDTO): boolean {
    return user.name === this.admin.username && user.password === this.admin.password;
  }
}
