export class CommentEntity{
    timestamp: number
    constructor(public comment: string, public author: number, public belongTo: number) {
        this.timestamp = Date.now();
    }
}