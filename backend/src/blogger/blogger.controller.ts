import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {BloggerService} from "./blogger.service";
import {BloggerEntity} from "./bloggerEntity";
import {BloggerDto} from "./dto/blogger.dto";
import {BloggerInfoDto} from "./dto/bloggerInfo.dto";
import {Request} from "express";

@Controller('blogger')
export class BloggerController {
    constructor(private readonly bloggerService: BloggerService) {}

    @Post('/create')
    async createNewBlogger(@Body() bloggerEntity: BloggerEntity): Promise<BloggerDto>{
        return await this.bloggerService.createNewBlogger(bloggerEntity)
    }

    @Get('/:id')
    async showBloggerInfo(@Param('id') id: string): Promise<BloggerInfoDto>{
        return await this.bloggerService.showBloggerInfo(Number(id))
    }
}
