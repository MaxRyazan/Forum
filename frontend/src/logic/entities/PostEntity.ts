export class PostEntity {
    public id: number;
    public title: string;
    public tags: string;
    public subject: string;
    public views: number;
    public likes: number;
    public usersWhoLiked: string[]

    constructor(id: number, title: string, tags: string, subject: string, views: number, likes: number, usersWhoLiked: string[]) {
        this.id = id;
        this.title = title
        this.tags = tags;
        this.subject = subject;
        this.views = views;
        this.likes = likes;
        this.usersWhoLiked = usersWhoLiked
    }
}
