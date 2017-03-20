<template>
  <div id="app">
    <editor id="editor_id" height="500px" width="700px" :content="editorText"
            :afterChange="afterChange()"
            pluginsPath="/static/kindeditor/plugins/"
            :loadStyleMode="false"
            @on-content-change="onContentChange"></editor>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      editorText: ''
    }
  },
  created () {
  },
  methods: {
    onContentChange (val) {
      this.editorText = val
    },
    afterChange () {
    }
  }
}
</script>

<style>

</style>
