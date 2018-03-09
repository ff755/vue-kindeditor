<template>
  <div class="World">
    <h3>pages: World</h3>
    <div style="float:left;">
    <editor id="editor_2" height="500px" width="700px" :content.sync="editorText"
            :afterChange="afterChange()"
            pluginsPath="/static/kindeditor/plugins/"
            :loadStyleMode="false"
            @on-content-change="onContentChange"></editor>
    </div>
    <div style="float:left;margin-left:50px;"> <h5>editorTextCopy:</h5>
      <div v-html="editorTextCopy" style="width:800px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'World',
  data () {
    return {
      // 双向同步的变量
      editorText: '',
      // content-change 事件回掉改变的对象
      editorTextCopy: ''
    }
  },
  mounted () {
    this.editorText = '<h3>组件初始化内容</h3>'
  },
  activated () {
    this.editorText = '<h3>组件sss初始化内容</h3>'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
