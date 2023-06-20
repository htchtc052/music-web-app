import {ApiProperty} from '@nestjs/swagger';
import {IsOptional} from 'class-validator';

//import { Genders } from '../models/user.entity';

export class UpdateUserInfoDto {
  @ApiProperty()
  @IsOptional()
  firstname: string;

  @ApiProperty()
  @IsOptional()
  lastname: string;

  // @ApiProperty()
  //  @IsEnum(Genders)
  //  gender: Genders;

  @ApiProperty()
  @IsOptional()
  birthday: Date;

  @ApiProperty()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsOptional()
  hiddenDescription: string;

  @ApiProperty()
  @IsOptional()
  private: boolean;
}
