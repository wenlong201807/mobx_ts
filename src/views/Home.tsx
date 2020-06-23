import React, { useState } from 'react';
import { HashRouter, Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import '../styles/reflect/home.scss';
import About from './About';
import Teams from './TeamOKR/Teams';
import BaseCenterOKR from './TeamOKR/BaseCenterOKR';
import MyOKR from './pages/MyOKR';
import TestEnvTeamOKR from './TeamOKR/TestEnvTeamOKR';
import TestEnvTeamOKR2 from './TeamOKR/TestEnvTeamOKR2';
import PanoramicView from './TeamOKRExam/PanoramicView';
import CollapseSelf from '../components/collapse';
import editEdit from '../components/editEdit';
import multiRowForm from '../components/multiRowForm';
import CRUD from '../components/CRUD';
import FormSelf from '../components/formSelf';
import FormSelfEdit from '../components/formSelfEdit';
import Editorrow from '../components/EditorRow';
import Editorcell from '../components/Editorcell';
import testMobx from './testMobx';
import Wrap from './useContextStore/wrap';

const { SubMenu } = Menu;

function Home() {
  const history = useHistory();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const state: any = {
    theme: 'light',
    current: currentPath,
    // current: '/home/BaseCenterOKR',
    // current: '/home/TestEnvTeamOKR2',
  };

  console.log('home:', location.pathname);
  const [status, setStatus] = useState(state);

  const jumpToTarget = (path: any) => {
    console.log(path);
    history.push(path);
  };

  const handleClick = (e) => {
    setStatus({ current: e.key });
    setCurrentPath('/login');
  };

  return (
    <div className="home-container">
      <div className="okrTitle">OKR管理</div>
      <div className="home">
        <div className="side">
          <Menu theme={status.theme} onClick={handleClick} style={{ width: 200 }} defaultOpenKeys={['sub5']} selectedKeys={[status.current]} mode="inline">
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="我的OKR">
              <Menu.Item key="/home/TestEnvTeamOKR">
                <div onClick={() => jumpToTarget('/home/TestEnvTeamOKR')}>王伟(待定)</div>
              </Menu.Item>
              <Menu.Item key="/home/MyOKR">
                <div onClick={() => jumpToTarget('/home/MyOKR')}>王伟(正确)</div>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="团队OKR">
              <Menu.Item key="/home/TestEnvTeamOKR2">
                <div onClick={() => jumpToTarget('/home/TestEnvTeamOKR2')}>测试环境团队</div>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<AppstoreOutlined />} title="个人OKR管理">
              <Menu.Item key="5">张利</Menu.Item>
              <Menu.Item key="6">李雷</Menu.Item>
              <Menu.Item key="7">张三</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="团队OKR考核">
              <Menu.Item key="/home/PanoramicView">
                <div onClick={() => jumpToTarget('/home/PanoramicView')}>考核全景视图</div>
              </Menu.Item>
              <Menu.Item key="10">系统组</Menu.Item>
              <Menu.Item key="11">开发组</Menu.Item>
              <Menu.Item key="12">网络组</Menu.Item>
              <Menu.Item key="13">前端</Menu.Item>
            </SubMenu>
            <Menu.Item key="/home/BaseCenterOKR">
              <div onClick={() => jumpToTarget('/home/BaseCenterOKR')}>中心OKR基线</div>
            </Menu.Item>

            {/*  */}
            <SubMenu key="sub5" icon={<AppstoreOutlined />} title="测试中...">
              <Menu.Item key="/home/about">
                <div onClick={() => jumpToTarget('/home/about')}>自我测试</div>
              </Menu.Item>

              <Menu.Item key="/home/teams">
                <div onClick={() => jumpToTarget('/home/teams')}>测试环境团队</div>
              </Menu.Item>
              <Menu.Item key="/home/collapse">
                <div onClick={() => jumpToTarget('/home/collapse')}>折叠面板(共用的)</div>
              </Menu.Item>
              <Menu.Item key="/home/CRUD">
                <div onClick={() => jumpToTarget('/home/CRUD')}>表单CRUD</div>
              </Menu.Item>

              <Menu.Item key="/home/formSelf">
                <div onClick={() => jumpToTarget('/home/formSelf')}>表单自定义添删</div>
              </Menu.Item>
              <Menu.Item key="/home/formSelfEdit">
                <div onClick={() => jumpToTarget('/home/formSelfEdit')}>表单自定义修改</div>
              </Menu.Item>
              <Menu.Item key="/home/multiRowForm">
                <div onClick={() => jumpToTarget('/home/multiRowForm')}>多行表单</div>
              </Menu.Item>
              <Menu.Item key="/home/editEdit">
                <div onClick={() => jumpToTarget('/home/editEdit')}>表单</div>
              </Menu.Item>
              <Menu.Item key="/home/EditorRow">
                <div onClick={() => jumpToTarget('/home/EditorRow')}>单行全编辑</div>
              </Menu.Item>
              <Menu.Item key="/home/Editorcell">
                <div onClick={() => jumpToTarget('/home/Editorcell')}>编辑单元格</div>
              </Menu.Item>

              <Menu.Item key="testMobx">
                <div onClick={() => jumpToTarget('/testMobx')}>调试mobx</div>
              </Menu.Item>
              <Menu.Item key="Wrap">
                <div onClick={() => jumpToTarget('/Wrap')}>Wrap</div>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="content">
          <HashRouter>
            <Switch>
              {/* <Route path={`${match.path}/app`} component={Home} /> */}
              <Route path="/home/about" component={About} />
              <Route path="22" component={Teams} />
              <Route path="/home/BaseCenterOKR" component={BaseCenterOKR} />
              <Route path="/home/MyOKR" component={MyOKR} />
              <Route path="/home/TestEnvTeamOKR" component={TestEnvTeamOKR} />
              <Route path="/home/TestEnvTeamOKR2" component={TestEnvTeamOKR2} />
              <Route path="/home/PanoramicView" component={PanoramicView} />
              <Route path="/home/collapse" component={CollapseSelf} />
              <Route path="/home/multiRowForm" component={multiRowForm} /> {/* <Route path="/home/list" component={List} /> */}
              <Route path="/home/editEdit" component={editEdit} />
              <Route path="/home/CRUD" component={CRUD} />
              <Route path="/home/formSelf" component={FormSelf} />
              <Route path="/home/formSelfEdit" component={FormSelfEdit} />
              <Route path="/home/EditorRow" component={Editorrow} />
              <Route path="/home/Editorcell" component={Editorcell} />
              <Route path="/testMobx" component={testMobx} />
              <Route path="/Wrap" component={Wrap} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    </div>
  );
}

export default Home;
