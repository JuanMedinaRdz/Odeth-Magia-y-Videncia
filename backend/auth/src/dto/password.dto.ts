import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength, IsStrongPassword } from "class-validator";

export class PasswordDTO {
  @ApiProperty({
    description: "Password",
    example: "My-$upp3r-Secret-pa$$w0rd",
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: "Minimum lenght is 8" })
  @IsStrongPassword()
  password: string;
}
