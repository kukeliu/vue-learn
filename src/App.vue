<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input21: '',
    }
  },

}

</script>

<style>
  html{
    overflow: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00bcd48c;
}

.changes{
  color: #c0c4cc;
}

  .keyword{color: red;}
</style>
