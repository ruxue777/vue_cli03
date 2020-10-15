<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
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
}
</script>