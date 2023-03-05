<template>
    <div class="one_post_wrapper">
        <div>{{store.state.onePost.title}}</div>
        <div>{{store.state.onePost.tags}}</div>
        <div>{{store.state.onePost.subject}}</div>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {Actions} from "@/logic/actions";
import {onMounted} from "vue";
import store from "@/store/store";

onMounted(async () => {
    const route = useRoute();
    const actions = new Actions();
    await actions.getOnePost(String(route.params.id))
})

</script>

<style scoped>
.one_post_wrapper{
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 50px;
    padding: 20px;
}
</style>