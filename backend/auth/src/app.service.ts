import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserDTO } from "./dto/user.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}

  private readonly admin = {
    username: "maria",
    password: process.env.PASSWORD,
  };

  async validateUser(user: UserDTO): Promise<{ access_token: string }> {
    if (user.name.toLowerCase().trim() !== this.admin.username) throw new UnauthorizedException();
    if (user.password !== this.admin.password) throw new UnauthorizedException();

    const payload = { user: this.admin.username, sub: 1 };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  setPassword(pwd: string): void {
    this.admin.password = pwd;
  }
}
