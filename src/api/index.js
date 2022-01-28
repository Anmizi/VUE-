// 统一管理所有API接口
import requests from "./request";

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get'})
