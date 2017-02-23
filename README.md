# hexo-theme-atkjest
一款优雅的Hexo主题，简约而不简单，灵感来自于知乎专栏

## 关于主题
* 知乎专栏布局设计 => 灵感来源 && Iris => 美工设计师 <br/>
* 百度分享 => qq空间、新浪微博、微信等 <br/>
* comment => 多说评论 <br/>
* firebase数据统计 => 网站访问量、点赞统计 <br/>
* Google Search站内搜索 => Google site: 站内搜索 <br/>
* RSS订阅 => hexo-generator-feed <br/>
* font awesome => 图标字体 <br/>
* 有字库在线云字体 => 站点标题 <br/>
* 多说社会化评论框核心脚本`embed.js`本地化 => 加载速度更快

![hexo-theme-atkjest](http://7xot8c.com1.z0.glb.clouddn.com/2016-03-18-152434_1366x768_scrot.png)
![hexo-theme-bottom](http://7xot8c.com1.z0.glb.clouddn.com/2016-03-18-152950_1366x768_scrot.png)

## 使用

### 安装
`$ git clone https://github.com/atkjest/hexo-theme-atkjest.git themes/atkjest`
### 配置
修改hexo根目录下的 _config.yml <br/>
`theme: atkjest`
### 更新
`cd themes/atkjest` <br/>
`git pull`

## 主题配置

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
# firebase_url: 请自行修改`source/js/`目录下的favour.js和webstats.js文件
# 将theme.firebase_url的地址修改为自己的firebase App地址

# 多说站长回复请修改`source/lib/js/`目录下的embed.js文件
# 将`e.user_id == 6255593621878211329` 修改为自己的多说id
```
