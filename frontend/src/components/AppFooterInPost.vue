<template>
    <div class="one_post_footer">
        <div class="one_post_like">
            <div class="one_post_like_text">
                <h4>Понравилась статья?</h4>
            </div>
            <div class="one_post_like_img">
                <img @click="$emit('signLike', post)" class="one_post_like_img_item"
                     src="@/assets/images/like_picture.png" alt="like">
                <span>{{post.likes}}</span>
            </div>
        </div>
        <div class="one_post_views">
            <h4>Просмотров: {{post.views}}</h4>
        </div>
    </div>
</template>
<script setup>
defineProps({
    post:{}
})
defineEmits(['signLike'])

</script>
<style scoped lang="scss">


.one_post_footer {
  border-radius: 0 0 20px 20px;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-around;

  & h4 {
    cursor: default;
    font-weight: 600;
  }
}

.one_post_like_text {
  text-align: center;
}

.one_post_like {
  display: flex;
  align-items: center;
}

.one_post_like_img {
  width: 30px;
  height: 30px;
  position: relative;

  & img {
    width: 100%;
    position: absolute;
    bottom: 5px;
    cursor: pointer;
    left: 20px;

    &:active {
      transform: scale(1.1);
    }
  }

  & span {
    width: 30px;
    position: absolute;
    bottom: 5px;
    right: -60px;
    text-align: center;
    cursor: default;
  }
}
</style>