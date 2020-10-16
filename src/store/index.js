const store = {
    //共享数据
    state:{
        count :0
    },

    //累加
    increment(){
        this.state.count++
    }
}

export default store;