import {
  RECEIVE_HOME_HOT_SEARCH,
  RECEIVE_HOME_CATES,
  RECEIVE_HOME_CATELIST,
  RECEIVE_HOME_ADV,
  RECEIVE_HOME_HOTPRODUCTS,
  RECEIVE_HOME_FLASHSHOP,
  RECEIVE_PRODUCT_INFO
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
}
