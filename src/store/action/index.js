import axios from "axios";
import { useDispatch } from "react-redux";

const http = axios.create({
    baseURL:"https://cnodejs.org/api/v1"
})

function useGetTopicList(){
    let dispatch = useDispatch();
    return function(tab,page,limit=15){
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}`)
            .then((res)=>{
                dispatch({
                    type:"TOPICLIST_LOADED",
                    data:res.data.data
                })
            })
    }
}

function useGetTopicDetail(){
    let dispatch = useDispatch();
    return function(id){
        http.get(`/topic/${id}`)
            .then((res)=>{
                console.log(res.data.data);
                dispatch({
                    type:"TOPICDETAIL_LOADED",
                    data:res.data.data
                });
            })
    }
}

function useGetUserInfo(){
    let dispatch = useDispatch();
    return function(loginname){
        http.get(`/user/${loginname}`)
            .then((res)=>{
                dispatch({
                    type:"USERINFO_LOADED",
                    data:res.data.data
                })
            })
    }
}

function useGetUserCollection(){
    let dispatch = useDispatch();
    return function(loginname){
        http.get(`/topic_collect/${loginname}`)
            .then((res)=>{
                dispatch({
                    type:"USERCOLLECTION_LOADED",
                    data:res.data.data
                })
            })
    }
}

export {
    useGetTopicList,
    useGetTopicDetail,
    useGetUserInfo,
    useGetUserCollection
}