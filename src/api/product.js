import jsonp from 'assets/js/jsonp';
import {jsonpOptions} from './config';

// 打乱数组顺序
// const shuffle = (arr) => {
//   const arrLength = arr.length;
//   let i = arrLength;
//   let rndNum;
//
//   while (i--) {
//     if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
//       [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
//     }
//   }
//
//   return arr;
// };

// 获取热门推荐数据--jsonp
export const getProductData = id => {
  let data = `%7B"itemNumId"%3A"${id}"%7D`;
  let url = `https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/?api=mtop.taobao.detail.getdetail&ttid=2017%40taobao_h5_6.6.0&data=${data}&appKey=12574478&dataType=jsonp&type=jsonp&v=6.0&callback=__jp1`;
  let params = {};

  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.ret[0] === 'SUCCESS::调用成功') {
      res = res.data;
      return res;
    }
    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  });
};
