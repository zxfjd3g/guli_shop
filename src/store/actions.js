import {
  reqHomeHotSearch,
  reqHomeCates,
  reqHomeCateList,
  reqHomeAdv,
  reqHomeHotProducts,
  reqHomeFlashShop,
  reqProductInfo,
  reqCartAdd,
  reqSearch,
  reqCartList,
  reqCartUpdate,
  reqCartDelete,
  reqCartCheck,
  reqCartCheckAll,
  reqLogin,
  reqRegister,
  reqOrderList
} from '../api'

import {
  RECEIVE_HOME_HOT_SEARCH,
  RECEIVE_HOME_CATES,
  RECEIVE_HOME_CATELIST,
  RECEIVE_HOME_ADV,
  RECEIVE_HOME_HOTPRODUCTS,
  RECEIVE_HOME_FLASHSHOP,
  RECEIVE_PRODUCT_INFO,
  RECEIVE_SEARCH_INFO,
  RECEIVE_CART_LIST,
  RECEIVE_LOGIN,
  RECEIVE_REGISTER,
  USER_LOGOUT,
  RECEIVE_ORDERLIST
} from './mutation-type'

export default {

  async getHotSearch({commit}) {
    const result = await reqHomeHotSearch()
    if (!result.code) {
      commit(RECEIVE_HOME_HOT_SEARCH, result.data)
    }
  },
  async getHomeCates({commit}) {
    const result = await reqHomeCates()
    if (!result.code) {
      commit(RECEIVE_HOME_CATES, result.data)
    }
  },
  async getHomeCateList({commit},{id,curIndex}) {
    const result = await reqHomeCateList(id)
    if (!result.code) {
      commit(RECEIVE_HOME_CATELIST, {subs:result.data,curIndex})
    }
  },
  async getHomeAdv({commit},cb) {
    const result = await reqHomeAdv()
    if (!result.code) {
      commit(RECEIVE_HOME_ADV,result.data);
      typeof cb=="function"&&cb();
    }
  },
  async getHomeHotProducts({commit}) {
    const result = await reqHomeHotProducts()
    if (!result.code) {
      commit(RECEIVE_HOME_HOTPRODUCTS,result.data);
    }
  },
  async getHomeFlashShop({commit}) {
    const result = await reqHomeFlashShop()
    if (!result.code) {
      commit(RECEIVE_HOME_FLASHSHOP,result.data);
    }
  },

  async getProductDetail({commit}, {id,cb}) {
    const result = await reqProductInfo(id);
    if (!result.code) {
      commit(RECEIVE_PRODUCT_INFO, result.data);
      typeof cb=="function"&&cb();
    }
  },

  async getCartAdd({commit}, {id,count,cb}) {
    const result = await reqCartAdd({id,count});
    if (!result.code) {
      typeof cb=="function"&&cb();
    }
  },

  async getSearch({commit}) {
    const result = await reqSearch();
    if (!result.code) {
      commit(RECEIVE_SEARCH_INFO, result.data);
    }
  },

  async getCartList({commit}) {
    const result = await reqCartList();
    if (!result.code) {
      commit(RECEIVE_CART_LIST, result.data);
    }
  },

  async getCartUpdate({commit},{id,count,cb}) {
    const result = await reqCartUpdate({id,count});
    if (result.code&&typeof cb=="function") {
      cb(result.msg);
    }
  },

  async getCartDelete({commit},{id,cb}) {
    const result = await reqCartDelete({id});
    if (result.code&&typeof cb=="function") {
      cb(result.msg);
    }
  },

  async getCartCheck({commit},{id,type,cb}) {
    const result = await reqCartCheck({id,type});
    if (result.code&&typeof cb=="function") {
      cb(result.msg);
    }
  },

  async getCartCheckAll({commit},{type,cb}) {
    const result = await reqCartCheckAll({type});
    if (result.code&&typeof cb=="function") {
      cb(result.msg);
    }
  },

  async getLogin({commit},{username,password,cb}) {
    const result = await reqLogin({username,password});
    if (!result.code) {
      commit(RECEIVE_LOGIN, result.data);
      typeof cb=="function"&&cb();
    }
  },

  async getRegister({commit},{phone,code,cb}) {
    const result = await reqRegister({phone,code});
    if (!result.code&&typeof cb=="function") {
      commit(RECEIVE_REGISTER, result.data);
      cb();
    }
  },

  userLogOut({commit},cb) {
      commit(USER_LOGOUT);
      typeof cb=="function"&&cb();
  },

  async getOrderList({commit}) {
    const result = await reqOrderList();
    if (!result.code) {
      commit(RECEIVE_ORDERLIST, result.data);
    }
  },


  

  // async search({commit}, searchWord) {
  //   const result = await reqSearch(searchWord)
  //   if (!result.code) {
  //     commit(RECEIVE_SEARCH, result.data)
  //   }
  // },
  //
  // async register({commit}, data) {
  //   const result = await reqRegister(data)
  //   //发送注册用户请求
  //   if (result.code === 0) {
  //     commit(RECEIVE_USER, result.data)
  //   }
  // },
  //
  // async login({commit}, {username, password, code, isLogin}) {
  //   const result = await reqLogin({username, password, code})
  //   if (!result.code) {
  //     commit(RECEIVE_USER, result.data)
  //     isLogin()
  //   }
  // },

  // async getOrders({state, commit}) {
  //   const result = await reqOrders({id: state.user.id})
  //   if (result.code === 0) {
  //     commit(RECEIVE_ORDERS, result.data)
  //   }
  // }
}
