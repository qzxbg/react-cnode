import React, { useEffect } from "react";
import { List } from "antd";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import qs from "qs";
import { useGetTopicList } from "../../store/action";

function IndexList() {
    //获取数据
    let { loading, data } = useSelector(state => {
        return state.topicList;
    })

    //获取search值
    let { search } = useLocation();
    //获取数据类型以及第几页
    let { tab = "all", page = 1 } = qs.parse(search.substr(1));
    //发送请求
    let getTopics = useGetTopicList();
    useEffect(() => {
        getTopics(tab, page);
    }, [tab, page]);

    return <List
        loading={loading}
        bordered={true}
        dataSource={data}
        split={true}
        renderItem={(item) => {
            console.log(item);
            return <List.Item>
                <Link to={`/topic/${item.id}`}>
                    {item.title}
                </Link>
            </List.Item>
        }}
    />
}

export default IndexList;