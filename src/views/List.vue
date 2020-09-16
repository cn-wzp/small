<template>
  <div class="lists">
    <div class="content">
      <div class="box" v-if="this.show==0"><h1 style="margin:60px 300px">暂无数据</h1></div>
      <div class="box" v-for="(list,index) in lists" :key="index" @click="getdate(list)">
        <div class="img">
          <img src="../assets/tu.jpg" alt />
        </div>
        <h2>{{list.title}}</h2>
        <div class="txt">
          <img src="../assets/ico-pen.png" alt />
          <span>{{list.author}}</span>
          <img src="../assets/ico-h.png" alt />
          <span>{{list.podcast}}</span>
          <img src="../assets/ico-time.png" alt />
          <span>{{list.created_time}}</span>
          <img src="../assets/ico-er.png" alt />
          <span>{{list.play_time}}</span>
        </div>
        <div class="content">{{list.content}}</div>
      </div>
      <router-view name="top" class="top-right"></router-view>
      <router-view name="page" @num="num" class="page-bot"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      lists: null,
      page: 1,
      type:1,
      show:10,
    };
  },
  components: {},
  // created() {
  //   this.axios
  //     .get("http://localhost:3000/api/articles/1/page/1", {
  //       params: {}
  //     })
  //     .then(res => {
  //       this.lists = res.data.res.articles;
  //       // console.log(this.lists)
  //     });
  // },
  watch: {
    // $route(to) {
    //   this.axios
    //     .get("http://localhost:3000/api/articles/" + to.params.id + "/page/1", {
    //       params: {}
    //     })
    //     .then(res => {
    //       this.type=to.params.id
    //       this.$store.state.type=this.type
    //       this.lists = res.data.res.articles;
    //       // console.log(to,22)
    //     });
    // }
  },
  methods: {
    num() {
      // console.log(t);
    //   this.axios
    //     .get("http://localhost:3000/api/articles/"+this.type+"/page/"+t, {
    //       params: {}
    //     })
    //     .then(res => {
    //       this.lists = res.data.res.articles;
    //       this.show=res.data.res.articles.length
    //       console.log(res.data.res.articles.length)
    //     });
    // },
    // getdate(list){
    //   this.$router.push({path:'/topic/'+list.id})
    //   // console.log(list.id)
     }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.lists .content {
  width: 1200px;
  margin: 30px auto 0;
  overflow: hidden;
}
.lists .content .box {
  box-sizing: border-box;
  width: 750px;
  height: 200px;
  float: left;
  background-color: #fff;
  margin: 25px 0;
  overflow: hidden;
  padding: 0 20px 0 0;
  border-radius: 10px;
}
.lists .content .top-right {
  margin: 23px 0 0 800px;
}
.lists .content .box h2:hover{
  color: #d92027;
}
.lists .content .box .img {
  width: 200px;
  height: 200px;
  float: left;
  margin-right: 30px;
}
.lists .content .box .img img {
  width: 100%;
}
.lists .content .box h2 {
  margin: 30px 0 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.lists .content .box .txt {
  font-size: 16px;
  overflow: hidden;
}
.lists .content .box .txt img {
  width: 15px;
  height: 15px;
  float: left;
  margin: 4px 5px 0 0;
}
.lists .content .box .txt span {
  float: left;
  margin-right: 20px;
  color: #b1b493;
}
.lists .content .box .content {
  box-sizing: border-box;
  margin: 20px 10px;
  width: 500px;
  height: 50px;
  font-size: 20px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.lists .content .page-bot {
  overflow: hidden;
  width: 1200px;
}
</style>