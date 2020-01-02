import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button, message } from 'antd';
import CommonHeader from '../components/CommonHeader';
import CommonMenu from '../components/CommonMenu';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class RegistDockerServerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (window.localStorage) {
      let storedRegistry = localStorage.getItem('storedRegistry');
      let storedRegistryObj = {
        host: '',
        port: '',
        apiVersion: '2'
      }
      if (storedRegistry == null || storedRegistry == '') {
         
      } else {
        storedRegistryObj = JSON.parse(storedRegistry);
      }
      this.state = storedRegistryObj;
    } else {
      let storedRegistryObj = {
        host: 'error',
        port: 'error',
        apiVersion: 'error'
      }
      this.state = storedRegistryObj;
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  handleChange(event) {
    let fieldValue = event.target.value;
    let fielName = event.target.getAttribute('name');
    let data = {};
    data[fielName] = fieldValue;
    this.setState(data);
    console.log(this.state);
  }
  submitForm(event) {
    if (window.localStorage) {
      let regStr = JSON.stringify(this.state);
      localStorage.setItem('storedRegistry', regStr);
      message.info('Saved');
    }
  }
  render() {
    return (
      <div className='registDockerServer'>
        <div className='dataRow'>
            <div>
              <h3>Please regist your local docker registry</h3>
            </div>
        </div>
        <div className='dataRow'>
            <div className='dataLabel'>Host</div>
            <div className='dataField'><input name='host' value={this.state.host} onChange={this.handleChange}/></div>
        </div>
        <div className='dataRow'>
            <div className='dataLabel'>Port</div>
            <div className='dataField'><input name='port' value={this.state.port} onChange={this.handleChange}/></div>
        </div>
        <div className='dataRow'>
            <div className='dataLabel'>API Version</div>
            <div className='dataField'><input name='apiVersion' vvalue={this.state.apiVersion} onChange={this.handleChange}/></div>
        </div>
        <div className='dataRow'>
          <Button type="primary" onClick={this.submitForm}>Primary</Button>
        </div>
      </div>
    )
  }
}

export default RegistDockerServerView;
