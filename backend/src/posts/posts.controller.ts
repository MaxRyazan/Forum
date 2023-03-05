import {Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {PostEntity} from "./postEntity";


@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post('/new')
    async createNewPost(@Body() postEntity: PostEntity): Promise<PostEntity>{
        try{
            const {title} = postEntity
            if(!await this.postsService.findByTitle(title)){
                return await this.postsService.createNewPost(postEntity)
            }
        } catch (e) {
            throw new HttpException('Пост с таким названием уже существует!', HttpStatus.BAD_REQUEST)
        }
    }

    @Get('/:id')
    async showPost(@Param('id') id: string): Promise<PostEntity>{
        return await this.postsService.showOnePost(Number(id));
    }

    @Patch()
    async updatePost(@Body()postEntity: PostEntity): Promise<PostEntity>{
        console.log(postEntity)
        return await this.postsService.updatePost(postEntity);
    }

    @Get()
    async showAllPosts(): Promise<PostEntity[]>{
        return await this.postsService.showAllPosts();
    }
}
