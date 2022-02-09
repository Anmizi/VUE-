// 统一管理所有API接口
import requests from "./request";
import mockRequests from './mockAjax'

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get'})

// 获取banner轮播图数据
export const reqGetBannerList = () => mockRequests.get('/banner')

// 获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floor')
