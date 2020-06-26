import React, {useState} from 'react';
import {Button, Input} from 'antd';
import {GetData} from '../services/api/testGetData';
import '../styles/test/SelfCollapse.less'

function SelfCollapse() {
    const [val, setVal] = useState('');
    const dddd = (e) => {
        console.log(e.target.value);
        setVal(e.target.value);
    };

    const getDaTA = () => {
        const param = {};
        GetData(param).then((res) => {
            console.log(res);
        });
    };
    return (
        <div className="SelfCollapseWrap">
            <h2>我是错误页面</h2>
            <Button onClick={getDaTA}>发请求</Button>
            <Input placeholder="1"
                value={val}
                style={
                    {width: '200px'}
                }
                onChange={
                    (e) => dddd(e)
                }/>
            <br/>
            <div className="demo-slide-tab">
                <ul>
                    <li>
                        <h3>title 1</h3>
                        <div>content1</div>
                    </li>
                    <li>
                        <h3>title 2</h3>
                        <div>content2conte nt2content2content2content2conten t2content2content2content2content2conte nt2content2content2content2conte nt2content2content2content2 content2content2content 2content2content2content2content2conten t2content2c ontent2content2content2</div>
                    </li>
                    <li>
                        <h3>title 3</h3>
                        <div>content3</div>
                    </li>
                    <li>
                        <h3>title 4</h3>
                        <div>content4.</div>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default SelfCollapse;
