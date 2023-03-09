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
                // @ts-ignore
                belongTo: true,
                // @ts-ignore
                author:  true

            }, where: {
                belongTo: {
        // @ts-ignore
                    id: id
                }
            }
        })
    }

    async createNewComment(comment: CommentEntity) {
        console.log(comment)
        return this.commentRepository.save(comment)
    }
}
