// @ts-ignore
import store from "@/store/store.js";
import {Mutations} from "@/logic/mutations";
import {baseURL} from '@/env'
// @ts-ignore
import {PostEntity} from "@/logic/PostEntity";


export class Actions {
    async sendNewPostData(){
        const newPost = { title: store.state.title, tags: store.state.tags, subject: store.state.subject }
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
}