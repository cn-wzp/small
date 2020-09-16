<template>
  <div class="page">
      <div class="btn">
          <ul class="btn-ul">
              <li v-for="(num,index) in 3" :key="index" @click="setnum(num)" :class="{'red':num==co}">{{num}}</li>
              <li :class="{'red':co>3}">...</li>
              <li @click="pre" style="cursor:pointer">上一页</li>
              <li @click="next" style="cursor:pointer">下一页</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'Page',
    data(){
        return{
            co:1,
        }
    },
    methods:{
        setnum(t){
            
            
            this.$emit('num',t)
            this.co=t
            
        },
        next(){
            this.co++
            this.$emit('num',this.co)
        },
        pre(){
            this.co--
            this.$emit('num',this.co)
        }
    }
}
</script>

<style scoped>
.page{
    height: 100px;
    margin-bottom:100px;
}
.page .btn .btn-ul{
    overflow: hidden;
    list-style: none;
    margin-left: 50px;
}
.page .btn .btn-ul li{
    box-sizing: border-box;
    float: left;
    padding:5px 15px;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    border: 1px solid #b1b493;
    border-radius: 5px;
    margin-right: 10px;
}
.page .btn .btn-ul li:hover{
    background-color: #b1b493;
}
.page .btn .btn-ul .red{
    color: red;
    background-color: #dbc6eb;
}
</style>