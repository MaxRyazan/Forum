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
import {Mutations} from "@/logic/mutations";
import {Actions} from "@/logic/actions";

let toggleAddCommentForm = ref(false);
const textareaValue = ref('')
const mutations = new Mutations()
const actions = new Actions()

function addComment(){
    const currentBlogger = mutations.getUserFromLocalStorage()
    const currentPost = store.state.onePost
    const newComment = new CommentEntity(textareaValue.value, currentBlogger.id, currentPost.id)
    actions.createNewComment(newComment)
    textareaValue.value = ''
    toggleFormVision()
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