import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {BloggerService} from "./blogger.service";
import {BloggerEntity} from "./bloggerEntity";

@Controller('blogger')
export class BloggerController {
    constructor(private readonly bloggerService: BloggerService) {}

    @Post('/new')
    async createNewBlogger(@Body() bloggerEntity: BloggerEntity): Promise<BloggerEntity>{
        return await this.bloggerService.createNewBlogger(bloggerEntity)
    }

    @Get('/:username')
    async showBloggerInfo(@Param('username') username: string): Promise<BloggerEntity>{
        return await this.bloggerService.showBloggerInfo(username)
    }
}
