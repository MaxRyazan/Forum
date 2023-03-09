import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CommentsService} from "./comments.service";
import {CommentEntity} from "./CommentEntity";

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentService: CommentsService) {}

    @Get('/:id')
    async getAll(@Param('id') id: number){
        return await this.commentService.findCommentsOfOnePost(id)
    }

    @Post('/new')
    async createNewComment(@Body() comment: CommentEntity){
        return await this.commentService.createNewComment(comment)
    }
}
