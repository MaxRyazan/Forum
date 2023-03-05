<template>
    <div class="all_posts_wrapper">
        <div class="all_posts_wrapper_item" v-for="post in store.state.allPosts" :key="post.id">
            <div class="all_posts_wrapper_item-content">{{post.title}}</div>
            <div class="all_posts_wrapper_item-content">{{post.tags}}</div>
            <div class="all_posts_wrapper_item-content">{{post.subject}}</div>
        </div>
    </div>
</template>

<script setup>
import store from "@/store/store";</script>

<style scoped lang="scss">
.all_posts_wrapper {
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(280px, 450px));
  grid-auto-rows: 300px;
  gap: 20px;
}

.all_posts_wrapper_item {
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 3px 4px 4px 3px rgb(221, 221, 221);
  border-radius: 20px;
  padding: 40px;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(180deg, transparent, white 50%);
  }
  &:hover {
    box-shadow: 3px 4px 4px 3px rgb(67, 128, 128);
    cursor: pointer;
  }
}

.all_posts_wrapper_item-content {
  margin-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  line-height: 120%;

}
</style>