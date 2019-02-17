import Mock from 'mockjs';

import home from './home.json';
import detail from './detail.json';
import search from './search.json';
import userinfo from './userinfo.json';
import orderinfos from './orderinfo.json';

Mock.mock('/homedata',{code:0,data:home});
Mock.mock('/gooddetail?id=123',{code:0,data:detail});
Mock.mock('/listdata?query=phone',{code:0,data:search});
Mock.mock('/reqcode',{code:0,data:"/static/image/yanzhengma.jpg"});
Mock.mock('/loginuser',{code:0,data:userinfo});
Mock.mock('/orderinfos',{code:0,data:orderinfos});