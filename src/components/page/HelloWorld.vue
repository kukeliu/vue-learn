<template>
  <div id="app">
    <h1 class="title">dataMan</h1>
    <el-input
      placeholder="发现搜索的乐趣"
      suffix-icon="el-icon-search"
      v-model="input21" @keyup.enter.native="goToResult">
    </el-input>
    <table>
      <tr>
        <item class="item" message="图书" v-on:increment="incrementTotal"></item>
        <td>|</td>
        <item class="item" message="学术搜索" v-on:increment="incrementTotal"></item>
        <td>|</td>
        <item class="item" message="超星" v-on:increment="incrementTotal"></item>
      </tr>
      <tr>
        <item class="item" message="业务系统" v-on:increment="incrementTotal"></item>
        <td>|</td>
        <item class="item" message="校内网站" v-on:increment="incrementTotal"></item>
        <td>|</td>
        <item class="item" message="同心云" v-on:increment="incrementTotal"></item>
      </tr>
      <tr>
        <item class="item" message="百度" v-on:increment="incrementTotal"></item>
        <td>|</td>
        <item class="item" message="知乎" v-on:increment="incrementTotal"></item>
        <td>|</td>
        <item class="item" message="微信" v-on:increment="incrementTotal"></item>
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
        color: "#000000"
      }
    },
    computed: {

    },
    mounted(prop){//钩子函数
      // prop.$refs.active.style.color = 'red';
    },
    methods:{
      goToResult: function () {
        this.$router.push({
          name: 'book',
          params: {
            type: '',
            content: ''
          }
        })
      },
      incrementTotal: function (val) {
        console.log(document.getElementsByClassName('active')[0])
        setTimeout(()=>{
          document.getElementsByClassName('active')[0].style.color = "red"
        },100)

        for(var i=0; i<document.getElementsByClassName('item').length; i++){
          if(document.getElementsByClassName('active')[0]!=document.getElementsByClassName('item')[i]){
            document.getElementsByClassName('item')[i].style.color = '#c0c4cc'
          }
        }

        for(var i=0; i<document.getElementsByClassName('active').length; i++){
          console.log("----"+document.getElementsByClassName('active')[i].innerHTML);
        }

        /*var arg = ['图书','学术搜索','超星','业务系统','校内网站','同心云','百度','知乎','微信']
        var otherOrg = [];
        for(var i=0;i<arg.length; i++){
            if(arg[i] === val){
              //give the type
              this.type = val
            }else{
              otherOrg.push(arg[i]);
            }
        }
        for(var i=0; i<otherOrg.length; i++){
          console.log(document.getElementsByClassName(otherOrg[i]));
          var obj = document.getElementsByClassName(otherOrg[i]);
          obj.cssText = "color: #c0c4cc"
        }*/
        //console.log(otherOrg);
        //console.log(document.getElementsByTagName('td'));
       /* for(var i=0; i<otherOrg.length; i++){
          // console.log(document.getElementsByTagName('td')[i]);
          for(var j=0; j<document.getElementsByTagName('td').length; j++){
            //console.log(document.getElementsByTagName('td')[j]);
            // console.log(document.getElementsByTagName('td')[j].innerHTML);
            console.log(otherOrg[i]);
            if(document.getElementsByTagName('td')[j].innerHTML===otherOrg[i]){
              document.getElementsByTagName('td')[j].style.color="#c0c4cc";
            }
          }
        }*/
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

</style>
