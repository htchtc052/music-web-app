import { Genders } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class User implements User {
  activationToken: string;
  activatedAt: Date;
  deletedAt: Date;
  private: boolean;
  isAdmin: boolean;

  @ApiProperty()
  id: number;

  @ApiProperty({ required: true })
  username: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  slug: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: false, nullable: true })
  firstname: string | null;

  @ApiProperty({ required: false, nullable: true })
  lastname: string | null;

  @ApiProperty({ required: false, nullable: true })
  birthday: Date;

  @ApiProperty({ required: false, nullable: true })
  gender: Genders;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false })
  updatedAt: Date;
}
