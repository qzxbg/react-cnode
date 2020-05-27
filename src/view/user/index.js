import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetUserInfo, useGetUserCollection } from "../../store/action";
import { Row, Col } from "antd";
import UserInfoCenter from "./userInfoCenter";
import RecentTopics from "./recentTopics";
import RecentReplies from "./recentReplies";
function UserView() {
    //获取访问的主体参数
    let { loginname } = useParams();
    //调用请求用户主体hook
    let getUserInfo = useGetUserInfo();
    //調用请求用户收藏主体
    let getUserCollection = useGetUserCollection();
    //监听loginname的变化

    useEffect(() => {
        getUserInfo(loginname);
        getUserCollection(loginname);
    }, [loginname]);

    return <Row justify={"center"}>
        <Col xs={24} sm={16}>
            <UserInfoCenter loginname={loginname}/>
        </Col>
        <Col xs={24} sm={16}>
            <RecentTopics/>
            <RecentReplies/>
        </Col>
    </Row>
}

export default UserView;