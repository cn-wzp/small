<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Login class="anmi" v-show="this.$store.state.show==1" ></Login>
    <Reg class="anmi" v-show="this.$store.state.show==2" ></Reg>
   </div>
</template>

<script>
import Header from './components/Header'
import Login from './components/Login'
import Reg from './components/Reg'
export default {
  data(){
      return{
        show:0
      }
  },
  components: {
    'Header':Header,
    "Login":Login,
    "Reg":Reg,
  
  }
}
</script>

<style>
#app {
    background-color: #f4f4f4;
}
</style>
