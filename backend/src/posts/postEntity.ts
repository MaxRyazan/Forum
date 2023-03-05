import {BloggerEntity} from "../blogger/bloggerEntity";
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

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
}