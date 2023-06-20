import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  /*
        constructor(private dataSource: DataSource) {
            super(User, dataSource.createEntityManager())
        }
    
        async findByCriteria<T>(column: string, value: T): Promise<User> {
            const criteria = { [column]: value, deletedAt: null };
            return this.findOne({ where: criteria });
        }
    
        updateUser(user: User, payload: any): Promise<User> {
            Object.assign(user, payload);
            return this.save(user);
        }
    
        getUsers() {
            return this.find({});
        }
    
        async deleteSoft(user: User): Promise<void> {
            await this.update({id: user.id}, { deletedAt: Date.now()})
        }
    */
}
