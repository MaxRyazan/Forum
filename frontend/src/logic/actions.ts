// @ts-nocheck
import store from "@/store/store.js";
import {Mutations} from "@/logic/mutations";
import {baseURL} from '@/env'
import {PostEntity} from "@/logic/entities/PostEntity";
import {CommentEntity} from "@/logic/entities/CommentEntity";


export class Actions {
    async sendNewPostData(){
        const author = JSON.parse(localStorage.getItem('user'))
        const newPost = { title: store.state.title, tags: store.state.tags, subject: store.state.subject, author }
        await fetch(baseURL + '/posts/new', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        store.state.allPosts.push(newPost)
        const mutations = new Mutations();
        mutations.clearInputFields()
    }

    async getAllPosts(){
        const posts = await fetch(baseURL + '/posts')
        store.state.allPosts = await posts.json()
    }

    async getOnePost(id: string) {
        const post = await fetch(baseURL + `/posts/${id}`)
        store.state.onePost =  await post.json()
    }

    async refreshViews(post: PostEntity) {
        post.views = post.views + 1
        await fetch(baseURL + `/posts`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
    }

    async signLike(postEntity: PostEntity){
        const user = JSON.parse(String(localStorage.getItem('user')))
        if(postEntity.usersWhoLiked === null || postEntity.usersWhoLiked.indexOf(user.username) === -1) {
            postEntity.usersWhoLiked = []
            postEntity.usersWhoLiked.push(user.username)
            postEntity.likes = postEntity.likes + 1
        } else {
            if(postEntity.usersWhoLiked !== null && postEntity.usersWhoLiked.indexOf(user.username) !== -1) {
                postEntity.usersWhoLiked.splice(0, 1)
                postEntity.likes = postEntity.likes - 1
            }
        }
        await fetch(baseURL + `/posts`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postEntity)
        })
    }

    async getCommentsToOnePost(id: number) {
       const commentsData =  await fetch(baseURL + `/comments/${id}`)
        store.state.commentToOnePost = await commentsData.json()
    }

    async checkOrCreateUser() {
        if(localStorage.getItem('user') === null) {
            const username = 'user' + Date.now()
            await fetch(baseURL + `/blogger/new`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({username})
            })
            const userData = await fetch(baseURL + `/blogger/${username}`)
            const currentUser = await userData.json()
            localStorage.setItem('user', JSON.stringify(currentUser))
        }
    }

    async createNewComment(newComment: CommentEntity) {
        await fetch(baseURL + `/comments/new`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newComment)
        })
        store.state.commentToOnePost.push(newComment)
    }
}