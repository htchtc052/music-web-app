import { Exclude, Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Genders, User } from '@prisma/client';

export class UserDto implements User {
  @ApiProperty({ required: true })
  @Expose()
  id: number;

  @ApiProperty({ required: true })
  @Expose()
  username: string;

  @ApiProperty({ required: true })
  @Expose()
  email: string;

  @ApiProperty({ required: true })
  @Expose()
  slug: string;

  @ApiProperty()
  @Expose()
  firstname: string;

  @ApiProperty()
  @Expose()
  lastname: string;

  @ApiProperty()
  @Expose()
  gender: Genders;

  @ApiProperty()
  @Expose()
  birthday: Date;

  @Expose()
  description: string;

  @Expose({ groups: ['readPrivateFields'] })
  private: boolean;

  @Expose({ groups: ['readPrivateFields'] })
  hiddenDescription: string;

  @Expose()
  isOwner: boolean;

  @Exclude()
  activationToken: string;

  @Exclude()
  activatedAt: Date;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  deletedAt: Date;

  @Exclude()
  isAdmin: boolean;

  @Exclude()
  password: string;

  constructor(user: User) {
    console.log('!!!', typeof this);
    Object.assign(this, user);
  }
}
