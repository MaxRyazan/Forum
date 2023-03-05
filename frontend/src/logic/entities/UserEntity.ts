export class UserEntity{
    constructor(public username: string, public isLiked: boolean, isViewed: boolean, public email?: string) {}
}