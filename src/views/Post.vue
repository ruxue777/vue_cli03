<template>
  <div class="post">
      <div v-if="loading">
          Loading...
      </div>
      <div v-if="post">
          <h2>{{post.title}}</h2>
          <p>{{post.body}}</p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            loading :false,
            post : null
        }
    },
    //组件创建完毕
    created(){
        //获取数据
        this.getData()
    },
    methods:{
        //获取数据
        getData(){
            //关闭loading
            this.loading = true

            setTimeout(()=>{
                this.loading = false
                this.post = {
                    title: '标题',
                    body: '内容...'
                }
            },1000)
        }
    }
}
</script>

<style>

</style>