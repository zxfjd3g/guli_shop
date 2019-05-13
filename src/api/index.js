import ajax from './ajax'

const BASE = '/api'
const NEWBASE = '/newapi'
const LOGINBASE = '/loginapi'

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
export const reqProductInfo = (id) => ajax(`${NEWBASE}/item/${id}.html`);

//Cart
//将商品添加到购物车
export const reqCartAdd = ({id,count,token,cartKey}) => ajax(`${NEWBASE}/cart/add`,{skuId:id*1,num:count,token,cartKey},"POSTFORM");
//获取购物车商品列表
export const reqCartList = ({token,cartKey}) => ajax(`${NEWBASE}/cart/list`,{token,cartKey});
//更新商品
export const reqCartUpdate = ({id,count,token,cartKey}) => ajax(`${NEWBASE}/cart/update`,{skuId:id,num:count,token,cartKey},"POSTFORM");
//删除商品
export const reqCartDelete = ({id,token,cartKey}) => ajax(`${NEWBASE}/cart/delete`,{skuId:id,token,cartKey},"POSTFORM");
//选中/取消选中商品
export const reqCartCheck = ({id,type,token,cartKey}) => ajax(`${NEWBASE}/cart/check`,{skuId:id,flag:type,token,cartKey},"POSTFORM");
//全选/取消全选商品
export const reqCartCheckAll = ({type,token,cartKey}) => ajax(`${NEWBASE}/cart/checkAll`,{flag:type,token,cartKey},"POSTFORM");

//Order
//获取订单列表
export const reqOrderList = () => ajax(`${NEWBASE}/order/list`);
//订单搜索
export const reqOrderSearch = (keyword) => ajax(`${NEWBASE}/order/search`,{keyword});
//订单搜索
export const reqUserAddress = () => ajax(`${NEWBASE}/order/user_address`);

//Search
//搜索
export const reqSearch = (data) => ajax(`${NEWBASE}/search`,data);

//User
//用户信息
export const reqUserInfo = (token) => ajax(`${LOGINBASE}/userinfo`,{token});
//登陆
export const reqLogin = (url) => ajax(`${LOGINBASE}/register/authorization?authType=weibo&url=${url}`);
//注册
export const reqRegister = ({phone,code}) => ajax(`${NEWBASE}/user/regist`,{phone,code},'POST');

//Buy
//购买订单
export const reqBuyOrderList = (token) => ajax(`${NEWBASE}/order/orderconfirm`,{token},"POSTFORM");

//Pay
//支付
export const reqPayOrder = ({orderId,token,type,total}) => ajax(`${NEWBASE}/pay/order`,{orderId,token,type,total},'POST');
