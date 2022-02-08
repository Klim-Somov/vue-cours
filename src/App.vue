<template>
  <div id="app">
    <div id="nav">
      <router-link to="/dashboard">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
    <router-view />
   
    <!-- <dash-board v-if="page === 'dashboard'"/>
    <about v-if="page === 'about'"/> -->
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #3cc2b0;
    }
  }
}
</style>
