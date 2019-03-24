import KindEditor from './components/KindEditor.vue'


const VueKindEditor = {
  install(Vue, options) {
    Vue.component('editor', KindEditor)
  }
};

export default VueKindEditor;
