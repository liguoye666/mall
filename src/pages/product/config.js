export const sliderOptions = { // 轮播图配置
  direction: 'horizontal', // horizontal:水平 vertical:垂直
  loop: true, // 是否无缝滚动
  interval: 0, // 自动播放时间间隔，为0则不自动播放
  pagination: true // 是否需要分页器
};

const prefix = 'mall-product';
const suffix = 'key';
export const PRODUCT_CONTENT_KEY = `${prefix}-content-${suffix}`;
export const PRODUCT_CONTENT_UPDATE_TIME_INTERVAL = 1 * 24 * 60 * 60 * 1000;
// export const PRODUCT_CONTENT_UPDATE_TIME_INTERVAL = 10 * 1000;
