<template>
    <div class="one_post_container">
        <AppNavigationInPost :post="store.state.onePost"/>

        <div class="one_post_wrapper">
            <div>{{store.state.onePost.title}}</div>
            <div>{{store.state.onePost.tags}}</div>
            <div>{{store.state.onePost.subject}}</div>
            <hr />

            <AppAddNewCommentInPost/>

            <div v-if="store.state.commentToOnePost.length">
                <div class="comment_title">
                    <h5>Комментарии:</h5>
                </div>
                <div v-for="comment in store.state.commentToOnePost" :key="comment.id" class="one_post_comment">
                    <AppCommentData :comment="comment"/>
                </div>
            </div>
        </div>

        <AppFooterInPost :post="store.state.onePost" @signLike="signLike"/>
    </div>

</template>

<script setup>
import {useRoute} from 'vue-router';
import {Actions} from "@/logic/actions";
import {onMounted} from "vue";
import store from "@/store/store";
import AppCommentData from "@/components/AppCommentData.vue";
import AppNavigationInPost from "@/components/AppNavigationInPost.vue";
import AppFooterInPost from "@/components/AppFooterInPost.vue";
import AppAddNewCommentInPost from "@/components/AppAddNewCommentInPost.vue";

const actions = new Actions();

onMounted(async () => {
    const route = useRoute();
    await actions.getOnePost(String(route.params.id))
    await actions.refreshViews(store.state.onePost)
    await actions.getCommentsToOnePost(store.state.onePost.id)
})


function signLike(postEntity){
    actions.signLike(postEntity)
}


</script>

<style scoped lang="scss">

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

.one_post_comment{
  display: flex;
  justify-content: end;
}

</style>