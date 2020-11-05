<template>
  <div class="tic-tac-toe">
    <div class="cell">
      <div class="cross"></div>
    </div>
    <div class="cell">
      <div class="circle"></div>
    </div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
</template>

<script>
export default {
  name: 'TicTacToe',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.tic-tac-toe {
  display: grid;
  grid-template-columns: repeat(3, $cell-size);
  grid-template-rows: repeat(3, $cell-size);
  grid-gap: $small-spacing;
  background-color: black;

  .cell {
    background-color: white;
  }
}
</style>
