import {
  reqHomeData,
  reqProductDetail,
  reqSearch,
  reqRegister,
  reqLogin,
  reqOrders
} from '../api'

import {
  RECEIVE_USER,
  RECEIVE_HOME_DATA,
  RECEIVE_ORDERS,
  RECEIVE_PRODUCT_DETAIL,
  RECEIVE_SEARCH
} from './mutation-type'

export default {

  async getHomeData({commit}, cb) {
    const result = await reqHomeData()
    if (!result.code) {
      commit(RECEIVE_HOME_DATA, result.data)
      cb && cb()
    }
  },

  async getProductDetail({commit}, id) {
    const result = await reqProductDetail(id)
    if (!result.code) {
      commit(RECEIVE_PRODUCT_DETAIL, result.data)
    }
  },

  async search({commit}, searchWord) {
    const result = await reqSearch(searchWord)
    if (!result.code) {
      commit(RECEIVE_SEARCH, result.data)
    }
  },

  async register({commit}, data) {
    const result = await reqRegister(data)
    //发送注册用户请求
    if (result.code === 0) {
      commit(RECEIVE_USER, result.data)
    }
  },

  async login({commit}, {username, password, code, isLogin}) {
    const result = await reqLogin({username, password, code})
    if (!result.code) {
      commit(RECEIVE_USER, result.data)
      isLogin()
    }
  },

  async getOrders({state, commit}) {
    const result = await reqOrders({id: state.user.id})
    if (result.code === 0) {
      commit(RECEIVE_ORDERS, result.data)
    }
  }
}