import moment from 'moment';

const dateFormat = 'YYYY' // 定义当前年份格式
const currentDateYearGlobal = moment().format(dateFormat)
// const currentDateYearGlobal = 999
// 使用
// import {currentDateYearGlobal} from '../util/globalFn'
// console.log('全局定义时间',currentDateYearGlobal)
export {
    currentDateYearGlobal
}
