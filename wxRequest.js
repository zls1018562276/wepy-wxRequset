import wepy from 'wepy';

const wxRequest = async(params = {}, url) => {
    wx.showLoading({
        title: '加载中',
        mask: true
    });
    let data = params.query || {};
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: params.header || { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    console.log(res)
    if (res.data.code == 500153) {
        // 请求拦截
    }
    wx.hideLoading();
    return res;
};


module.exports = {
    wxRequest
}
