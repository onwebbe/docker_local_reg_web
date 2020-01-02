import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, SwitchAnt } from 'antd';
import CommonHeader from '../components/CommonHeader';
import CommonMenu from '../components/CommonMenu';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import RegistDockerServerView from '../views/RegistDockerServerView';
import ImageInfoView from '../views/ImageInfoView';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function MainView() {
  return (
    <Layout>
        <HashRouter>
        <Header className="header">
            <div className="logo" />
            <CommonHeader></CommonHeader>
        </Header>
        <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
            <CommonMenu></CommonMenu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
            style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
            >
                
                    <Switch>
                        <Route exact path='/' component={RegistDockerServerView} />
                        <Route exact path='/images' component={ImageInfoView} />
                    </Switch>
            </Content>
        </Layout>
        </Layout>
        </HashRouter>
    </Layout>
  );
}

export default MainView;
