import { reqGetSearchInfo } from "@/api"
// state:仓库存储数据的地方
const state = {
  searchList: {}
}

// mutations:修改state的唯一手段
const mutations = {
  SEARCHINFO(state, searchList) {
    state.searchList = searchList
  }
}

// action: 处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async getSearchInfo({ commit }, data = {}) {
    const res = await reqGetSearchInfo(data)
    if (res.code === 200) {
      commit('SEARCHINFO', res.data)
    }
  }
}

//getters: 理解为计算属性，用于简化仓库数据的获取
const getters = {
  trademarkList(state) {
    // 当网络不好的时候，可能返回undefined,会出错
    // 若为undefined 返回空数组
    return state.searchList.trademarkList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  },
  goodsList(state) {
    return state.searchList.goodsList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}