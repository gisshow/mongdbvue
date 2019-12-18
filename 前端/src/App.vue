<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
 
    <ul>
  

      <li> <router-link to="login">登陆</router-link>  </li>
      <li> <router-link to="register">注册</router-link>  </li>
 
    </ul>
   
   <router-view></router-view>
   
  </div>
</template>

<script>
//import firstcomponent from './component/firstcomponent.vue'
//import secondcomponent from './component/secondcomponent.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
 // components: { firstcomponent,secondcomponent }
}
</script>

<style lang="scss">
body {
    display: block;
    margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.logo {
    top: 0px;
    /* position: absolute; */
    text-align: left;
    float: left;
        width: 40px;
    height: 40px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
