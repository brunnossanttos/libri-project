export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  googleId?: string;
  appleId?: string;
}
