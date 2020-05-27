import React from "react";
import { Layout, Affix, Row, Col, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { nav } from "../router";

function Header() {
    //获取默认选中
    let { pathname } = useLocation();
    let activeKey = nav.findIndex(navItem => {
        return pathname === navItem.to;
    })

    return <Affix offsetTop={0}>
        <Layout.Header id="header">
            <Row>
                <Col xs={24} sm={6}>
                    <div id="logo">
                        <Link to="/">cNode</Link>
                    </div>
                </Col>
                <Col xs={24} sm={18}>
                    <Menu
                        mode={"horizontal"}
                        theme={"dark"}
                        defaultSelectedKeys={[activeKey + ""]}
                    >
                        {
                            nav.map((navItem, index) => {
                                return <Menu.Item key={index}>
                                    <Link to={navItem.to}>{navItem.title}</Link>
                                </Menu.Item>
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </Layout.Header>
    </Affix>
}

export default Header;