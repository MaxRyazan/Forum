<template>
    <div class="comment_wrapper">
        <div class="comment_data">
            <div class="comment_item text">{{comment.comment}}</div>
            <div class="comment_item">
                <span>Прокомментировал:</span>
                <span>{{user.username}}</span>
            </div>
            <div class="comment_item">
                <span>Добавлено:</span>
                <span>{{comment.belongTo.created_at}}</span>
            </div>
            <div class="comment_item">
                <span>Изменено:</span>
                <span>{{comment.belongTo.updated_at}}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    comment: {}
})

const user = JSON.parse(localStorage.getItem('user'))

</script>
<style scoped lang="scss">
.comment_wrapper{
  width: 55%;
  text-align: end;
  margin-top: 50px;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    width: 60%;
    border: 1px solid rgb(35, 142, 166);
    right: 0;
    bottom: -20px;
  }
}
.comment_data{
  display: flex;
  flex-direction: column;
  align-items: end;
}
.text{
  display: inline-block;
  position: relative;
  margin-bottom: 30px;
  text-align: start;
  &::after{
    content: '';
    width: 10px;
    border: 2px solid rgb(35, 142, 166);
    border-radius: 20%;
    position: absolute;
    left: -30px;
    top: 7px;
  }
}
.comment_item{
  display: flex;
  justify-content: space-between;
  width: 60%;
  &.text{
    width: 100%;
  }
}
</style>