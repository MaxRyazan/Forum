import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {PostEntity} from "../posts/postEntity";
import {BloggerEntity} from "../blogger/bloggerEntity";

@Entity({name: 'comments'})
export class CommentEntity{
    @PrimaryGeneratedColumn()
    public id: number

    @Column({default: Date.now()})
    private timestamp: string

    @Column({nullable: false, type: "text"})
    public comment: string

    @ManyToOne(() => PostEntity, postEntity => postEntity.comments)
    belongTo: PostEntity

    @ManyToOne(() => BloggerEntity, bloggerEntity => bloggerEntity.comments)
    author: BloggerEntity
}