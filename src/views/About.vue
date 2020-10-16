<template>
  <div class="about">
    <p>私有：{{count}} 共享：{{storeState.count}}</p>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import store from '@/store'
export default {
   //组件激活
  beforeRouteEnter(to,from,next){
    console.log('激活');
    next()
  },
  //组件失去激活
  beforeRouteLeave(to,from,next){
    console.log('失去激活');
    next()
  },
  //组件复用
  beforeRouteUpdate(to,from,next){
    console.log('组件复用');
    next()
  },
  data(){
    return {  
      count:0,
      storeState:store.state
    }
  }
}
</script>