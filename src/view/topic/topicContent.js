import React from "react";
import { useSelector } from "react-redux";
function TopicContent(props) {
    let {detailSty} = props;
    let { data: {  content } } = useSelector(state => {
        return state.topicDetail;
    })
    let getContent = () => {
        return { __html: content }
    }
    return <div
        dangerouslySetInnerHTML={getContent()}
        className={detailSty.detailContent}
    ></div>
}

export default TopicContent;