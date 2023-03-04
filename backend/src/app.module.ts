import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BloggerEntity} from "./blogger/bloggerEntity";
import {PostEntity} from "./posts/postEntity";
import {BloggerModule} from './blogger/blogger.module';
import {PostsModule} from "./posts/posts.module";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'bestuser',
    database: 'blog_nestjs',
    entities: [BloggerEntity, PostEntity],
    synchronize: true,
  }), BloggerModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
