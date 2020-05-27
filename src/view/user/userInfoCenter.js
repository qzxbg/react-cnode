import React from "react";
import { Card,Descriptions, Avatar} from "antd";
import userInfoSty from "../../static/css/userInfo.module.css";
import moment from "../../static/js/momentCh";
import { useSelector } from "react-redux";
function UserInfoCenter(props) {
    let {loginname} = props;
    //获取状态数据
    let {
        userInfo: { userInfoLoading, userInfodata },
        userConllectTopic: { userCollectdata }
    } = useSelector(state => {
        return state;
    })

    let descriptionsTitle = <div className={userInfoSty.userInfo}>
        <Avatar src={userInfodata.avatar_url} alt={loginname}></Avatar>
        <a>{loginname}</a>
    </div>;
    console.log(userInfodata);
    return <Card
        title={"个人中心"}
        loading={userInfoLoading}
    >
        <Descriptions
            title={descriptionsTitle}
            layout={"vertical"}
            column={1}
        >
            <Descriptions.Item >{<span>{userInfodata.score} 积分</span>}</Descriptions.Item>
            <Descriptions.Item >{userCollectdata.length}个话题收藏</Descriptions.Item>
            <Descriptions.Item >{"注册时间" + moment(userInfodata.create_at).fromNow()}</Descriptions.Item>
        </Descriptions>
    </Card>
}

export default UserInfoCenter;