import React, { useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import "../../styles/reflect/TestEnvTeamOKR2.scss";
import TestEnvTeamSecond from "../../components/TestEnvTeam/TestEnvTeamSecond";
import { observer } from "mobx-react";
import RootStoreContext from "../../moxstore/rootStroe/index";

export default observer(function TestEnvTeamOKR2() {
  const { okrStore } = useContext(RootStoreContext);
  const { TestEnvTeamOKRData } = okrStore;

  return (
    <div className="TestEnvTeamOKR2Cla">
      <div className="titleWrap">
        <h2>测试环境团队OKR管理</h2>
        <div className="leftBtn">
          <div>
            日历 <PlusOutlined />
          </div>
        </div>
      </div>
      {/*循环位置*/}
      {TestEnvTeamOKRData.map((item, index) => {
        // console.log('item.objectArr:', item.objectArr);
        return (
          <div className="contentWrap" key={index}>
            <div className="ObjectTitle">
              <PlusOutlined />
              <span className="title">{item.title}</span>
            </div>
            <TestEnvTeamSecond {...item}></TestEnvTeamSecond>
          </div>
        );
      })}
    </div>
  );
});

/*

   {TestEnvTeamOKRData.map((item, index) => {
        // console.log('item.objectArr:', item.objectArr);
        return (
          <div className="contentWrap" key={index}>
            <div className="ObjectTitle">
              <PlusOutlined />
              <span className="title">{item.title}</span>
            </div>
            <TestEnvTeamSecond {...item}></TestEnvTeamSecond>
          </div>
        );
      })}

    */
