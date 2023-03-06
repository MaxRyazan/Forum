export class CommentEntity{
    constructor(public id: number, public timestamp: number, public comment: string) {
        this.timestamp = Date.now();
    }
}