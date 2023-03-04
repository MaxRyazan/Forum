import {Body, Controller, Get, HttpException, HttpStatus, Param, Post} from '@nestjs/common';
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

    @Get()
    async showAllPosts(): Promise<PostEntity[]>{
        console.log(await this.postsService.showAllPosts())
        return await this.postsService.showAllPosts();
    }
}
