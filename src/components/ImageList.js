import React from 'react';
import { Layout, Menu, Col } from 'antd';
import axios from 'axios';
import CommonHeader from '../components/CommonHeader';
import CommonMenu from '../components/CommonMenu';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.imageInfoList.map((imageInfo, i) => {
        return (
          <Col className="gutter-row" span={6} key={i}>
              <div className="gutter-box">
              {imageInfo.imageName}
              </div>
          </Col>
        )
      })
    );
  }
}

export default ImageList;
