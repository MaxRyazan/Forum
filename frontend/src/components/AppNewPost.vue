<template>
    <div class="new_post_wrapper">
        <small-button title="x" :small="true" class="new_post_close_btn" @click="closeForm" />
        <h1>Добавить новый пост</h1>
        <input v-model="state.title" type="text" class="new_post_input_title" placeholder="Придумайте название для поста" autofocus>
        <input v-model="state.tags" type="text" class="new_post_input_tags" placeholder="Укажите теги для поиска">
        <textarea v-model="state.subject" class="new_post_input_subject" placeholder="Напишите содержание поста"></textarea>
        <small-button :title="`Добавить`" :primary="true" @click="addNewPost" />
    </div>
</template>

<script setup>
import store from "@/store/store";
import {Actions} from "@/logic/actions";
import SmallButton from '@/components/small/SmallButton.vue'

const state = store.state

function addNewPost() {
    if (validateFields()) {
        const actions = new Actions()
        actions.sendNewPostData()
    }
    state.isFormVisible = !state.isFormVisible
}

function validateFields() {
    return state.tags.length > 2 && state.title.length > 5 && state.subject.length > 25
}

function closeForm(){
    state.isFormVisible = false
}
</script>

<style scoped lang="scss">
.new_post_wrapper {
  position: relative;
  margin-top: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
    & h1 {
      font-size: 20px;
      color: white;
    }
  & input{
    padding: 0 10px;
    border-radius: 4px;
    height: 28px;
    font-size: 16px;
    border: none;
    outline: none;
    border-bottom: 1px solid gray;
  }
  & textarea {
    border-radius: 4px;
    font-size: 15px;
    padding: 5px 10px;
    height: 250px;
    border-right: none;
    border-left: none;
    border-top: none;
    outline: none;
    &::placeholder{
      font-size: 16px;
    }
  }
}
.new_post_close_btn{
  position: absolute;
  right: 0;
  top: 0;
}
</style>