<template>
    <div class="header_wrapper">
        <button @click="toggleForm">Создать новый пост</button>
    </div>
</template>

<script setup>
import store from "@/store/store";

defineEmits(['toggleVision'])
function toggleForm(){
    store.state.isFormVisible = !store.state.isFormVisible
    console.log(store.state.isFormVisible)
}
</script>
<style scoped>
.header_wrapper{
    padding: 5px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>