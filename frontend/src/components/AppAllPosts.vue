<template>
    <div class="all_posts_wrapper" v-for="post in store.state.allPosts" :key="post.id">
        <div class="all_posts_wrapper_item">
            <div class="all_posts_wrapper_item-content">{{post.title}}</div>
            <div class="all_posts_wrapper_item-content">{{post.tags}}</div>
            <div class="all_posts_wrapper_item-content">{{post.subject}}</div>
        </div>
    </div>
</template>

<script setup>
import store from "@/store/store";</script>

<style scoped>
.all_posts_wrapper{
    margin-top: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
.all_posts_wrapper_item{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.all_posts_wrapper_item-content{
    margin-top: 10px;
}
</style>