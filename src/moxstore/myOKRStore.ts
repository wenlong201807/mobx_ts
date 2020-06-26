import {action, observable} from 'mobx';
// import myOKRData from './fakeData/myOKR'
// console.log('myOKRStore', myOKRData)
// import { createContext } from 'react';  //只有在跟状态中需要使用
export default observable.object({
    // myOKRData,
    myOKRData: [
        {
            key: '1',
            id: 1,
            title: '实施平台化战略0000',
            objectArr: [
                {
                    key: '1-1',
                    id: 11,
                    headItem: {
                        head: 'O1第一个',
                        weight: '100%',
                        finish: '56%',
                        admin: '李雷',
                        isEditObjHead: false,
                        isEditKRs: false,
                        isExpandKRsList: false
                    },
                    list: [
                        {
                            id: 1,
                            key: '1-1-1',
                            content: 'woshineir1',
                            myWeight: '30%',
                            myFinish: '20%',
                            myAdmin: '郭靖',
                            myAction: '详情',
                            isEditKRs: false
                        }, {
                            id: 2,
                            key: '1-1-2',
                            content: 'woshineir2',
                            myWeight: '50%',
                            myFinish: '70%',
                            myAdmin: '文',
                            myAction: '详情',
                            isEditKRs: false
                        },
                    ]
                }, {
                    key: '1-2',
                    id: 12,
                    headItem: {
                        head: 'O2第er个',
                        weight: '90%',
                        finish: '96%',
                        admin: '景甜',
                        isEditObjHead: false,
                        isEditKRs: false,
                        isExpandKRsList: false
                    },
                    list: [
                        {
                            id: 1,
                            key: '1-2-1',
                            content: 'woshineir1',
                            myWeight: '30%',
                            myFinish: '20%',
                            myAdmin: '朱允文',
                            myAction: '详情',
                            isEditKRs: false
                        }, {
                            id: 2,
                            key: '1-2-2',
                            content: 'woshineir2',
                            myWeight: '50%',
                            myFinish: '70%',
                            myAdmin: '文言文',
                            myAction: '详情',
                            isEditKRs: false
                        },
                    ]
                },
            ]
        }, {
            key: '2',
            id: 2,
            title: '专业能力建设OOOOO',
            objectArr: [
                {
                    key: '2-1',
                    id: 21,
                    headItem: {
                        head: 'O1第一个',
                        weight: '100%',
                        finish: '56%',
                        admin: '哪吒',
                        isEditObjHead: false,
                        isEditKRs: false,
                        isExpandKRsList: false
                    },
                    list: [
                        {
                            id: 1,
                            key: '2-1-1',
                            content: 'woshineir1',
                            myWeight: '30%',
                            myFinish: '20%',
                            myAdmin: '朱',
                            myAction: '详情',
                            isEditKRs: false
                        }, {
                            id: 2,
                            key: '2-1-2',
                            content: 'woshineir2',
                            myWeight: '50%',
                            myFinish: '70%',
                            myAdmin: '文',
                            myAction: '详情',
                            isEditKRs: false
                        },
                    ]
                }, {
                    key: '2-2',
                    id: 22,
                    headItem: {
                        head: 'O2第er个',
                        weight: '100%',
                        finish: '56%',
                        admin: '刘亦菲',
                        isEditObjHead: false,
                        isEditKRs: false,
                        isExpandKRsList: false
                    },
                    list: [
                        {
                            id: 1,
                            key: '2-2-1',
                            content: 'woshineir1',
                            myWeight: '30%',
                            myFinish: '20%',
                            myAdmin: '朱之歌',
                            myAction: '详情',
                            isEditKRs: false
                        }, {
                            id: 2,
                            key: '2-2-2',
                            content: 'woshineir2',
                            myWeight: '50%',
                            myFinish: '70%',
                            myAdmin: '文话',
                            myAction: '详情',
                            isEditKRs: false
                        },
                    ]
                },
            ]
        },
    ],
    time: 0,
    changtime(val) {
        this.time = val;
    },
    increa(num : any) {
        this.changtime(this.time + num);
    },
    decreat(num : any) {
        this.changtime(this.time - num);
    }
}, {
    increa: action,
    decreat: action
},);
