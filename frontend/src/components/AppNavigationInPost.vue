<template>
    <div class="one_post_nav">
        <a href="/">Главная</a>
        <span>/ Пост № {{post.id}}</span>
    </div>
</template>
<script setup>
defineProps({
    post: {}
})
</script>
<style scoped lang="scss">

.one_post_nav {
  margin-top: 150px;
  background-color: white;
  padding: 20px;
  border-radius: 20px 20px 0 0;

  & a {
    color: rgb(35, 142, 166);
    text-decoration: none;
  }
}

</style>