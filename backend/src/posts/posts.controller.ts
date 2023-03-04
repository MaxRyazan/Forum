import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {PostEntity} from "./postEntity";


@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post('/new')
    async createNewPost(@Body() postEntity: PostEntity): Promise<PostEntity>{
        return await this.postsService.createNewPost(postEntity)
    }

    @Get('/:id')
    async showPost(@Param('id') id: string): Promise<PostEntity>{
        return await this.postsService.showOnePost(Number(id));
    }

    @Get()
    async showAllPosts(): Promise<PostEntity[]>{
        return await this.postsService.showAllPosts();
    }
}
