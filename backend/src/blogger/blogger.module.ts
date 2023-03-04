import {Module} from '@nestjs/common';
import {BloggerEntity} from "./bloggerEntity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BloggerService} from "./blogger.service";
import {BloggerController} from "./blogger.controller";

@Module({
    imports: [TypeOrmModule.forFeature([BloggerEntity])],
    providers: [BloggerService],
    controllers: [BloggerController]
})
export class BloggerModule {}
