import { IsString, MaxLength } from 'class-validator';

export class UpdateLocalDto {
  @IsString()
  @MaxLength(20)
  name?: string;

  @IsString()
  @MaxLength(50)
  description?: string;

  @IsString()
  @MaxLength(30)
  latitude?: string;

  @IsString()
  @MaxLength(30)
  longitude?: string;

  @IsString()
  image?: string;
}
