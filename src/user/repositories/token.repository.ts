import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenRepository {
  /*   constructor(private dataSource: DataSource) {
           super(Token, dataSource.createEntityManager())
       }
   
   
       async saveRefreshToken(user: User, refreshToken: string): Promise<void> {
           const tokenData = await this.findOne({where: {user}});
   
           if (tokenData) {
               tokenData.refreshToken = refreshToken;
               await this.save(tokenData);
           } else {
               await this.insert({user, refreshToken});
           }
       }*/
}
