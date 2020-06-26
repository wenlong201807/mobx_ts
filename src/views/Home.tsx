import React, {useState} from 'react';
import {
    HashRouter,
    Route,
    Switch,
    useLocation,
    useHistory
} from 'react-router-dom';
import {Menu} from 'antd';
import {AppstoreOutlined, SettingOutlined} from '@ant-design/icons';

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
import SelfCollapse from '../components/SelfCollapse';
import FormSelf from '../components/formSelf';
import FormSelfEdit from '../components/formSelfEdit';
import Editorrow from '../components/EditorRow';
import Editorcell from '../components/Editorcell';
import testMobx from './testMobx';
import Wrap from './useContextStore/wrap';

const {SubMenu} = Menu;

function Home() {
    const history = useHistory();
    const location = useLocation();
    let aa = location.pathname.split('/')[2].substring(0, 4)
    aa = aa === 'Base' ? '' : aa
    const [currentPath, setCurrentPath] = useState(location.pathname);
    const [currentParentPath] = useState(aa);


    const jumpToTarget = (path) => {
        history.push(path);
    };

    const handleClick = (e) => {
        console.log('当前路径:', e.key, '=====', location.pathname)
        setCurrentPath(e.key);
    };

    return (
        <div className="home-container">
            <div className="okrTitle">OKR管理</div>
            <div className="home">
                <div className="side">
                    <Menu theme='light'
                        onClick={handleClick}
                        style={
                            {width: 200}
                        }
                        defaultOpenKeys={
                            [currentParentPath]
                        }
                        selectedKeys={
                            [currentPath]
                        }
                        mode="inline">
                        <SubMenu key="mine"
                            icon={<AppstoreOutlined/>}
                            title="我的OKR">
                            <Menu.Item key="/home/mineTestEnvTeamOKR">
                                <div onClick={
                                    () => jumpToTarget('/home/mineTestEnvTeamOKR')
                                }>王伟(待定)</div>
                            </Menu.Item>
                            <Menu.Item key="/home/mineMyOKR">
                                <div onClick={
                                    () => jumpToTarget('/home/mineMyOKR')
                                }>王伟(正确)</div>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="team"
                            icon={<AppstoreOutlined/>}
                            title="团队OKR">
                            <Menu.Item key="/home/teamTestEnvTeamOKR2">
                                <div onClick={
                                    () => jumpToTarget('/home/teamTestEnvTeamOKR2')
                                }>测试环境团队</div>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="pers"
                            icon={<AppstoreOutlined/>}
                            title="个人OKR管理">
                            <Menu.Item key="/home/pers5">张利</Menu.Item>
                            <Menu.Item key="/home/pers6">李雷</Menu.Item>
                            <Menu.Item key="/home/pers7">张三</Menu.Item>
                        </SubMenu>
                        <SubMenu key="view"
                            icon={<SettingOutlined/>}
                            title="团队OKR考核">
                            <Menu.Item key="/home/viewPanoramicView">
                                <div onClick={
                                    () => jumpToTarget('/home/viewPanoramicView')
                                }>考核全景视图</div>
                            </Menu.Item>
                            <Menu.Item key="/home/view10">系统组</Menu.Item>
                            <Menu.Item key="/home/view11">开发组</Menu.Item>
                            <Menu.Item key="/home/view12">网络组</Menu.Item>
                            <Menu.Item key="/home/view13">前端</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="/home/BaseCenterOKR">
                            <div onClick={
                                () => jumpToTarget('/home/BaseCenterOKR')
                            }>中心OKR基线</div>
                        </Menu.Item>

                        {/*  */}
                        <SubMenu key="Test"
                            icon={<AppstoreOutlined/>}
                            title="测试中...">
                            <Menu.Item key="/home/about">
                                <div onClick={
                                    () => jumpToTarget('/home/about')
                                }>自我测试</div>
                            </Menu.Item>
                            <Menu.Item key="/home/SelfCollapse">
                                <div onClick={
                                    () => jumpToTarget('/home/SelfCollapse')
                                }>自定义手风琴</div>
                            </Menu.Item>

                            <Menu.Item key="/home/teams">
                                <div onClick={
                                    () => jumpToTarget('/home/teams')
                                }>测试环境团队</div>
                            </Menu.Item>
                            <Menu.Item key="/home/collapse">
                                <div onClick={
                                    () => jumpToTarget('/home/collapse')
                                }>折叠面板(共用的)</div>
                            </Menu.Item>
                            <Menu.Item key="/home/CRUD">
                                <div onClick={
                                    () => jumpToTarget('/home/CRUD')
                                }>表单CRUD</div>
                            </Menu.Item>

                            <Menu.Item key="/home/formSelf">
                                <div onClick={
                                    () => jumpToTarget('/home/formSelf')
                                }>表单自定义添删</div>
                            </Menu.Item>
                            <Menu.Item key="/home/formSelfEdit">
                                <div onClick={
                                    () => jumpToTarget('/home/formSelfEdit')
                                }>表单自定义修改</div>
                            </Menu.Item>
                            <Menu.Item key="/home/multiRowForm">
                                <div onClick={
                                    () => jumpToTarget('/home/multiRowForm')
                                }>多行表单</div>
                            </Menu.Item>
                            <Menu.Item key="/home/editEdit">
                                <div onClick={
                                    () => jumpToTarget('/home/editEdit')
                                }>表单</div>
                            </Menu.Item>
                            <Menu.Item key="/home/EditorRow">
                                <div onClick={
                                    () => jumpToTarget('/home/EditorRow')
                                }>单行全编辑</div>
                            </Menu.Item>
                            <Menu.Item key="/home/Editorcell">
                                <div onClick={
                                    () => jumpToTarget('/home/Editorcell')
                                }>编辑单元格</div>
                            </Menu.Item>

                            <Menu.Item key="testMobx">
                                <div onClick={
                                    () => jumpToTarget('/testMobx')
                                }>调试mobx</div>
                            </Menu.Item>
                            <Menu.Item key="Wrap">
                                <div onClick={
                                    () => jumpToTarget('/Wrap')
                                }>Wrap</div>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="content">
                    <HashRouter>
                        <Switch> {/* <Route path={`${match.path}/app`} component={Home} /> */}
                            <Route path="/home/about"
                                component={About}/>
                            <Route path="/home/SelfCollapse"
                                component={SelfCollapse}/>
                            <Route path="22"
                                component={Teams}/>
                            <Route path="/home/BaseCenterOKR"
                                component={BaseCenterOKR}/>
                            <Route path="/home/mineMyOKR"
                                component={MyOKR}/>
                            <Route path="/home/mineTestEnvTeamOKR"
                                component={TestEnvTeamOKR}/>
                            <Route path="/home/teamTestEnvTeamOKR2"
                                component={TestEnvTeamOKR2}/>
                            <Route path="/home/viewPanoramicView"
                                component={PanoramicView}/>
                            <Route path="/home/collapse"
                                component={CollapseSelf}/>
                            <Route path="/home/multiRowForm"
                                component={multiRowForm}/> {/* <Route path="/home/list" component={List} /> */}
                            <Route path="/home/editEdit"
                                component={editEdit}/>
                            <Route path="/home/CRUD"
                                component={CRUD}/>
                            <Route path="/home/formSelf"
                                component={FormSelf}/>
                            <Route path="/home/formSelfEdit"
                                component={FormSelfEdit}/>
                            <Route path="/home/EditorRow"
                                component={Editorrow}/>
                            <Route path="/home/Editorcell"
                                component={Editorcell}/>
                            <Route path="/testMobx"
                                component={testMobx}/>
                            <Route path="/Wrap"
                                component={Wrap}/>
                        </Switch>
                    </HashRouter>
                </div>
            </div>
        </div>
    );
}

export default Home;
