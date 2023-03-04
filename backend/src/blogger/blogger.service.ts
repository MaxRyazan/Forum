import {Injectable} from '@nestjs/common';
import {BloggerEntity} from "./bloggerEntity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {BloggerInfoDto} from "./dto/bloggerInfo.dto";

@Injectable()
export class BloggerService {

    constructor(@InjectRepository(BloggerEntity)
    private readonly bloggerRepository: Repository<BloggerEntity>) {}

    async createNewBlogger(bloggerEntity: BloggerEntity): Promise<BloggerEntity> {
        const newBlogger = new BloggerEntity()
        Object.assign(newBlogger, bloggerEntity)
        return await this.bloggerRepository.save(newBlogger)
    }

    async showBloggerInfo(id: number): Promise<BloggerInfoDto>{
        const blogger = await this.bloggerRepository.findOne({where:{id}})
        console.log(blogger)
        return {
            "firstname": blogger.firstname,
            "lastname": blogger.lastname,
            "email": blogger.email,
            "posts": blogger.posts
        }
    }
}
