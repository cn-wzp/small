<template>
  <div class="deta">
    <div class="content">
      <div class="head">
        <div class="h-txt">{{lists.title}}</div>
        <div class="more-t">
          <div class="m-lift">
            <img src="../assets/ico-pen.png" alt="">
            <span>{{lists.author}}</span>
            <img src="../assets/ico-h.png" alt="">
            <span>{{lists.podcast}}</span>
            <img src="../assets/ico-time.png" alt="">
            <span>{{lists.duration}}</span>
          </div>
          <span class="rt">次</span>
          <span class="rt wdt">{{lists.count}}</span>
          <span class="rt">播放</span>
        </div>
        <div class="audio">
          <audio controls src="http://music.163.com/song/media/outer/url?id=548556492.mp3"></audio>
        </div>
      </div>
      <!-- 内容 -->
      <div class="text-con">
        <div class="txt" id="txt">{{lists.content}}</div>
        <div class="text-mo">
          <span class="t-img" @click="moreTxt"><img src="../assets/next.png" alt="" id="txt-g"></span>
          <span id="deadt hov" @click="moreTxt">{{headt}}</span>
        </div>
      </div>
      <!-- 标签 -->
      <div class="tables">
        <span class="table-t">标签:</span>
        <span class="tab-n">{{backData}}</span>
        <img src="../assets/wxin.png" alt="">
        <img src="../assets/QQ.png" alt="">
        <img src="../assets/dou.png" alt="">
        <img src="../assets/wbo.png" alt="">
      </div>
      <!-- 分页 -->
      <div class="page">
        <img src="../assets/ico-lift.png" alt="" class="l">
        <span class="l hov" @click="getDataC">上一篇</span>
        <img src="../assets/ico-right.png" alt="" class="r">
        <span class="r hov" @click="getDataP">下一篇</span>
      </div>
      <!-- 组件 -->
      <Author class="com-r" :name="name" :count="count" :fs="fs" :like="like"></Author>
      <Comments class="comment"></Comments>
      <Move class="move" ref="liuhuan"></Move>
      <Fmove :pl="pl" ref="add"></Fmove>
    </div>
  </div>
</template>

// <script>
// import Author from "../components/Author"
// import Comments from "../components/Comments"
// import Move from "../components/Move"
// import Fmove from "../components/Fmove"
// export default {
//   name: "Detali",
//   data() {
//     return {
//       lists: null,
//       headt:"展开全文",
//       page:null,
//       name:null,
//       count:null,
//       fs:null,
//       like:null,
//       pl:0
//     };
//   },
//   components:{
//     Author,
//     Comments,
//     Move,
//     Fmove
//   },
//   created() {
//     this.axios
//       .get("http://localhost:3000/api/article/" + this.$route.params.txt, {
//         params: {}
//       })
//       .then(res => {
//         this.lists = res.data.res;
//         this.page=this.$route.params.txt
//         this.name=res.data.res.author
//         this.count=res.data.res.count
//         this.fs=res.data.res.play_time
//         this.like=res.data.res.like_count
//         this.pl=res.data.res.type_id
//         // console.log(this.lists);
//         // console.log(res.data.res)
//       });
//   },
//   watch: {
//     $route(to) {
//       this.axios
//       .get("http://localhost:3000/api/article/" + to.params.txt, {
//         params: {}
//       })
//       .then(res => {
//         this.lists = res.data.res;
//         this.page=this.$route.params.txt
//         this.name=res.data.res.author
//         this.count=res.data.res.count
//         this.fs=res.data.res.play_time
//         this.like=res.data.res.like_count
//         // console.log(this.lists);
//         // console.log(res,to)
//       });
//     }
//   },
//   methods:{
//     moreTxt(){
//       if(this.headt=="展开全文"){
//         document.getElementById('txt').style.webkitLineClamp=1000;
//         document.getElementById('txt-g').style.transform= 'rotate(180deg)';
//         this.headt="收起全文"
//       }else if(this.headt=="收起全文"){
//         document.getElementById('txt').style.webkitLineClamp=7;
//         document.getElementById('txt-g').style.transform= 'rotate(0deg)';
//         this.headt="展开全文"
//       }
//     },
//     getDataP(){
//       // console.log(this.$store.state.type)
//       this.page++
//       this.axios
//       .get("http://localhost:3000/api/article/" + this.page, {
//         params: {}
//       })
//       .then(res => {
//         this.lists = res.data.res;
//         this.name=res.data.res.author
//         this.count=res.data.res.count
//         this.fs=res.data.res.play_time
//         this.like=res.data.res.like_count
//         // console.log(this.page)
//       });
//       // 父组件触发子组件函数
//       this.$refs['liuhuan'].pnum()
//       this.$refs['add'].add()
//       // this.$route.push({path:"/sssss"})
//       this.$router.push({path:'/topic/'+this.page})
//     },
//     getDataC(){
//       // console.log(this.$store.state.type)
//       this.page--
//       this.axios
//       .get("http://localhost:3000/api/article/" + this.page, {
//         params: {}
//       })
//       .then(res => {
//         this.lists = res.data.res;
//         this.name=res.data.res.author
//         this.count=res.data.res.count
//         this.fs=res.data.res.play_time
//         this.like=res.data.res.like_count
//       });
//       // 父组件触发子组件函数
//       this.$refs['liuhuan'].pnum()
//       this.$refs['add'].add()
//       this.$router.push({path:'/topic/'+this.page})
//     }
//   },
//   computed:{
//     backData(){
//       return (this.lists.labels||"").split(",").join(" ")
//     }
//   }
// };
</script>

