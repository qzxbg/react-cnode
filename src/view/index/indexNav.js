import React from "react";
import { Menu } from "antd";
import { indexNav } from "../../router";
import { Link } from "react-router-dom";
import qs from "qs";
import { useLocation } from "react-router-dom";

function IndexNav(props){
    //获取search值
    let {search} = useLocation();
    //获取参数
    let {tab="all"} = qs.parse(search.substr(1));
    //获取激活菜单key值
    let activeKey = indexNav.findIndex(indexNavItem=>{
        return indexNavItem.type === tab;
    })

    return <Menu
        mode={"horizontal"}
        selectedKeys={[activeKey+""]}
    >
        {
            indexNav.map((indexNavItem,index)=>{
                return <Menu.Item key={index}>
                    <Link to={indexNavItem.url}>{indexNavItem.name}</Link>
                </Menu.Item>
            })
        }
    </Menu>
}

export default IndexNav;