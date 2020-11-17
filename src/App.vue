<template>
  <div id="app" :class="[mode === 'dark' ? 'dark' : 'light']">
    <div id="nav">
      <!-- <router-link to="/">The game</router-link> -->
      <a href="#" @click="$store.dispatch('resetGame')">Reset board</a>
      <mode-toggle />
    </div>
    <div id="game-container">
      <div class="game-board-container">
        <Board />
      </div>
    </div>
    <div id="footer">
      <p>Created with 🧋 by <a href="http://github.com/damianocasula">@damianocasula</a>.</p>
    </div>
  </div>
</template>

<script>
import ModeToggle from '@/components/ModeToggle'
import Board from '@/components/Board'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    ModeToggle,
    Board
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
  font-family: 'Noto Sans', Avenir, Helvetica, Ubuntu, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: $main-text-color;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.dark {
    background-color: $darker-background-color;

    #nav {
      color: $light-main-text-color;

      a {
        color: $light-main-text-color;

        &.router-link-exact-active {
          color: $accent-color;
        }

        &:active {
          color: $secondary-color;
        }

        &:hover, .mode-toggle:hover {
          background-color: $hover-color;
        }
      }
    }

    #footer {
      color: $light-main-text-color;

      a {
        color: $accent-color;

        &:hover {
          color: $secondary-color;
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
      color: $main-text-color;
      margin: 0 $small-spacing;
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
        border-radius: $border-radius;
      }
    }
  }

  #game-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    .game-board-container {
      // padding-top: 17.5vh;
      display: flex;
    }
  }

  #footer {
    text-align: center;
    margin: $normal-spacing;
    display: flex;
    justify-content: center;

    p {
      background-color: $hover-color;
      padding: $normal-spacing;
      border-radius: $border-radius;
    }

    a {
      color: $secondary-color;

      &:hover {
        color: $accent-color;
      }
    }
  }
}
</style>
