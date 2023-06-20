/*
@Entity({ name: 'tokens' })
export class Token {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    user: User;

    @Column()
    refreshToken: string;
}
*/

export class Token {}
