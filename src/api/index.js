import ajax from './ajax'

const BASE = '/api'

// 获取首页数据
export const reqHomeData = () => ajax(`${BASE}/home_data`)

export const reqProductDetail = (id) => ajax(`${BASE}/product_detail`, {id})

export const reqSearch = (searchWord) => ajax(`${BASE}/product_search`, {searchWord})

export const reqRegister = ({username, password, phone, code}) => ajax(`${BASE}/register`, {
  username,
  password,
  phone,
  code
}, "POST")

export const reqSendCode = () => ajax(`${BASE}/sendcode`)

export const reqLogin = ({username, password, code}) => ajax(`${BASE}/login`, {
  username,
  password,
  code
}, "POST")

export const reqOrders = ({id}) => ajax(`${BASE}/orders`, {id})