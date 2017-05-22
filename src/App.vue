<template>
  <div id="app">
    <editor id="editor_id" height="500px" width="700px" :content.sync="editorText"
            :afterChange="afterChange()"
            pluginsPath="/static/kindeditor/plugins/"
            :loadStyleMode="false"
            @on-content-change="onContentChange"></editor>
    <div> editorTextCopy: {{ editorTextCopy }} </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      editorText: '直接初始化值', // 双向同步的变量
      editorTextCopy: ''  // content-change 事件回掉改变的对象
    }
  },
  mounted () {
    this.editorText = '<h3>页面载入绑定后，初始化值</h3>'
  },
  created () {
  },
  methods: {
    onContentChange (val) {
      this.editorTextCopy = val
    },
    afterChange () {
    }
  }
}
</script>

<style>

</style>
