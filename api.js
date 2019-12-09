import {
    wxRequest
} from './wxRequest';
const apiMall = 'https://erp.jizhangyl.com/jizhangyl' // 服务器端
//验证邀请码是否正确
const checkInviteCode = (params) => wxRequest(params, apiMall + 'user/checkInviteCode');
export default {
    checkInviteCode
}