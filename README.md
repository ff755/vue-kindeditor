# vue-kindeditor

2021/01/17 修复，当未设置header参数时报错

2020/12/30 更新
props 增加 header，结构为对象
作用：可增加header，后端验证，防止上传接口被攻击

示例：
```
<editor id="editor_id" height="500px" width="700px" :content="editorText"
            pluginsPath="/static/kindeditor/plugins/"
            :loadStyleMode="false"
            @on-content-change="onContentChange"
            :header="header"></editor>

```
参数格式：```header: { key: value }```

需修改kindeditor-all.js
kindeditor-all.js文件的4539行，修改了_ajax函数，添加了header.
6909行
```
var header=self.header;
K.ajax(K.addParam(fileManagerJson,param + '&' + new Date().getTime()), function(data) {
  dialog.hideLoading();
  func(data);
},header);
```
此功能由用户 @liqz2009 提供

依赖
vue 2
kindeditor 4

1. [License](#License)

2. [安装](#安装)

3. [使用](#使用)

4. [初始化参数](#初始化参数)

5. [演示](#演示)

6. [最近更新](#最近更新)

7. [常见问题](#常见问题)

## License

MIT License

## 安装

```bash
yarn add vue-kindeditor
```

## 使用

```js
import Vue from 'vue'
import App from './App'
import router from './router'
import VueKindEditor from 'vue-kindeditor'
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueKindEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```


```js
<template>
  <div id="hello">
    <h1>vue-kindedtior demo</h1>
    <editor id="editor_id" height="500px" width="700px" :content="editorText"
            :afterChange="afterChange()"
            pluginsPath="/static/kindeditor/plugins/"
            :loadStyleMode="false"
            @on-content-change="onContentChange"></editor>

    <editor id="editor_id2" height="500px" width="700px" :content="editorText"
            :afterChange="afterChange()"
            pluginsPath="/static/kindeditor/plugins/"
            :loadStyleMode="false"
            @on-content-change="onContentChange2"></editor>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      editorText: '',
      editorText2: ''
    }
  },
  created () {
  },
  methods: {
    onContentChange (val) {
      this.editorText = val
    },
    onContentChange2 (val) {
      this.editorText2 = val
    },
    afterChange () {
    }
  }
}
</script>

<style>
#hello {
  float: left;
}
</style>
```

## 初始化参数
[编辑器初始化参数](http://kindeditor.net/docs/option.html)

## 演示
[我是demo](https://github.com/ff755/vue-kindedtior-demo)

## 最近更新
重新打包。

## 常见问题
[常见问题](https://github.com/ff755/vue-kindeditor/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)
