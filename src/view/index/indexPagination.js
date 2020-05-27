import React, { useEffect } from "react";
import { Pagination } from "antd";
import { useLocation, useHistory, Link } from "react-router-dom";
import qs from "qs";

//获取页码的类型
function getPageType(page,type){
    switch(type){
        case "page":
            return page;
        case "prev":
            return "<";
        case "next":
            return ">"
        default:
            return "...";
    }
}
function IndexPagination() {
    let { search } = useLocation();
    let { tab = "all", page = 1 } = qs.parse(search.slice(1))
    let history = useHistory();

    
    return <Pagination
        current={page}
        total={500}
        pageSize={15}
        showSizeChanger={false}
        responsive={true}
        onChange={(currentpage, pageSize) => {
            page = currentpage;
            let url = {tab,page};
            history.push("/?"+qs.stringify(url));
        }}
        // itemRender={(page,type)=>{
        //     return <Link to={`/?tab=${tab}&page=${page}`}>
        //         {getPageType(page,type)}
        //     </Link>
        // }}
    >

    </Pagination>
}

export default IndexPagination;