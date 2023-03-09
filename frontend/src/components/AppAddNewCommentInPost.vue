<template>
    <button @click="toggleFormVision" v-if="!toggleAddCommentForm" class="test">Прокомментировать</button>
    <div class="comment_add" v-if="toggleAddCommentForm">
        <form @submit.prevent="addComment" class="one_post_add">
            <textarea v-model="textareaValue"></textarea>
            <button type="submit">Подтвердить</button>
        </form>
    </div>
</template>
<script setup>
import {ref} from "vue";
import store from "@/store/store";
import {CommentEntity} from "@/logic/entities/CommentEntity";

let toggleAddCommentForm = ref(false);
const textareaValue = ref('')
function addComment(){
    const currentBlogger = JSON.parse(localStorage.getItem('user'))
    const currentPost = store.state.onePost
    const newComment = new CommentEntity(textareaValue.value, currentBlogger.id, currentPost.id)
    console.log(newComment)

}

function toggleFormVision(){
    toggleAddCommentForm.value = !toggleAddCommentForm.value
}

</script>
<style scoped lang="scss">

.one_post_add {
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: 1s linear myAnimation;

  & button {
    width: 200px;
    align-self: center;
  }

  & textarea {
    width: 80%;
    align-self: center;
  }
}

.test {
  width: 200px;
  align-self: center;
  animation: .5s linear myAnimation;
}

@keyframes myAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>