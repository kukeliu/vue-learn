<template>
  <td v-bind:class="{ active:isActive }" @click="changeC(message)">{{message}}</td>
</template>

<script>
  export default({
    name: 'item',
    props:['message'],
    data(){
      return {
        isActive:false,
        type: '',
        styles: ''
      }
    },
    methods:{
      changeC: function (val) {
        if(this.isActive){
          this.isActive = false
        }else{
          this.isActive = true
        }
        this.$emit('increment',val)
      }
    }
  })
</script>

<style scoped>
  .active{
    color: #00bcd48c!important;
  }



</style>

