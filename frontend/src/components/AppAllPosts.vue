<template>
    <div class="all_posts_wrapper">
        <div class="all_posts_wrapper_item">
            adasd
        </div>
        <div class="all_posts_wrapper_item">
            adasd
        </div>
        <div class="all_posts_wrapper_item">
            adasd
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.all_posts_wrapper{
    margin-top: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
.all_posts_wrapper_item{
    border: 2px solid blue;
}
</style>