# vue-kindeditor

依赖
vue 2
kindeditor 4

## License

MIT License

## Install

```bash
yarn add vue-kindeditor
```

## Usage


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
[vue-kindeditor使用帮助](https://github.com/ff755/vue-kindedtior-demo)
[编辑器初始化参数](http://kindeditor.net/docs/option.html)

## update 
解决使用 keep-alive 时切换组建，编辑器无法获取焦点、无法编辑问题。