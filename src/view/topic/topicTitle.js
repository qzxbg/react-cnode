import React from "react";
import {Typography} from "antd";
import { useSelector } from "react-redux";
function TopicTitle(props) {
    let {detailSty} = props;
    let { data: { title} } = useSelector(state => {
        return state.topicDetail;
    })
    return <Typography.Title level={3} className={detailSty.detailContent}>
        {title}
    </Typography.Title>
}

export default TopicTitle;