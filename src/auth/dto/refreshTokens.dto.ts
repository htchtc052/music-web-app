import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokensDto {
  @ApiProperty()
  tokenId: string;
  @ApiProperty()
  refreshToken: string;
}
