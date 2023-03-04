import {BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {hash} from 'bcrypt'
import {PostEntity} from "../posts/postEntity";

@Entity({name: 'bloggers'})
export class BloggerEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    firstname: string

    @Column({nullable: false})
    lastname: string

    @Column({nullable: false})
    email: string

    @Column({nullable: false})
    password: string

    @OneToMany(() => PostEntity, post => post.author, {cascade: true})
    posts: PostEntity[]

    @BeforeInsert()
    async hashPass(){
        this.password = await hash(this.password, 10)
    }
}
