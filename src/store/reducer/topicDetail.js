function topicDetail(topicDetailStore={
    loading:true,
    data:[]
},action){
    switch(action.type){
        case "TOPICDETAIL_LOADING":
            return {
                loading:true,
                data:[]
            }
        case "TOPICDETAIL_LOADED":
            return {
                loading:false,
                data:action.data
            }
        default:
            return topicDetailStore;
    }
}

export default topicDetail;