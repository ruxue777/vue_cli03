<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/post">Post</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/about">About</router-link>

    </div>
    <transition :name="tName">
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      tName: ''
    }
  },
  watch :{
    '$route'(to,from){
      if(to.name === 'Home'){
        this.tName = 'fade'
      }else if(to.name === 'About'){
        this.tName = 'fade2'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,.fade-leave-active{
  transition: opacity .3s;
}

.fade-enter,.fade-leave-to{
  opacity: 0;
  
}
.fade-leave-to{
  display: none;
}

.fade2-enter-active,.fade2-leave-active{
  transition: opacity 2s;
}

.fade2-enter,.fade2-leave-to{
  opacity: 0;
  
}
.fade2-leave-to{
  display: none;
}
</style>
