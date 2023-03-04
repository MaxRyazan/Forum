<template>
    <div class="main_view_wrapper">
        <app-header  @toggleVision="toggleVision"/>
        <app-new-post class="form_new_post"/>
        <app-all-posts />
    </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppAllPosts from '../components/AppAllPosts.vue'
import AppNewPost from '../components/AppNewPost.vue'

function toggleVision(){
    document.querySelector('.form_new_post').classList.toggle('form_new_post_hide')
}
</script>

<style scoped>
.main_view_wrapper{
    max-width: 1440px;
    margin: 0 auto;
    padding: 10px;
    border: 2px solid red;
}
.form_new_post_hide{
    display: none;
}
</style>