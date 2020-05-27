function userInfo(userInfoStore={
    userInfoLoading:true,
    userInfodata:[]
},action){
    switch(action.type){
        case "USERINFO_LOADING":
            return {
                userInfoLoading:true,
                userInfodata:[]
            }
        case "USERINFO_LOADED":
            return {
                userInfoLoading:false,
                userInfodata:action.data
            }
        default:
            return userInfoStore;
    }
}

export default userInfo;