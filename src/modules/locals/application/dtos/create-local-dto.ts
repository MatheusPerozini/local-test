import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateLocalDto {
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  description: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  latitude: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  longitude: string;

  @IsString()
  image?: string;
}
