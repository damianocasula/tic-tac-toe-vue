<template>
  <div class="home">
    <div class="game-container">
      <div class="game-board">
        <TicTacToe msg="Welcome to Your Vue.js App" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TicTacToe from '@/components/TicTacToe.vue'

export default {
  name: 'Home',
  components: {
    TicTacToe
  }
}
</script>

<style lang="scss">
.game-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .game-board {
    display: flex;
  }
}
</style>
