import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsFieldAllreadyExists implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(value: string, args: ValidationArguments) {
    const fieldName = args.property;
    return this.userService.checkFieldBusy(fieldName, value);
  }

  defaultMessage(args: ValidationArguments) {
    const [fieldName] = args.constraints;
    return `${fieldName} already exists`;
  }
}
