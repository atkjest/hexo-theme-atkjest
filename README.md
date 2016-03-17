### hexo-theme-atkjest
一款优雅的Hexo主题，简约而不简单，灵感来自于知乎专栏，可以点击[atkjest.me](http://atkjest.me)查看效果。

### 关于主题
1、知乎专栏布局设计 => 灵感来源
2、百度分享 => qq空间、新浪微博、微信等
3、comment => 多说评论
4、firebase数据统计 => 网站访问量、点赞统计
5、Google Search站内搜索 => Google site: 站内搜索
6、RSS订阅 => hexo-generator-feed
7、font awesome => 图标字体

![hexo-theme-atkjest]()

### 使用
#### 安装
`$ git clone https://github.com/atkjest/hexo-theme-atkjest.git themes/atkjest`
#### 配置
修改hexo根目录下的 _config.yml
`theme: atkjest`
#### 更新
cd themes/atkjest
git pull

### 主题配置
配置文件在主题根目录下的_config.yml
```bash
author: atkjest
titlebar: 吴继超的个人博客
profile: 嵌入式 | 信息安全

avatar: favicon.jpg
since: 2014

## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://atkjest.me
root: /

rss: /atom.xml
social:
  zhihu: https://www.zhihu.com/people/jichao-wu
  github: https://github.com/atkjest
  
# Read More
excerpt_link: true

duoshuo_shortname: zone-atkjest
firebase_url: https://amber-heat-3995.firebaseio.com/
```