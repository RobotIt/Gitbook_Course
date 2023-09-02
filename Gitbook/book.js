let plugins = [
  '-lunr', // 默认插件，无需引用
  '-sharing', // 默认插件，无需引用
  '-search', // 默认插件，无需引用
  '-favicon', // 默认插件，无需引用
  '-share',
  'code',
  'expandable-chapters',
  'theme-lou',
  'back-to-top-button',
  'search-pro',
  'flexible-alerts',
  'chapter-fold',
  'pageview-count',
  'splitter'
];
if (process.env.NODE_ENV == 'dev') plugins.push('livereload');

module.exports = {
  title: '操作指南',
  author: 'ROSIt',
  lang: 'zh-hans',
  description: 'ROS移动机器人实用技术',
  plugins,
  pluginsConfig: {
    // gitbook-plugin-code 插件配置
    code: {
      copyButtons: true, // code插件复制按钮
    },
    // gitbook-plugin-theme-lou 主题插件配置
    'theme-lou': {
      color: '#2096FF', // 主题色
      favicon: 'assets/favicon.ico', // 网站图标
      logo: 'assets/ros.png', // Logo图
      copyrightLogo: 'assets/copyright.png', // 背景水印版权图
      autoNumber: false, // 自动给标题添加编号(如1.1.1)
      titleColor: {
        // 自定义标题颜色(不设置则默认使用主题色)
        h1: '#8b008b', // 一级标题颜色
        h2: '#20b2aa', // 二级标题颜色
        h3: '#a52a2a', // 三级标题颜色
      },
      forbidCopy: false, // 页面是否禁止复制（不影响code插件的复制）
      'search-placeholder': '全文搜索', // 搜索框默认文本
      'hide-elements': ['.summary .gitbook-link'], // 需要隐藏的标签
      copyright: {
        author: 'ROSIt', // 底部版权展示的作者名
      },
    },
  },
  variables: {
    themeLou: {
      // 顶部导航栏配置
      nav: [
        {
          target: '_blank', // 跳转方式: 打开新页面
          url: 'https://www.bilibili.com/video/BV1Ci4y1L7ZZ/?spm_id_from=333.337.search-card.all.click&vd_source=7df640296c15e75b5fbd2da8cc72a434', // 跳转页面
          name: 'B站', // 导航名称
        },
        // {
        //   target: '_blank', // 跳转方式: 打开新页面
        //   url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIzMjY0NjU5Ng==&scene=124#wechat_redirect', // 跳转页面
        //   name: '公众号', // 导航名称
        // },
        // {
        //   target: '_blank', // 跳转方式: 打开新页面
        //   url: 'https://edu.csdn.net/course/detail/32032', // 跳转页面
        //   name: 'CSDN', // 导航名称
        // },
      ],
      // 底部打赏配置
      footer: {
        donate: {
          button: '赞赏', // 打赏按钮
          avatar: 'assets/apple.png', // 头像地址
          nickname: 'ROSIt', // 显示打赏昵称
          message: '随意打赏，但不要超过一顿早餐钱！☕️', // 打赏消息文本
          text: '『 赠人玫瑰 🌹 手有余香 』',
          wxpay: 'assets/wechat.jpg', // 微信收款码
          alipay: 'assets/alipay.jpg', // 支付宝收款码
        },
        copyright: true, // 显示版权
      },
    },
  },
};
