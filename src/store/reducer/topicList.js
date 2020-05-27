function topicList(topicListStore={
    loading:true,
    data:[]
},action){
    switch(action.type){
        case "TOPICLIST_LOADING"://正在请求数据
            return {
                loading:true,
                data:[]
            }
        case "TOPICLIST_LOADED"://请求成功数据
            return {
                loading:false,
                data:action.data
            }
        default:
            return topicListStore;
    }
    
}

export default topicList;