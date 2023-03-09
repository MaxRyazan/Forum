export class CommentEntity{
    timestamp: number
    constructor(public comment: string, public authorId: number, public belongToId: number) {
        this.timestamp = Date.now();
    }
}