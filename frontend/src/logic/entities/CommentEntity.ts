export class CommentEntity{
    constructor(public id: number, public timestamp: number, public comment: string, public authorId: number, public belongToId: number) {
        this.timestamp = Date.now();
    }
}