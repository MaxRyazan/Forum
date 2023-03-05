export class PostEntity {
    public id: number;
    public title: string;
    public tags: string;
    public subject: string;
    public views: number;
    public likes: number;

    constructor(id: number, title: string, tags: string, subject: string, views: number, likes: number) {
        this.id = id;
        this.title = title
        this.tags = tags;
        this.subject = subject;
        this.views = views;
        this.likes = likes;
    }
}
