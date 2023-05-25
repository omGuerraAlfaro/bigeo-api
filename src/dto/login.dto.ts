import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

export class RegisterDto {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    lastname: string;
    @ApiProperty()
    userRole: string;
}