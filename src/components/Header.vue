<template>
  <div class="head">
      <div class="content">
          <div class="img">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="list">
            <ul>
              <li><router-link to="/1">悦读</router-link></li>
              <li><router-link to="/2">情感</router-link></li>
              <li><router-link to="/3">连播</router-link></li>
              <li><router-link to="/4">校园</router-link></li>
              <li><router-link to="/5">音乐</router-link></li>
              <li><router-link to="/6">Labs</router-link></li>
            </ul>
          </div>
          <div class="Top-right">
            <div class="ipt">
              <input type="text">
              <img src="../assets/ico-f.png" alt="" class="ipt-f">
            </div>
            <div class="user">
              <span @click="userl" v-if="this.$store.state.lon==0">登录</span>
              <span @click="userr" v-if="this.$store.state.lon==0">注册</span>
              <span class="wc" v-if="this.$store.state.lon==1">欢迎你,{{this.$store.state.name}}</span>
              <span v-if="this.$store.state.lon==1" @click="eic"><img src="../assets/esc.png" alt=""></span>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'HeadTab',
    data(){
        return {
          
        }
    },
    components:{

    },
    created(){

    },
    methods:{
      userl(){
        this.$store.state.show=1
      },
      userr(){
        this.$store.state.show=2
      },
      eic(){
        this.$store.state.lon=0
        this.$store.state.token=null
      }
    }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  color: #565d47;
}
a{
  text-decoration: none;
}
.head{
  background-color: #fff;
}
.head .content{
  width: 1200px;
  height: 100px;
  /* background-color: aqua; */
  margin: 0 auto;
  overflow: hidden;
}
/* logo */
.head .img{
  height: 100px;
  width: 160px;
  float: left;
  margin-right: 140px;
}
.head .img img{
  height: 100%;
}
/* 列表 */
.head .list{
  float: left;
  line-height: 100px;
  font-size: 20px;
}
.head .list li{
  list-style: none;
  float: left;
  margin-right: 20px;
}
.head .list li a:hover{
  color: #d92027;
}
.head .list li .router-link-active{
  color: #d92027;
}
/* 搜索框 */
.head .Top-right{
  float: right;
  height: 100px;
  overflow: hidden;
  line-height: 100px;
}
.head .ipt{
  margin-right: 50px;
  float: left;
  position: relative;
}
.head .ipt input{
  outline: none;
  width: 200px;
  height: 25px;
  border: 1px solid #565d47;
  border-radius: 5px;
  padding:0px 10px ;
  overflow: hidden;
}
.head .ipt .ipt-f{
  width: 21px;
  height: 21px;
  position: absolute;
  left: 195px;
  top: 42px;
  cursor: pointer;
}
.head .user{
  float: right;
  font-size: 20px;
  /* position: relative; */
}
.head .user span{
  margin-right: 20px;
  width: 100px;
  cursor: pointer;
}
.head .user span:hover{
  color: #d92027;
}
.head .user span img{
  width: 20px;
}
</style>