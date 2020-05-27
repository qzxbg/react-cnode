import React from "react";
import { useSelector } from "react-redux";
import { Card, List, Avatar } from "antd";
import { Link } from "react-router-dom";
import mount from "../../static/js/momentCh";

function RecentReplies() {
    //获取数据
    let { userInfoLoading, userInfodata: { recent_replies } } = useSelector(state => {
        return state.userInfo;
    })

    return <Card title={"最近参与的话题"}>
        <List bordered={true}
            loading={userInfoLoading}
            dataSource={recent_replies}
            renderItem={topicItem => {
                return <Link to={`/topic/${topicItem.id}`}>
                    <List.Item extra={<span>{mount(topicItem.last_reply_at).fromNow()}</span>}>
                        <List.Item.Meta
                            avatar={<Avatar src={topicItem.author.avatar_url}></Avatar>}
                            title={topicItem.title}
                        />
                    </List.Item>
                </Link>
            }}
            split={true}
            size={5}
            itemLayout="horizontal"
        >
        </List>
    </Card>
}

export default RecentReplies;