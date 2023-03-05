<template>
    <div class="one_post_nav">
        <a href="/">Главная</a>
        <span>/ Пост № {{store.state.onePost.id}}</span>
    </div>
    <div class="one_post_wrapper">
        <div>{{store.state.onePost.title}}</div>
        <div>{{store.state.onePost.tags}}</div>
        <div>{{store.state.onePost.subject}}</div>
    </div>
    <div class="one_post_footer">
        <div class="one_post_like">
            <div class="one_post_like_text">
                <h4>Понравилась статья?</h4>
            </div>
            <div class="one_post_like_img">
                <img @click="store.state.onePost.likes++" class="one_post_like_img_item" src="@/assets/images/like_picture.png" alt="like">
                <span>{{likes}}</span>
            </div>
        </div>
        <div class="one_post_views">
            <h4>Просмотров: {{store.state.onePost.views}}</h4>
        </div>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {Actions} from "@/logic/actions";
import {computed, onMounted} from "vue";
import store from "@/store/store";

onMounted(async () => {
    const route = useRoute();
    const actions = new Actions();
    await actions.getOnePost(String(route.params.id))
    await actions.refreshViews(store.state.onePost)
})

const likes = computed(() => {
    return store.state.onePost.likes > 0 ? store.state.onePost.likes : ''
})

</script>

<style scoped lang="scss">
.one_post_wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 50px;
  padding: 20px;
}

.one_post_footer{
  display: flex;
  justify-content: space-around;
  & h4 {
    cursor: default;
    font-weight: 600;
  }
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
    bottom: -15px;
    left: 20px;
    text-align: center;
    cursor: default;
  }
}
</style>