<template>
  <div class="home">
    <div class="game-container">
      <div class="game-board-container">
        <Board />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'

export default {
  name: 'Home',
  components: {
    Board
  }
}
</script>

<style lang="scss">
.game-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .game-board-container {
    // padding-top: 17.5vh;
    display: flex;
  }
}
</style>
