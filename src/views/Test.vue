<template>
  <div class="test">
      私有：{{count}} 共享：{{storeState.count}}<br>
      <button @click="addCount">私有+</button>
      <button @click="increment">共享：+</button>
  </div>
</template>

<script>
import store from '@/store'
export default {
    data(){
        return {
            count:0,
            storeState:store.state
        }
    },
    methods:{
        addCount(){
            this.count++ 
        },
        increment(){
            store.increment()
        }
    }
}
</script>

<style>

</style>