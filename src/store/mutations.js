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
  RECEIVE_USER_INFO,
  RECEIVE_LOGIN,
  RECEIVE_REGISTER,
  USER_LOGOUT,
  RECEIVE_BUY_ORDERLIST,
  RECEIVE_ORDERLIST,
  RECEIVE_SEARCH,
  RECEIVE_KEYWORD
} from './mutation-type'

export default {
  [RECEIVE_HOME_HOT_SEARCH](state, hotSearch) {
    state.hotSearch = hotSearch
  },
  [RECEIVE_HOME_CATES](state, homeCates) {
    state.homeCates = homeCates
  },
  [RECEIVE_HOME_CATELIST](state, {subs,curIndex}) {
    state.homeCates[curIndex].subs = subs;
  },
  [RECEIVE_HOME_ADV](state, data) {
    state.homeAdv = data;
  },
  [RECEIVE_HOME_HOTPRODUCTS](state, data) {
    state.hotProducts = data;
  },
  [RECEIVE_HOME_FLASHSHOP](state, data) {
    state.flashShop = data;
  },
  [RECEIVE_PRODUCT_INFO](state, data) {
    state.productInfo = data;
  },
  [RECEIVE_CART_ADD](state, data) {
    if(data){
      state.cartKey = data.cartKey;
    }
  },
  [RECEIVE_CART_LIST](state, data) {
    state.cartList = data;
  },
  [RECEIVE_USER_TOKEN](state, userToken) {
    state.userToken=userToken;
  },
  [RECEIVE_USER_INFO](state, userInfo) {
    state.userInfo=userInfo;
  },
  [RECEIVE_LOGIN](state, {userinfo,token}) {
    state.userinfo= userinfo;
    state.token=token;
  },
  [RECEIVE_REGISTER](state, {token}) {
    state.token=token;
  },
  [USER_LOGOUT](state) {
    state.userinfo= {};
    state.userToken="";
  },
  [RECEIVE_BUY_ORDERLIST](state,data) {
    state.buyOrderList=data.cartItem;
    state.tradeToken=data.tradeToken;
  },
  [RECEIVE_ORDERLIST](state,data) {
    state.orderList=data;
  },
  [RECEIVE_SEARCH](state, data) {
    state.searchInfo = data;
  },
  [RECEIVE_KEYWORD](state, keyword) {
    state.keyword = keyword;
  },
}
