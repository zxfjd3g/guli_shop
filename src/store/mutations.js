import {
  RECEIVE_USER,
  RECEIVE_HOME_DATA,
  RECEIVE_ORDERS,
  RECEIVE_PRODUCT_DETAIL,
  RECEIVE_SEARCH
} from './mutation-type'

export default {

  [RECEIVE_HOME_DATA](state, homeData) {
    state.homeData = homeData
  },

  [RECEIVE_PRODUCT_DETAIL](state, productDetail) {
    state.productDetail = productDetail
  },

  [RECEIVE_SEARCH](state, {classifys, products}) {
    state.products = products
    state.classifys = classifys
  },

  [RECEIVE_USER](state, user) {
    state.user = user
  },

  [RECEIVE_ORDERS](state, orders) {
    state.orders = orders
  }
}