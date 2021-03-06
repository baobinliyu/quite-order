export default {
    common: {
        area: '/uc/support/country'
    },
    uc: { //会员中心接口
        login: '/uc/login',
        register: '/uc/register',
        wallet: '/uc/asset/wallet/',
        captcha: '/uc/start/captcha',
        identification: '/uc/approve/certified/business/status', //商家认证
        apply: '/uc/approve/certified/business/apply', //商家认证申请
        state: '/uc/approve/certified/business/status', //商家认证状态
        announcement: '/uc/announcement/page', //公告列表
        announcement1: '/uc/announcement/', //列表详情
        banner: '/uc/ancillary/system/advertise', //系统广告
        withdramRecord: '/uc/withdraw/record' //提现记录
    },
    market: { //币币交易行情接口
        ws: '/market/market-ws',
        thumb: '/market/symbol-thumb',
        thumbTrend: '/market/symbol-thumb-trend',
        plate: '/market/exchange-plate', //主动查询的盘口信息
        platemini: '/market/exchange-plate-mini', //获取10条数据
        trade: '/market/latest-trade/', //主动查询的实时成交信息
        symbolInfo: '/market/symbol-info'
    },
    exchange: { //币币交易委托提交与查询接口
        orderAdd: '/exchange/order/add', //提交订单接口
        current: '/exchange/order/current', //当前委托接口
        history: '/exchange/order/history', //历史委托接口
        detail: '/exchange/order/detail/', //详细订单接口
        favorFind: '/exchange/favor/find', //查询自选
        favorAdd: '/exchange/favor/add', //添加自选
        favorDelete: '/exchange/favor/delete', //删除自选
        orderCancel: '/exchange/order/cancel' //取消委托
    },
    otc: {
        coin: '/otc/coin/all', //查询支持的币种
        advertise: '/otc/advertise/page-by-unit', //获取广告
        createAd: '/otc/ad/create', //创建广告
        adDetail: '/otc/advertise/detail'
    }
}