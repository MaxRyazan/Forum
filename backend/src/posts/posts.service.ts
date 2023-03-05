import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {PostEntity} from "./postEntity";
import {Repository} from "typeorm";

@Injectable()
export class PostsService {
    constructor(@InjectRepository(PostEntity)
    private readonly postsRepository: Repository<PostEntity>) {}

    async createNewPost(postEntity: PostEntity): Promise<PostEntity>{
        const newPost = new PostEntity();
        Object.assign(newPost, postEntity)
        return await this.postsRepository.save(newPost)
    }

    async showOnePost(id: number): Promise<PostEntity> {
        return await this.postsRepository.findOne({where:{id}})
    }

    async showAllPosts(): Promise<PostEntity[]> {
        return await this.postsRepository.find()
    }

    async findByTitle(title){
        return await this.postsRepository.findOne({where:{title}})
    }

    async updatePost(postEntity: PostEntity) {
        console.log(postEntity)
        return await this.postsRepository.save(postEntity)
    }
}
