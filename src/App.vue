<template>
  <div id="app">
    <router-link :to="{name: 'Hello'}">Hello</router-link>
    <router-link :to="{name: 'World'}">World</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
