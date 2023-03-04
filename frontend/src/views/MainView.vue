<template>
    <div class="main_view_wrapper">
        <app-header />
        <app-new-post class="form_new_post" v-if="store.state.isFormVisible"/>
        <app-all-posts/>
    </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppAllPosts from '../components/AppAllPosts.vue'
import AppNewPost from '../components/AppNewPost.vue'
import store from "@/store/store";
import {onMounted} from "vue";
import {Actions} from "@/logic/actions";

onMounted(async () => {
    const actions = new Actions();
    await actions.getAllPosts()
})

function toggleVision(){
    document.querySelector('.form_new_post').classList.toggle('form_new_post_hide')
}
</script>

<style scoped>
.main_view_wrapper{
    max-width: 1440px;
    margin: 0 auto;
    padding: 10px;
}
.form_new_post_hide{
    display: none;
}
</style>