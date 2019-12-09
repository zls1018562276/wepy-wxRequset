# wepy-wxRequset
基于wepy框架的接口封装

## 页面使用方法
```
async api(){
  let res = await api.checkInviteCode({
      query: {
        'xxx': 'xxx'
      },
      method: 'get'// 或post 不写默认
      header：{ 'Content-Type': 'application/x-www-form-urlencoded' } // 默认表单提交方式
  })
  console.log(res) // res就是接口返回的response对象
}
```

增加接口时，请在api.js中添加地址路径 

*例如：*
```
const checkInviteCode = (params) => wxRequest(params, apiMall + 'user/checkInviteCode');
//新增接口路径
const aa = (params) => wxRequest(params, apiMall + 'aa');

export default {
  checkInviteCode,
  aa // 新增定义的函数名
}
```
