<template>
  <div id="app">
    <div id="nav">
      <router-link exact to="/">Home</router-link> |
      <router-link exact to="/about">About</router-link> |
      <router-link exact to="/view">View</router-link>
    </div>
    <router-view />
  </div>
</template>
<style lang="stylus">
#app
  text-align center
  .router-link-exact-active
    color #1873e0
</style>
