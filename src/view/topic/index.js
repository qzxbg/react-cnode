import React, { useEffect } from "react";
import { useGetTopicDetail } from "../../store/action";
import { useRouteMatch } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import detailSty from "../../static/css/topicDetail.module.css"
import TopicTitle from "./topicTitle";
import TopicContent from "./topicContent";
import TopicReply from "./topicReply";


function TopicView() {
    let { id } = useRouteMatch().params;
    let getDetail = useGetTopicDetail();
    useEffect(() => {
        getDetail(id);
    }, [id])

    return <Row className={detailSty.detailContainer}
        justify={"center"}
    >
        <Col xs={24} sm={16} >
            <Typography>
                <TopicTitle detailSty={detailSty} />
                <Typography.Text>
                    <TopicContent detailSty={detailSty} />
                    <TopicReply detailSty={detailSty} />
                </Typography.Text>
            </Typography>
        </Col>
    </Row>

}

export default TopicView;