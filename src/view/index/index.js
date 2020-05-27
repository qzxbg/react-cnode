import React from "react";
import IndexNav from "./indexNav";
import IndexList from "./indexList";
import { Row, Col } from "antd";
import IndexPagination from "./indexPagination";

function IndexView(props) {
    return <Row className="wrap">
        <Col sm={4}></Col>
        <Col xs={24} sm={16}>
            <IndexNav />
            <IndexList /><br/>
            <IndexPagination/><br/>
        </Col>
        <Col sm={4}></Col>
    </Row>
}

export default IndexView;