import React from "react";
import IndexView from "../view/index";
import AboutView from "../view/about";
import TopicView from "../view/topic";
import GetStartView from "../view/getStart";
import View404 from "../view/404";
import UserView from "../view/user";

/**
 *  如果使用search，path只需要匹配根目录，search值，在组件中在组件中去做处理
 */

const routes = [
    {
        path:["/","/index"],
        exact:true,
        render(props){
            return <IndexView {...props}/>
        }
    },{
        path:"/about",
        exact:true,
        render(props){
            return <AboutView {...props}/>
        }
    },{
        path:"/topic/:id",
        exact:true,
        render(props){
            return <TopicView {...props}/>
        }
    },{
        path:"/getStart",
        exact:true,
        render(props){
            return <GetStartView {...props}/>
        }
    },{
        path:"/user/:loginname",
        exact:true,
        render(props){
            return <UserView {...props}/>
        }
    },{
        path:"",
        exact:false,
        render(){
            return <View404/>
        }
    }
]

const nav = [
    {
        to:"/",
        title:"首页"
    },{
        to:"/about",
        title:"关于我们"
    },{
        to:"/getStart",
        title:"新手入门"
    }
]

const indexNav = [
    {
        name:"全部",
        url:"/?tab=all",
        type:"all"
    },{
        name:"精华",
        url:"/?tab=good",
        type:"good"
    },{
        name:"分享",
        url:"/?tab=share",
        type:"share"
    },{
        name:"问答",
        url:"/?tab=ask",
        type:"ask"
    },{
        name:"招聘",
        url:"/?tab=job"
    },{
        name:"客户端测试",
        url:"/?tab=dev",
        type:"dev"
    }
]
export {
    routes,
    nav,
    indexNav
};