<style scoped>
.deta .content{
  width: 1200px;
  margin: 30px auto 0;
  overflow: hidden;
}
.deta .content .head{
  float: left;
  width: 750px;
  height: 250px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px;
}
.deta .content .head .audio{
  width: 100%;
  height: 40px;
  margin-top: 52px;
}
.deta .content .head .audio audio{
  width: 100%;
  height: 50px;
}
.deta .content .head .h-txt{
  font-size: 25px;
  margin-bottom: 10px;
}
.deta .content .head .more-t{
  overflow: hidden;
  width: 100%;
  font-size: 15px;
}
.deta .content .head .more-t .m-lift{
  float: left;
  width: 50%;
}
.deta .content .head .more-t .m-lift img{
  width: 15px;
  height: 15px;
}
.deta .content .head .more-t .m-lift span{
  margin: 0 15px 0 5px;
}
.deta .content .head .more-t .rt{
  float: right;
}
.deta .content .head .more-t .wdt{
  font-size:18px ;
  margin: -2px 5px 0;
}
.deta .content .text-con{
  width: 750px;
  padding: 30px;
  float: left;
  box-sizing: border-box;
  background-color: #fff;
  margin-top: 25px;
  border-radius: 10px;
}
.deta .content .text-con .txt{
  line-height: 40px;
  text-indent:2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
}
.deta .content .text-con .text-mo{
  overflow: hidden;
  margin-top: 10px;
}
.deta .content .text-con .text-mo span{
  float: right;
}
.deta .content .text-con .text-mo .t-img img{
  width: 22px;
  height: 22px;
}
.deta .content .tables{
  width: 750px;
  padding: 10px 30px;
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 20px;
  float: left;
  overflow: hidden;
  border-radius: 10px;
}
.deta .content .tables .table-t{
  font-weight: 800;
  float: left;
}
.deta .content .tables .tab-n{
  margin-left:20px;
  float: left;
}
.deta .content .tables img{
  width: 20px;
  float: right;
  margin-left: 10px;
}
.deta .content .page{
  width: 750px;
  box-sizing: border-box;
  overflow: hidden;
  padding: 10px 30px;
  font-size: 18px;
  margin-top: 30px;
  line-height: 20px;
  float: left;
  border-radius: 10px;
}
.deta .content .page img{
  width: 20px;
}
.deta .content .page .l{
  float: left;
}
.deta .content .page .r{
  float: right;
}
.hov:hover{
  color: black;
}
.com-r{
  margin: 0px 0 0 800px;
}
.comment{
  float: left;
}
.audio audio{
  border: 0px;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
}
</style>