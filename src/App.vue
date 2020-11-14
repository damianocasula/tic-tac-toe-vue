<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">The game</router-link>
      <a href="#" @click="$store.dispatch('resetGame')">Reset board</a>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: $main-color;
}

#nav {
  padding: $normal-spacing;
  display: flex;
  justify-content: center;
  margin-bottom: $normal-spacing;

  a {
    font-weight: bold;
    color: $main-color;
    margin: 0 $small-spacing;

    &.router-link-exact-active {
      color: $accent-color;
    }
  }
}
</style>
