let plugins = [
  '-lunr', // 默认插件，无需引用
  '-sharing', // 默认插件，无需引用
  '-search', // 默认插件，无需引用
  '-favicon', // 默认插件，无需引用，更改网站的图标
  '-share',
  'code',  // 代码添加行号&复制按钮
  'expandable-chapters', // 折叠侧边栏
  'chapter-fold', // 折叠侧边栏，这2个连用，才可以实现多级标签折叠，不然只有2级标签
  'theme-lou',  // 网页主题
  'back-to-top-button',  // 返回顶部按钮
  'search-pro',   // 高级搜索
  'flexible-alerts', // 高级格式显示的提示块 
  'splitter', // 侧边栏宽度可调节
  'alerts',  // 漂亮格式的提示块
  //'valine', // 评论功能，开启时有点卡
  'popup', // 点击图片新页面弹出显示
  'auto-scroll-table', //自动表格过长滚动条
];
if (process.env.NODE_ENV == 'dev') plugins.push('livereload');

module.exports = {
  title: '💢',
  author: 'ROSit',
  lang: 'zh-hans',
  description: 'ROSit',
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
      logo: 'assets/rosit.png', // Logo图
      autoNumber: false, // 自动给标题添加编号(如1.1.1)
      titleColor: {
        // 自定义标题颜色(不设置则默认使用主题色)
        h1: '#8b008b', // 一级标题颜色
        h2: '#009966', // 二级标题颜色
        h3: '#a52a2a', // 三级标题颜色
        h4: '#176186', // 四级标题颜色
        h5: '#5B4B00', // 五级标题颜色
        h6: '#8C8C00', // 六级标题颜色
      },
      forbidCopy: false, // 页面是否禁止复制（不影响code插件的复制）
      'search-placeholder': '全文搜索', // 搜索框默认文本
      'hide-elements': ['.summary .gitbook-link'], // 需要隐藏的标签
      copyright: {
        author: 'ROSit', // 底部版权展示的作者名
      },
    },
    "valine": {
      "appId": "3D2fncm2tN4FI5duTIQA11qY-gzGzoHsz",
      "appKey": "qh5zfPEVsjNxqCWz3hZMGaPB"
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

        copyright: true, // 显示版权
      },
    },
  },
};
