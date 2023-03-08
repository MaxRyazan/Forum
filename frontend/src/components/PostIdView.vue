<template>
    <div class="one_post_container">
        <div class="one_post_nav">
            <a href="/">Главная</a>
            <span>/ Пост № {{store.state.onePost.id}}</span>
        </div>
        <div class="one_post_wrapper">
            <div>{{store.state.onePost.title}}</div>
            <div>{{store.state.onePost.tags}}</div>
            <div>{{store.state.onePost.subject}}</div>
            <hr />
            <div v-if="store.state.commentToOnePost.length">
                <div class="comment_title">
                    <h5>Комментарии:</h5>
                </div>
                <div v-for="comment in store.state.commentToOnePost" :key="comment.id" class="one_post_comment">
                    <AppCommentData :comment="comment"/>
                </div>
            </div>
        </div>
        <div class="one_post_footer">
            <div class="one_post_like">
                <div class="one_post_like_text">
                    <h4>Понравилась статья?</h4>
                </div>
                <div class="one_post_like_img">
                    <img @click="signLike(store.state.onePost)" class="one_post_like_img_item" src="@/assets/images/like_picture.png" alt="like">
                    <span>{{likes}}</span>
                </div>
            </div>
            <div class="one_post_views">
                <h4>Просмотров: {{store.state.onePost.views}}</h4>
            </div>
        </div>
    </div>

</template>

<script setup>
import {useRoute} from 'vue-router';
import {Actions} from "@/logic/actions";
import {computed, onMounted} from "vue";
import store from "@/store/store";
import AppCommentData from "@/components/AppCommentData.vue";

const actions = new Actions();

onMounted(async () => {
    const route = useRoute();
    await actions.getOnePost(String(route.params.id))
    await actions.refreshViews(store.state.onePost)
    await actions.getCommentsToOnePost(store.state.onePost.id)
})

const likes = computed(() => {
    return store.state.onePost.likes > 0 ? store.state.onePost.likes : ''
})

function signLike(postEntity){
    actions.signLike(postEntity)
}

</script>

<style scoped lang="scss">
template{
}
.one_post_container{
  border: 1px solid rgb(21, 145, 153);
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 100px;
}
.one_post_wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 50px;
  padding: 20px;
  background-color: white;
}
.comment_title{
  display: inline-block;
  position: absolute;
  right: 50%;
  font-family: cursive;
  font-size: 18px;
  color: rgb(35, 142, 166);
}
.one_post_nav{
  margin-top: 150px;
  background-color: white;
  padding: 20px;
  border-radius: 20px 20px 0 0;
  & a{
    color: rgb(35, 142, 166);
    text-decoration: none;
  }
}
.one_post_footer{
  border-radius: 0 0 20px 20px;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-around;
  & h4 {
    cursor: default;
    font-weight: 600;
  }
}

.one_post_comment{
  display: flex;
  justify-content: end;
}

.one_post_like_text {
  text-align: center;
}

.one_post_like {
  display: flex;
  align-items: center;
}

.one_post_like_img {
  width: 30px;
  height: 30px;
  position: relative;
  & img {
    width: 100%;
    position: absolute;
    bottom: 5px;
    cursor: pointer;
    left: 20px;
    &:active{
      transform: scale(1.1);
    }
  }
  & span{
    width: 30px;
    position: absolute;
    bottom: 5px;
    right: -60px;
    text-align: center;
    cursor: default;
  }
}
</style>