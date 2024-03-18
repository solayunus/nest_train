/* eslint-disable prettier/prettier */
import { MinLength, IsEmail } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;
  @MinLength(8)
  password: string;
}
