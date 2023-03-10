import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {PostEntity} from "./postEntity";


@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post('/new')
    async createNewPost(@Body() postEntity: PostEntity): Promise<PostEntity>{
        postEntity.usersWhoLiked = []
        return await this.postsService.createNewPost(postEntity)
    }

    @Get('/:id')
    async showPost(@Param('id') id: string): Promise<PostEntity>{
        return await this.postsService.showOnePost(Number(id));
    }

    @Patch()
    async updatePost(@Body()postEntity: PostEntity): Promise<PostEntity>{
        return await this.postsService.updatePost(postEntity);
    }

    @Get()
    async showAllPosts(): Promise<PostEntity[]>{
        return await this.postsService.showAllPosts();
    }
}
