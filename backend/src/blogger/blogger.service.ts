import {Injectable} from '@nestjs/common';
import {BloggerEntity} from "./bloggerEntity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class BloggerService {

    constructor(@InjectRepository(BloggerEntity)
    private readonly bloggerRepository: Repository<BloggerEntity>) {}

    async createNewBlogger(bloggerEntity: BloggerEntity): Promise<BloggerEntity> {
        const newBlogger = new BloggerEntity()
        Object.assign(newBlogger, bloggerEntity)
        return await this.bloggerRepository.save(newBlogger)
    }

    async showBloggerInfo(username: string): Promise<BloggerEntity>{
        return await this.bloggerRepository.findOneBy({username})
    }
}
