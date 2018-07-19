<template>
  <div id="book">
    <back></back>
    <el-row :span="6" style="background-color: white;margin: 8px;">
      <h1>dataMan</h1>
      <el-row>
        <el-col :span="8" style="margin: 3px;">
          <el-select v-model="value" placeholder="请选择" @change="goToResult(value)" >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="15" style="margin: 3px;">
          <el-input ref="itemsearch"
                    placeholder="请输入搜索内容"
                    suffix-icon="el-icon-search"
                    v-model="content">
          </el-input>
        </el-col>
      </el-row>
    </el-row>
    <el-row :span="18" style="background-color: white;margin: 8px;">
      <el-row class="head-row">
        <el-col :span="3">
          <div class=""></div>
        </el-col>
        <el-col :span="7">
          <div class="">责任者</div>
        </el-col>
        <el-col :span="7">
          <div class="">提名</div>
        </el-col>
        <el-col :span="7">
          <div class="">文献类型</div>
        </el-col>
      </el-row>
      <div ref="refreshDiv" style="position: relative">
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
          <el-row class="item-row" type="flex" align="middle" v-for="(item,index) in listdata">
            <el-col :span="3" >
              <div class="head el-icon-arrow-right"></div>
            </el-col>
            <el-col :span="7">
              <div class="head">{{item.author}}</div>
            </el-col>
            <el-col :span="7">
              <div class="head">{{item.bookFor}}</div>
            </el-col>
            <el-col :span="7">
              <div class="head">{{item.bookType}}</div>
            </el-col>
          </el-row>
          <el-row class="item-row"  type="flex" align="middle" v-for="(item,index) in downdata">
            <el-col :span="3" >
              <div class="head el-icon-arrow-right"></div>
            </el-col>
            <el-col :span="7">
              <div class="head">{{item.author}}</div>
            </el-col>
            <el-col :span="7">
              <div class="head">{{item.bookFor}}</div>
            </el-col>
            <el-col :span="7">
              <div class="head">{{item.bookType}}</div>
            </el-col>
          </el-row>
        </v-scroll>
      </div>

    </el-row>

  </div>
</template>

<script>
  import VScroll from '../pull-refresh'
  import Back from '../back'
  export default {
    components: {
      'v-scroll': VScroll,
      'back': Back
    },
    props:['site'],
    data() {
      return {
        options: [{
          value: '图书',
          label: '图书'
        }, {
          value: '学术搜索',
          label: '学术搜索'
        }, {
          value: '超星',
          label: '超星'
        }, {
          value: '校内网站',
          label: '校内网站'
        }, {
          value: '业务系统',
          label: '业务系统'
        },{
          value: '同心云',
          label: '同心云'
        },{
          value: '百度',
          label: '百度'
        },{
          value: '微信',
          label: '微信'
        },{
          value: '知乎',
          label: '知乎'
        }],
        input21: '',
        value: this.$route.params.type===undefined?sessionStorage.getItem("selectedType"):this.$route.params.type,
        content: this.$route.params.content,


        counter: 1, //当前页
        num: 10, // 一页显示多少条
        pageStart: 0, // 开始页数
        pageEnd: 0, // 结束页数
        listdata: [], // 下拉更新数据存放数组
        downdata: [], // 上拉更多的数据存放数组
        scrollData:{
          noFlag: false //暂无更多数据显示
        }

      }
    },
    mounted: function() {
      this.getList();
      this.$refs.refreshDiv.style.height = window.innerHeight - 250 + 'px';

      if(this.$route.params.type!=""&&this.$route.params.type!=undefined){
        sessionStorage.setItem("selectedType",this.$route.params.type);
      }
    },
    methods:{
      getList() {
        var response = []
        for(let i = 0; i < 60; i++) {
          response.push({
            author:"学术搜索学术搜索学术搜索",
            bookFor:"学术搜索学术搜索",
            bookType:"学术搜索"
          })
        }
        this.listdata = response.slice(0, this.num);
      },
      onRefresh(done) {
        this.getList();

        done(); // call done

      },
      onInfinite(done) {
        this.counter++;
        let end = this.pageEnd = this.num * this.counter;
        let i = this.pageStart = this.pageEnd - this.num;

        let more = this.$el.querySelector('.load-more')
        for(i; i < end; i++) {
          if(i >= 30) {
            more.style.display = 'none'; //隐藏加载条

            //走完数据调用方法
            this.scrollData.noFlag = true;

            break;
          } else {
            this.downdata.push({
              author:"学术搜索学术搜索学术搜索",
              bookFor:"学术搜索",
              bookType:"学术搜索"
            })
            more.style.display = 'none'; //隐藏加载条
          }
        }

        done();
      },
      goToResult: function (value) {
        console.log(this.$refs.itemsearch)
        console.log(value)
        var name = '';
        if(value==="图书"){
          name = 'book'
        }else if(value==="学术搜索"){
          name = 'study'
        }else if(value==="超星"){
          name = 'chaoxin'
        }else if(value==="业务系统"){
          name = 'business'
        }else if(value==="校内网站"){
          name = 'school'
        }else if(value==="同心云"){
          name = 'tongxinyun'
        }else if(value==="百度"){
          name = 'baidu'
        }else if(value==="知乎"){
          name = 'zhihu'
        }else if(value==="微信"){
          name = 'weixin'
        }
        this.$router.push({
          name: name,
          params: {
            type: value,
            content:this.content
          }
        })
      },
    },

  }
</script>

<style scoped>
  .head-row{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding: 15px;
    color: #000000;
    background-color: #f0f0f0;
  }

  .item-row{
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*padding: 15px;*/
    /*color: #ff2418;*/
    height: auto;
    font-size: 14px;
  }

  hr{
    width: 96%;
  }

  .head {
    padding: 15px;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    text-align: left;
  }

  .item-row{
    border-top: 1px solid #c7c7c7;
  }

  .item-row:nth-of-type(1){
    border-top: 0;
  }

  #book{
    background-color: #f0f0f0;
  }
</style>
