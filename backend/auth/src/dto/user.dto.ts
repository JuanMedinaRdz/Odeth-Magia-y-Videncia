import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength, IsStrongPassword } from "class-validator";

export class UserDTO {
  @ApiProperty({
    description: "Username",
    example: "jaime",
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(5, { message: "Minimum lenght is 5" })
  @MaxLength(12)
  name: string;

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
