<template>
    <div class="all_posts_wrapper">
        <div class="all_posts_wrapper_item" v-for="post in store.state.allPosts" :key="post.id" @click="$router.push(`/posts/${post.id}`)">
            <div class="all_posts_wrapper_item_inner">
                <div class="all_posts_wrapper_item_inner-likes">
                    <div>
                        <img class="all_posts_img" src="@/assets/images/like_picture.png" alt="like">
                        <span>{{post.likes}}</span>
                    </div>
                    <div class="all_posts_views">Просмотров: {{post.views}}</div>
                </div>
                <div class="all_posts_wrapper_item-content">{{post.title}}</div>
                <div class="all_posts_wrapper_item-content">{{post.tags}}</div>
                <div class="all_posts_wrapper_item-content">{{post.subject}}</div>
            </div>
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
  grid-template-columns: repeat(1, minmax(280px, 1fr));
  gap: 20px;
}
.all_posts_wrapper_item_inner-likes{
  position: relative;
  display: flex;
  & span {
    position: absolute;
    left: 70px;
    top: 10px;
  }
}
.all_posts_img{
  left: 20px;
  position: absolute;
  width: 30px;
  height: 30px;
}
.all_posts_views{
  position: absolute;
  right: 20px;
}
.all_posts_wrapper_item_inner{
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(180deg, transparent, white 50%);
  }
}
.all_posts_wrapper_item {
  background-color: rgb(11, 65, 68);
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 20px;
  padding: 5px;
  &:hover {
    cursor: pointer;
    background-color: rgb(22, 188, 199);
  }
}

.all_posts_wrapper_item-content {
  margin-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  line-height: 140%;

}
</style>