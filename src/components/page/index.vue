<template>
  <div id="app">
    <h1 class="title">dataMan</h1>
    <el-input ref="sousuo"
      placeholder="发现搜索的乐趣"
      suffix-icon="el-icon-search"
      v-model="input21" @keyup.enter.native="goToResult($event)">
    </el-input>
    <table>
      <tr>
        <td v-bind:class="{ active:isActive=='图书' }" v-on:click="changeC('图书')">图书</td>
        <td>|</td>
        <td v-bind:class="{ active:isActive=='学术搜索' }" v-on:click="changeC('学术搜索')">学术搜索</td>
        <td>|</td>
        <td v-bind:class="{ active:isActive=='超星' }" v-on:click="changeC('超星')">超星</td>
      </tr>
      <tr>
        <td v-bind:class="{ active:isActive=='业务系统' }" v-on:click="changeC('业务系统')">业务系统</td>
        <td>|</td>
        <td v-bind:class="{ active:isActive=='校内网站' }" v-on:click="changeC('校内网站')">校内网站</td>
        <td>|</td>
        <td v-bind:class="{ active:isActive=='同心云' }" v-on:click="changeC('同心云')">同心云</td>
      </tr>
      <tr>
        <td v-bind:class="{ active:isActive=='百度' }" v-on:click="changeC('百度')">百度</td>
        <td>|</td>
        <td v-bind:class="{ active:isActive=='知乎' }" v-on:click="changeC('知乎')">知乎</td>
        <td>|</td>
        <td v-bind:class="{ active:isActive=='微信' }" v-on:click="changeC('微信')">微信</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import Item from '../item'
  export default {
    components: {
      Item
    },
    data () {
      return {
        input21: '',
        type: '',
        isActive:'',
      }
    },
    computed: {

    },
    mounted(prop){//钩子函数
      // prop.$refs.active.style.color = 'red';
    },
    methods:{
      goToResult: function (e) {
        console.log("跳转");
        const value = e.target.value;
        if(value==''){
          this.$message({
            message: '搜索内容不能为空！',
            type: 'warning'
          });
          return
        }
        var name = '';
        if(this.type==="图书"){
          name = 'book'
        }else if(this.type==="学术搜索"){
          name = 'study'
        }else if(this.type==="超星"){
          name = 'chaoxin'
        }else if(this.type==="业务系统"){
          name = 'business'
        }else if(this.type==="校内网站"){
          name = 'school'
        }else if(this.type==="同心云"){
          name = 'tongxinyun'
        }else if(this.type==="百度"){
          name = 'baidu'
        }else if(this.type==="知乎"){
          name = 'zhihu'
        }else if(this.type==="微信"){
          name = 'weixin'
        }
        this.$router.push({
          name: name,
          params: {
            type: this.type,
            content:value
          }
        })
      },
      changeC: function (prop) {
        this.isActive = prop;
        this.type = prop;
      }

    },
    watch:{
      itemIndex:{
      },
      deep: true
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
  table{
    margin: 0px auto;
    margin-top:60px;
    width: 100%;
  }
  td,item {
    font-size: 13px;
    color: #c0c4cc;
  }
  .active{
    color: #00bcd48c;
  }

  #app{
    margin-top: 80px;
  }

</style>
