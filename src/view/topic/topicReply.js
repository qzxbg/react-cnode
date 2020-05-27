import React from "react";
import moment from "../../static/js/momentCh";
import { List, Avatar, Comment, Tooltip } from "antd";
import { useSelector } from "react-redux";
function TopicReply(props) {
    let { detailSty } = props;
    let { loading,data: { replies, reply_count } } = useSelector(state => {
        return state.topicDetail;
    })
    return <List className={detailSty.detailContent}
    loading={loading}
        header={`${reply_count} 回复`}
        bordered={true}
        dataSource={replies}
        renderItem={(replyItem) => {
            return <Comment
                author={<a href={`/user/${replyItem.author.loginname}`}>{replyItem.author.loginname}</a>}
                avatar={
                    <Avatar
                        src={replyItem.author.avatar_url}
                        alt={replyItem.author.loginname}
                    ></Avatar>
                }
                content={<div dangerouslySetInnerHTML={{ __html: replyItem.content }}></div>}
                datetime={<Tooltip title={moment(replyItem.create_at).format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment(replyItem.create_at).locale("zh-cn").fromNow()}</span>
                </Tooltip>}
            >
            </Comment>
        }}
    >
    </List>
}

export default TopicReply;