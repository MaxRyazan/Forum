// @ts-ignore
import store from "@/store/store.js";
import {Mutations} from "@/logic/mutations";

export class Actions {
    async sendNewPostData(){
        await fetch('http://localhost:3000/posts/new', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: store.state.title, tags: store.state.tags, subject: store.state.subject})
        })
        const mutations = new Mutations();
        mutations.clearInputFields()
    }

    async getAllPosts(){
        const posts = await fetch('http://localhost:3000/posts')
        store.state.allPosts = await posts.json()
        console.log(store.state.allPosts)
    }
}