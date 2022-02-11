import { reqGetSearchInfo } from "@/api"
// state:仓库存储数据的地方
const state = {
  searchList: {}
}

// mutations:修改state的唯一手段
const mutations = {
  SEARCHINFO(state,searchList){
    state.searchList = searchList
  }
}

// action: 处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async getSearchInfo({ commit }, data = {}) {
    const res = await reqGetSearchInfo(data)
    if (res.code === 200) {
      commit('SEARCHINFO',res.data)
    }
  }
}

//getters: 理解为计算属性，用于简化仓库数据的获取
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}