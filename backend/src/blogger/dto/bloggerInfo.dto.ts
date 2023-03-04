import {PostEntity} from "../../posts/postEntity";

export class BloggerInfoDto {
    firstname: string
    lastname: string
    email: string
    posts: PostEntity[]
}