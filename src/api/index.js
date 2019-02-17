import ajax from './ajax'

const BASE = '/api'

// Index
//获取热门搜索词条
export const reqHomeHotSearch = () => ajax(`${BASE}/index/hot_search`);
//获取侧边导航栏一级列表
export const reqHomeCates = () => ajax(`${BASE}/index/cates`);
//获取侧边导航栏某个一级列表下的二级/三级列表
export const reqHomeCateList = (id) => ajax(`${BASE}/index/cates/${id}`);
//获取轮播图
export const reqHomeAdv = () => ajax(`${BASE}/index/adv`);
//获取热门推荐商品
export const reqHomeHotProducts = () => ajax(`${BASE}/index/hot_product`);
//获取热门推荐商品
export const reqHomeFlashShop = () => ajax(`${BASE}/index/miaosha`);
//获取热门推荐商品
export const reqHomeRecommend = () => ajax(`${BASE}/index/miaosha`);


//Deatil
//获取商品详细信息
export const reqProductInfo = (id) => ajax(`${BASE}/product/${id}`);

//Cart
//将商品添加到购物车
export const reqCartAdd = ({id,count}) => ajax(`${BASE}/cart/add`,{id,count});
//获取购物车商品列表
export const reqCartList = () => ajax(`${BASE}/cart/list`);
//更新商品
export const reqCartUpdate = ({id,count}) => ajax(`${BASE}/cart/update`,{id,count});
//删除商品
export const reqCartDelete = (id) => ajax(`${BASE}/cart/delete`,{id});
//选中/取消选中商品
export const reqCartCheck = ({id,type}) => ajax(`${BASE}/cart/check`,{id,type});
//全选/取消全选商品
export const reqCartCheckAll = (type) => ajax(`${BASE}/cart/checkAll`,{type});

//Order
//获取订单列表
export const reqOrderList = () => ajax(`${BASE}/order/list`);
//订单搜索
export const reqOrderSearch = (keyword) => ajax(`${BASE}/order/search`,{keyword});
//订单搜索
export const reqUserAddress = () => ajax(`${BASE}/order/user_address`);

//Search
//搜索
export const reqSearch = () => ajax(`${BASE}/search`);

//User
//用户信息
export const reqUserInfo = () => ajax(`${BASE}/user/info`,{},'POST');
//登陆
export const reqLogin = ({username,password}) => ajax(`${BASE}/user/login`,{username,password},'POST');
//注册
export const reqRegister = () => ajax(`${BASE}/user/regist`,{},'POST');

//Pay
//支付
export const reqPayOrder = ({orderId,token,type,total}) => ajax(`${BASE}/pay/order`,{orderId,token,type,total},'POST');
