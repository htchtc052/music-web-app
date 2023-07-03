import { RegisterDto } from '../../auth/types/register.dto';
import { OmitType } from '@nestjs/swagger';

export class CreateUserInput extends OmitType(RegisterDto, [
  'passwordConfirm',
] as const) {}

//export interface CreateUserInput extends Omit<RegisterDto, 'passwordConfirm'> {}

export type CreateUserOptions = {
  readonly createActivated: boolean;
};
