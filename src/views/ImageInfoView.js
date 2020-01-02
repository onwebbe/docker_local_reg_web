import React from 'react';
import { Layout, Menu, Breadcrumb, Row } from 'antd';
import axios from 'axios';
import CommonHeader from '../components/CommonHeader';
import CommonMenu from '../components/CommonMenu';
import ImageList from '../components/ImageList';
const jsonp=require('jsonp');
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class ImageInfoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        registryObj: {},
        isRegistryReady: false,
        imageInfoList: []
    };
    if (window.localStorage) {
      let storedRegistry = localStorage.getItem('storedRegistry');
      let storedRegistryObj = {
        host: '',
        port: '',
        apiVersion: '2'
      }
      if (storedRegistry == null || storedRegistry == '') {
         this.state.isRegistryReady = false;
      } else {
        storedRegistryObj = JSON.parse(storedRegistry);
        this.state.isRegistryReady = true;
      }
      this.state.registryObj = storedRegistryObj;
    } else {
      let storedRegistryObj = {
        host: 'error',
        port: 'error',
        apiVersion: 'error'
      }
      this.state.registryObj = storedRegistryObj;
    }
    console.log(this.state);
    this.getImageInfo();
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  getImageInfo() {
      this.getImageInfoV2();
  }
  getImageInfoV1() {

  }
  getImageInfoV2() {
    var url = 'http://' + this.state.registryObj.host + ':' + this.state.registryObj.port + '/v2/_catalog';
    // jsonp(url,null,(err,data)=>{
    //   if(err){
    //     console.log(err)
    //   }else{
    //     console.log(data)
    //   }
    // })
    axios.get(url).then(function (response) {
      console.log(response);
      let resData = response.data;
      resData = {"repositories":["cdp_saf_automation_base","copernicium-node","copernicium-sapjvm","coredns","etcd","kube-apiserver","kube-controller-manager","kube-proxy","kube-scheduler","lp3","pause"]};
      resData.repositories.map((imageName, i) => {
        this._addImageByName(imageName);
      });
    });
  }
  _addImageByName(imageName) {
    var isAlreadyExists = this.state.imageInfoList.find(function(value, index, arr) {
      if (value.imageName === imageName) {
        return true;
      }
      return false;
    });
    if (!isAlreadyExists) {
      let imageObj = {
        imageName: imageName,
        tags: []
      }
      this.state.imageInfoList.push(imageObj);
    }
  }
  render() {
    return (
      <div className='registDockerServer'>
        <div className='dataRow' style={{display: this.state.isRegistryReady?'none':''}}>
            <div>
              <h3>Please regist your local docker registry</h3>
            </div>
        </div>
        <Row gutter={16}>
          <ImageList imageInfoList={this.state.imageInfoList}></ImageList>
        </Row>
      </div>
    )
  }
}

export default ImageInfoView;
