import { Injectable } from '@nestjs/common';
import { CreateUserInput, CreateUserOptions } from './dto/createUserInput.type';
import { v4 as uuid } from 'uuid';
import * as argon2 from 'argon2';
import { UpdateUserInfoDto } from './dto/updateUserInfo.dto';
import { PrismaService } from 'nestjs-prisma';
import { User } from '@prisma/client';
import { EmailService } from '../email/email.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  usersTest() {
    return this.prisma.user.findMany({});
  }

  async createUser(
    createUserInput: CreateUserInput,
    createUserOptions: CreateUserOptions,
  ): Promise<User> {
    const hashedPassword = await argon2.hash(createUserInput.password);
    createUserInput.password = hashedPassword;

    let user;
    if (createUserOptions.createActivated) {
      user = await this.prisma.user.create({
        data: { password: hashedPassword, ...createUserInput },
      });
    } else {
      const activationToken: string = uuid();
      user = await this.prisma.user.create({
        data: { password: hashedPassword, activationToken, ...createUserInput },
      });

      await this.emailService.sendActivationEmail(user);
    }

    return user;
  }

  getUserById(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  findBySlug(slug: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        slug,
      },
    });
  }

  async checkFieldBusy(
    fieldName: string,
    fieldValue: string,
  ): Promise<boolean> {
    return (await this.prisma.user.count({
      where: {
        [fieldName]: fieldValue,
      },
    }))
      ? false
      : true;
  }

  updateUserInfo(
    user: User,
    updateUserInfoDto: UpdateUserInfoDto,
  ): Promise<User> {
    // return this.repository.updateUser(user, updateUserInfoDto);
    return Promise.resolve({} as User);
  }

  async deleteUser(user: User): Promise<void> {
    // await this.repository.deleteSoft(user);
  }

  async activateUser(activationToken: string): Promise<boolean> {
    //const user = await this.repository.findByCriteria<string>(
    // 'activationToken',
    //  activationToken,
    //  );
    //    if (!user) {
    //    return false;
    //}

    //    await this.repository.updateUser(user, { activatedAt: new Date() });

    return true;
  }

  async removeToken(refreshToken: string): Promise<void> {
    //    await this.tokenRepository.delete({ refreshToken });
  }

  async getUserByRefreshToken(refreshToken: string): Promise<User | null> {
    //const tokenData = await this.tokenRepository.findOne({
    //where: { refreshToken },
    //});
    //if (!tokenData) {
    //return null;
    //}
    //  return this.getUserById(tokenData.user?.id);
    return Promise.resolve({} as User);
  }

  isUserItself(resource: User, actor: User): boolean {
    if (!actor) return false;
    return resource?.id.toString() === actor.id.toString();
  }
}
