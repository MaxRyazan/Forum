<template>
    <div class="header_wrapper">
        <button @click="$emit('toggleVision')">Добавить новый пост</button>
    </div>
</template>

<script setup>
import store from "@/store/store";
defineEmits(['toggleVision'])
</script>
<style scoped>
.header_wrapper{
    padding: 5px;
    box-sizing: border-box;
    width: 100%;
    border: 2px solid green;
    display: flex;
    flex-wrap: wrap;
}
</style>