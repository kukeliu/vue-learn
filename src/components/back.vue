<template>
  <div class="back">
    <div style="display: inline-block;line-height: 60px;margin-left: 20px;" class="el-icon-arrow-left back-icon" @click="$router.back(-1)"></div>
    <div style="display:inline-block;line-height: 60px;">返回</div>
    <div class="el-icon-more-outline" style="display: inline-block;line-height: 60px;float: right;margin-right: 20px;"></div>
  </div>
</template>

<script>
  export default({
    name: 'back',
    data(){
      return {
      }
    },
  })
</script>

<style scoped>
  .back{
    background-color: #6db7ff;
    height: 60px;
    color: black;
    text-align: left;
  }
</style>
