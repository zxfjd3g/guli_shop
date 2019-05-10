import {
  reqHomeHotSearch,
  reqHomeCates,
  reqHomeCateList,
  reqHomeAdv,
  reqHomeHotProducts,
  reqHomeFlashShop,
  reqProductInfo,
  reqCartAdd,
  reqCartList,
  reqCartUpdate,
  reqCartDelete,
  reqCartCheck,
  reqCartCheckAll,
  reqLogin,
  reqRegister,
  reqOrderList,
  reqSearch
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
  RECEIVE_CART_ADD,
  RECEIVE_CART_LIST,
  RECEIVE_USER_TOKEN,
  RECEIVE_LOGIN,
  RECEIVE_REGISTER,
  USER_LOGOUT,
  RECEIVE_ORDERLIST,
  RECEIVE_SEARCH,
  RECEIVE_KEYWORD
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
    commit(RECEIVE_PRODUCT_INFO, result);
    typeof cb=="function"&&cb();
  },

  async getCartAdd({commit,state}, {id,count,cb}) {
    const result = await reqCartAdd({id,count,token:state.userToken,cartKey:state.cartKey});
    if (result.code) {
      commit(RECEIVE_CART_ADD, result.data);
      typeof cb=="function"&&cb();
    }
  },

  async getCartList({commit,state}) {
    const result = await reqCartList({token:state.userToken,cartKey:state.cartKey});
    if (result.code) {
      commit(RECEIVE_CART_LIST, result.data);
    }
  },

  async getCartUpdate({commit,state},{id,count,cb}) {
    const result = await reqCartUpdate({id,count,token:state.userToken,cartKey:state.cartKey});
    // if (result.code&&typeof cb=="function") {
    //   cb("修改数量成功");
    // }
  },

  async getCartDelete({commit,state},{id,cb}) {
    const result = await reqCartDelete({id,token:state.userToken,cartKey:state.cartKey});
    // if (result.code&&typeof cb=="function") {
    //   cb(result.msg);
    // }
  },

  async getCartCheck({commit,state},{id,type,cb}) {
    const result = await reqCartCheck({id,type,token:state.userToken,cartKey:state.cartKey});
    // if (result.code&&typeof cb=="function") {
    //   cb(result.msg);
    // }
  },

  async getCartCheckAll({commit,state},{type,cb}) {
    const result = await reqCartCheckAll({type,token:state.userToken,cartKey:state.cartKey});
    // if (result.code&&typeof cb=="function") {
    //   cb(result.msg);
    // }
  },

  getLogin({commit}) {
    const url="http://localhost:8080";
    window.location.href=`http://2b7gzhsrv5.51http.tech/register/authorization?authType=weibo&url=${url}`;
    // const result = await reqLogin(url);
  },

  setUserToken({commit},userToken){
    commit(RECEIVE_USER_TOKEN,userToken);
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

  async getSearch({commit},data) {
    let cb=data.cb;
    delete data.cb;
    const result = await reqSearch(data);
    commit(RECEIVE_KEYWORD, data.keyword);
    commit(RECEIVE_SEARCH, result);
    typeof cb=="function"&&cb();
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
