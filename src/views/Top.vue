<template>
  <div class="top">
      <h2><span>|</span><slot>{{this.txt}}</slot>频道TOP10</h2>
      <div class="cont">
          <div class="box" v-for="(list,index) in lists" :key="index">
              <p class="hov" @click="getdate(list.id)">{{list.title}}</p>
              <div class="text">文:<span>{{list.author}}</span> 主播:<span>{{list.podcast}}</span></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Top',
    data(){
        return {
            lists:null,
            txt:"悦读"
        }
    },
    components:{

    },
    // created(){
    //     this.axios.get("http://localhost:3000/api/articles/1/top10",{
    //         params: {

    //         }
    //     }).then(res=>{
    //         this.lists=res.data.res.articles;
    //         // console.log(this.lists)
    //     })
    // },
    watch:{
        // $route(to){ 
        //     this.axios.get("http://localhost:3000/api/articles/"+to.params.id+"/top10",{
        //         params: {
        //         }
        //     }).then(res=>{
        //         this.lists=res.data.res.articles
        //         this.txt=res.data.res.type
        //     })
        // }
    },
    methods:{
        getdate(nid){
            this.$router.push({path:'/topic/'+nid})
            // console.log(nid)
        }
    }
}
</script>

<style scoped>
.top{
    width: 400px;
    /* height: 500px; */
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-sizing: border-box;
}
.top h2 span{
    margin-right: 15px;
    color: #d92027;
}
.top .cont{
    width: 100%;
    padding: 40px 20px;
}
.top .cont .box{
    width: 300px;
    height:80px;
    margin-bottom: 20px;
    border-bottom: 1px solid #b1b493;
}
.top .cont .box p{
    font-size: 20px;
    overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.top .cont .box .text{
    padding: 10px 0px;
    font-size: 16px;
    color: #b1b493;
}
.top .cont .box .text span{
    margin: 0 10px;
    color: #b1b493;
}
.hov:hover{
    color: #d92027;
}
</style>