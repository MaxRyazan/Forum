<template>
    <div v-for="(index) in pagesCount" class="buttons" :key="index">
        <small-button :title="String(index)" :small="true" :primary="false"  @click="changePage(index)"/>
    </div>
    <div class="all_posts_wrapper">
        <div class="all_posts_wrapper_item_inner" v-for="post in filteredArray" :key="post.id" @click="$router.push(`/posts/${post.id}`)">
            <div class="all_posts_promo">
                <div class="all_posts_promo_title">
                    <div class="all_posts_promo_item title">{{ post.title }}</div>
                    <div class="all_posts_promo_item">{{ post.tags }}</div>
                </div>
                <div>
                    <div class="all_posts_promo_item">
                        <img src="../assets/images/like_picture.png" alt="">
                        <span>{{ post.likes }}</span>
                    </div>
                    <div class="all_posts_promo_item">
                        <img src="../assets/images/view_picture.png" alt="">
                        <span>{{ post.views }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import store from "@/store/store";
import {computed, ref} from "vue";
import SmallButton from '@/components/small/SmallButton.vue';

let buttonIndex = ref(1);

const pagesCount = computed(() => {
    return Math.ceil(store.state.allPosts.length / 10)
})

const filteredArray = computed(() => {
    if(buttonIndex.value === 1){
        return store.state.allPosts.filter((post, index) => index >= 0 && index < 10)
    }
    return store.state.allPosts.filter((post, index) => index >= buttonIndex.value * 10 - 10 && index < buttonIndex.value * 10)
})

function  changePage(index){
    buttonIndex.value = index
}


</script>
<style scoped lang="scss">
.buttons{
  display: inline-flex;
  & button{
    padding: 5px 10px;
    margin-left: 10px;
  }
}


.all_posts_promo{
  display: flex;
  justify-content: space-between;
}
.all_posts_promo_item{
  display: flex;
  align-items: center;
  padding: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  &.title{
    max-width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 10px;
  }
 & img{
   width: 20px;
   margin-right: 5px;
 }
}
.all_posts_promo_title{
  display: flex;
  width: 90%;
  justify-content: space-between;
}




.all_posts_wrapper {
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, minmax(280px, 1fr));
  gap: 20px;
}

.all_posts_wrapper_item_inner{
  background-color: rgba(255, 255, 255, .8);
  padding: 10px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  &:hover{
    background-color: rgba(255, 255, 255, .65);
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20px;
  }
}


//.all_posts_wrapper_item-content {
//  margin-top: 10px;
//  display: -webkit-box;
//  -webkit-line-clamp: 7;
//  -webkit-box-orient: vertical;
//  line-height: 140%;
//
//}
</style>