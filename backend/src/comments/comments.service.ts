// @ts-nocheck
import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {CommentEntity} from "./CommentEntity";
import {Repository} from "typeorm";


@Injectable()
export class CommentsService {
    constructor(@InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>) {}


    async findCommentsOfOnePost(id: number): Promise<CommentEntity[]>{
        return await this.commentRepository.find({
            relations: {
                belongTo: true,
                author:  true
            }, where: {
                belongTo: {
                    id: id
                }
            }
        })
    }

    async createNewComment(comment: CommentEntity) {
        return this.commentRepository.save(comment)
    }
}
