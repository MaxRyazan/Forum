<script setup lang="ts">
import {RouterView} from 'vue-router'</script>

<template>
    <div>
        <RouterView />
    </div>
</template>

<style scoped>

div{
    min-height: calc(100vh - 20px);
    background-image: url("assets/images/fon.jpg");
    background-size: 1920px;
    background-repeat: repeat;
    background-position: top;
}
</style>
