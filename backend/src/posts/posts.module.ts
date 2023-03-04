import {Module} from '@nestjs/common';
import {PostsController} from "./posts.controller";
import {PostsService} from './posts.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostEntity} from "./postEntity";

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity])],
    controllers: [PostsController],
    providers: [PostsService]
})
export class PostsModule {}
