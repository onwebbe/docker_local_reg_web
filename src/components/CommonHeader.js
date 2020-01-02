import React from 'react';
import { Row, Col } from 'antd';

function CommonHeader() {
  return (
    <div className="appHeader">
        <Row gutter={16}>
            <Col className="gutter-row" span={18}>
                <div className="gutter-box" style={{color: 'white'}}>Local Registry UI</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div className="gutter-box" style={{color: 'white'}}>Login</div>
            </Col>
        </Row>
    </div>
  );
}

export default CommonHeader;
