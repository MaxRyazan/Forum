<template>
    <div>
        <button
                class="btn"
                :class="{'btn__small' : small, 'btn__primary' : primary}"
                :type="{submit : submit}"
        >{{title}}</button>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    small: {
        type: Boolean,
        required: false,
        default: false
    },
    primary: {
        type: Boolean,
        required: false,
        default: true
    },
    submit: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped lang="scss">
.btn{
  border-radius: 6px;
  outline: none;
  border: 0;
  padding: 5px 10px;
  width: 200px;
  letter-spacing: 1px;
  margin: 5px 10px;
  font-weight: bold;
  &:hover{
    background-color: rgb(175, 197, 209);
  }
  &__small{
    width: 35px;
  }
  &__primary{
    background-color:  rgb(70, 189, 255);
    &:hover{
      box-shadow: 5px 5px 0 rgb(35, 116, 162);
      transition: .5s;
    }
    &:not(:hover){
      transition: .5s;
    }
  }
}
</style>