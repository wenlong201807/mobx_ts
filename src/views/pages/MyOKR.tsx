import React, { useState, useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import RootStoreContext from '../../moxstore/rootStroe/index';
import { useHistory } from 'react-router-dom';
import '../../styles/pages/MyOKR.scss';
import classnames from 'classnames';
import CommonTitle from '../../components/CommonTitle';
import { currentDateYearGlobal } from '../../util/globalFn';
import { Progress, Input, Menu, Dropdown } from 'antd';
import { PlusOutlined, UpOutlined, RightOutlined, FlagOutlined } from '@ant-design/icons';
const { TextArea } = Input;

function MyOKR() {
  const { myOKRStore } = useContext(RootStoreContext);
  const { time, myOKRData } = myOKRStore;
  const history = useHistory();
  const [isExpandKR, setIsExpandKR] = useState(false);

  console.log('仓库的东西', time, myOKRData);
  useEffect(() => {
    console.log('66', currentDateYearGlobal);
  }, []);
  const getdata = (data) => {
    console.log(data);
  };
  const choiceAction = (
    row = {
      default: '666',
    },
  ) => {
    return (
      <Menu>
        <Menu.Item onClick={() => editObjective(row)}>编辑</Menu.Item>
        <Menu.Item onClick={() => delNewCollapse(row)}>删除</Menu.Item>
      </Menu>
    );
  };

  const editObjective = (row) => {
    console.log(row);
  };
  const delNewCollapse = (row) => {
    console.log(row);
  };
  const expandKR = () => {
    setIsExpandKR(!isExpandKR);
  };

  const jumpToPersonYearKRDetail = (index) => {
    console.log('第几个index', index);
    history.push('/PersonYearKRDetail'); // 备用的***此处为多余
  };

  return (
    <div className="MyOKRWrap">
      <CommonTitle getDate={getdata} title={'王伟OKR管理'}></CommonTitle>

      {/*季度KR详情内容部分*/}
      <div className={classnames({ detailContentWrap: true })}>
        {myOKRData.length
          ? myOKRData.map((itemOne, indexOne) => {
              return (
                <div key={itemOne.id}>
                  {/* 季度标题**起点 */}
                  <div className="bigHeadWrap">
                    <div className="bigOTitle">
                      <div className="headTwo">
                        <span className="flag">
                          <FlagOutlined />
                        </span>
                        <span className="oNum">O{indexOne + 1}：</span>
                        {itemOne.title}
                      </div>
                      <div className="reasonWeight">权重:100%</div>
                      <div className="reasonFinish">完成度:60%</div>
                      <div className="action">
                        <Dropdown overlay={choiceAction}>
                          <span className="headTwoRight">...</span>
                        </Dropdown>

                        <span className="headTwoRightArrow" onClick={expandKR}>
                          {isExpandKR ? <UpOutlined /> : <RightOutlined />}{' '}
                        </span>
                      </div>
                    </div>
                    <div className="bigOContent">
                      <div>中心目标：实施平台化战略</div>
                      <div>团队O1：配合智慧协同平台建设完成测试环境可视化展示</div>
                    </div>
                  </div>

                  {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
                  <div className={classnames({ reasonContentShow: true, reasonContentHide: isExpandKR })}>
                    {/* 每一个KR*/}
                    <div className="KRContentWrap">
                      <div className="KR" onClick={() => jumpToPersonYearKRDetail('1')}>
                        <div>
                          <span className="innerTitle">KR1：</span>完成方案设计及实施计划制定
                        </div>
                        <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                      </div>
                      <div className="small_15">
                        <span>50%</span>
                        <span>&nbsp;</span>
                      </div>
                      <div className="small_15">
                        <Progress percent={30} />
                        <span>&nbsp;</span>
                      </div>
                      <div className="none_word" onClick={() => jumpToPersonYearKRDetail('1')}>
                        <span>详情</span>
                        <span>&nbsp;</span>
                      </div>
                    </div>

                    {/* 每一个KR*/}
                    <div className="KRContentWrap">
                      <div className="KR">
                        <div>
                          <span className="innerTitle">KR1：</span>
                          完成方案设计及实施计划制定
                        </div>
                        <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                      </div>
                      <div className="small_15">50%</div>
                      <div className="small_15">
                        <Progress percent={30} />
                      </div>
                      <div className="none_word"></div>
                    </div>

                    {/*添加 KR 按钮 , 个人progress进度*/}
                    <div className="addKRBtn">
                      <PlusOutlined />
                      添加KR按钮
                    </div>
                    <div className="descTitle">个人progress进度：</div>
                    <div className="processInput">
                      <TextArea rows={2} />
                    </div>
                  </div>
                </div>
              );
            })
          : null}
        {/* 以上为完整一个季度的**终点 */}
        {/* 以上为完整一个季度的**终点 */}{' '}
      </div>
    </div>
  );
}

export default observer(MyOKR);
