<template>
  <!-- <div id="app"> -->
  <div id="app" :class="[mode === 'dark' ? 'dark' : 'light']">
    <div id="nav">
      <!-- <router-link to="/">The game</router-link> -->
      <a href="#" @click="$store.dispatch('resetGame')">Reset board</a>
      <mode-toggle />
    </div>
    <router-view />
  </div>
</template>

<script>
import ModeToggle from '@/components/ModeToggle'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    ModeToggle
  },
  computed: {
    ...mapGetters(['mode'])
  }
}
</script>

<style lang="scss">
@import "@/assets/reset.scss";
@import "@/assets/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: $main-color;
  height: 100vh;

  &.dark {
    background-color: $nord0a;

    #nav {
      color: $light-main-color;

      a {
        color: $light-main-color;

        &.router-link-exact-active {
          color: $accent-color;
        }

        &:active {
          color: $secondary-color;
        }

        &:hover, .mode-toggle:hover {
          background-color: #f7f7f711;
        }
      }
    }
  }

  #nav {
    padding: $normal-spacing;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: $normal-spacing;

    a {
      font-weight: bold;
      color: $main-color;
      margin: 0 $small-spacing;
      text-decoration: none;
      padding: 5px 10px;

      &.router-link-exact-active {
        color: $accent-color;
      }

      &:active {
        color: $secondary-color;
      }

      &:hover, .mode-toggle:hover {
        // color: $secondary-color;
        background-color: #f7f7f7;
        border-radius: 5px;
      }
    }
  }
}
</style>
