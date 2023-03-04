<template>
    <div class="new_post_wrapper">
        <h1>Добавить новый пост</h1>
        <input v-model="store.state.title" type="text" class="new_post_input_title" placeholder="Придумайте название для поста" autofocus>
        <input v-model="store.state.tags" type="text" class="new_post_input_tags" placeholder="Укажите теги для поиска">
        <textarea v-model="store.state.subject" class="new_post_input_subject" placeholder="Напишите содержание поста"></textarea>
        <button>Добавить</button>
    </div>
</template>

<script setup>
import store from "@/store/store";
</script>

<style scoped lang="scss">
.new_post_wrapper {
  margin-top: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
    & h1 {
      font-size: 20px;
    }
  & input{
    height: 28px;
    font-size: 16px;
    border: none;
    outline: none;
    border-bottom: 1px solid gray;
  }
  & textarea {
    font-size: 15px;
    padding: 5px;
    height: 250px;
    border-right: none;
    border-left: none;
    border-top: none;
    outline: none;
    &::placeholder{
      font-size: 16px;
    }
  }
  & button {
    width: 200px;
    height: 28px;
    margin-top: 20px;
    margin-left: calc(100% - 220px);
  }
}
</style>