# myblog
### 更新：

2018.9.16 ： 修复archive组件点击显示文章列表时需要点击两次才能显示的错误

### 前言：

前段时间啃了一遍Vue的官方文档，感觉不做点东西不太踏实。正好又在阿里云上买了个轻量云服务器和域名，平时写在有道云笔记上的文章和也想发布出来，于是就决定搭建一个个人博客。由于是第一次进行全栈开发，在后端方面总显得太过的稚嫩，捣鼓了好久才成功上线，期间踩了不少的坑。这个项目到目前为止也还没有完全结束，还有些功能需要去完善：比如文章分类，关键词搜索等。。因为要准备秋招，只能暂时地先放一放了。

### 技术栈：

- 前端部分：

  1. HTML5 +SCSS进行页面布局和设计
  2. vue-cli构建前端工程
  3. vue.js实现视图层双向数据绑定，用来简化开发、组件化开发
  4. vue-router进行路由导航
  5. vuex进行状态管理
  6. axios.js发起异步请求
  7. ES6等等

- 后端部分：

  1. django创建项目、应用，配置和创建数据库，添加视图逻辑以及映射路由与视图关系等等
  2. mysql

- 服务器部署

  采用Apache + mod_wsgi

### 项目文件介绍：

1. DjangoUeditor是百度的一个富文本编辑器，用于博客的后台管理页面，可以让我们编辑包含图片的文本，以及轻松改变文本格式。
2. logger里是django项目的服务日志文件
3. myweb里是django后台页面配置文件（admin.py）以及视图(views.py)、应用(apps.py)和数据库模型(models.py)配置文件
4. myblog里是django项目配置文件和路由配置文件
5. vue-blog也就是vue项目构建的文件夹

### 启动项目：

1. 下载前端需要的依赖包

   ```
    cd  vue-blog //进入vue-blog目录
    npm install //下载
    npm run build//编译一下文件
   ```

2. 安装mysql数据库并启动

   此项目的数据库配置在settings.py里面，要更改请自行更改

   ```
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'blog',
           'USER': 'root',
           'PASSWORD': '123456',
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```

3. 安装django

4. 期间可能会需要下载pytz、mysql-python等

5. 进图项目根目录

   执行以下命令

   ```
   python manage.py runserver
   ```

   项目即可启动成功，在浏览器输入127.0.0.1:8000即可看到项目

### 项目效果图

![Image text](https://github.com/Tysnad/myblog/blob/master/jietu/1.png)

![Image text](https://github.com/Tysnad/myblog/blob/master/jietu/2.png)

![Image text](https://github.com/Tysnad/myblog/blob/master/jietu/3.png)

![Image text](https://github.com/Tysnad/myblog/blob/master/jietu/4.png)





