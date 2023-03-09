import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PostEntity} from "../posts/postEntity";
import {CommentEntity} from "../comments/CommentEntity";

@Entity({name: 'bloggers'})
export class BloggerEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    username: string

    @OneToMany(() => PostEntity, post => post.author, {cascade: true})
    posts: PostEntity[]

    @OneToMany(() => CommentEntity, comment => comment.author)
    comments: CommentEntity[]

}
