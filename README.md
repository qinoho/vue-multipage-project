# mutilpro

这个模板旨在创建一个类似多入口的项目

在src->views下面可以创建多个目录, 每个项目含有单独的入口main.js index.html模板, 通过shell脚本单独打包到统一的dist文件下.

This template is designed to create a multi-portal-like project

Multiple directories can be created under src->views, each project contains a separate entry main.js index .html template, which can be individually packaged into a unified dist file through shell scripts.

## 项目运行

本地运行

```sh
sh dev.sh 项目目录(src/views后边的路径)
例如: sh dev.sh test
```

打包

```sh
sh build.sh 项目目录(src/views后边的路径)
例如: sh build.sh test
```

本分支 集成 lib-flexable + pxtorem 实现自适应开发
