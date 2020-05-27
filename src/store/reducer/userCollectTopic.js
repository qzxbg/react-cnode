function userCollectTopic(userCollectTopicStore={
    userCollectloading:true,
    userCollectdata:[]
},action){
    switch(action.type){
        case "USERCOLLECTION_LOADING":
            return {
                loading:true,
                data:[]
            }
        case "USERCOLLECTION_LOADED":
            return {
                userCollectloading:false,
                userCollectdata:action.data
            }
        default:
            return userCollectTopicStore;
    }
}

export default userCollectTopic;