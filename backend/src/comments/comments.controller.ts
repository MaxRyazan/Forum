import {Controller, Get, Param} from '@nestjs/common';
import {CommentsService} from "./comments.service";

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentService: CommentsService) {}

    @Get('/:id')
    async getAll(@Param('id') id: number){
        return await this.commentService.findCommentsOfOnePost(id)
    }
}
