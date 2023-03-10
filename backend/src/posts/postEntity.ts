import {BloggerEntity} from "../blogger/bloggerEntity";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

import {CommentEntity} from "../comments/CommentEntity";

@Entity({name: 'posts'})
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => BloggerEntity, author => author.posts)
    author: BloggerEntity

    @Column({nullable: false})
    title: string

    @Column({nullable: false})
    tags: string

    @Column({nullable: false, type: "text"})
    subject: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({default: 0})
    views: number

    @Column({default: 0})
    likes: number

    @Column({type: "json"})
    usersWhoLiked: string[]

    @OneToMany(() => CommentEntity, comment => comment.belongTo, {cascade: true})
    comments: CommentEntity[]
}