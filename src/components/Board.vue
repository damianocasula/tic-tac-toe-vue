<template>
  <div class="game-board" :class="[mode === 'dark' ? 'dark' : 'light']">
  <!-- <div class="game-board"> -->
    <div
      class="cell"
      v-for="(cellData, index) in [].concat.apply([], board)"
      :key="index"
      @mouseover="cellData.hover = true"
      @mouseleave="cellData.hover = false"
      @click="clickedCell(cellData, index)"
    >
      <Mark :type="cellData.status" v-show="cellData.status" />
      <Mark
        :type="currentPlayer"
        opacity="0.5"
        v-show="cellData.hover && cellData.status === 0"
      />
    </div>
  </div>
</template>

<script>
import Mark from '@/components/Mark'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Board',
  components: {
    Mark
  },
  methods: {
    clickedCell (cellData, index) {
      if (!cellData.status) {
        this.makeMove({ cellData, index })
      }
    },
    ...mapActions(['resetGame', 'makeMove'])
  },
  computed: {
    ...mapGetters(['board', 'currentPlayer', 'mode'])
  }
}
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.game-board {
  display: grid;
  grid-template-columns: repeat(3, $cell-size);
  grid-template-rows: repeat(3, $cell-size);
  grid-gap: $small-spacing;
  background-color: $nord2;

  &.dark {
    background-color: $nord4;

    .cell {
      background-color: $nord0;

      .symbol {
        color: $nord6;
      }
    }
  }

  .cell {
    background-color: white; /* TODO: make it a variable */

    display: flex;
    justify-content: center;
    align-items: center;

    .symbol {
      color: $main-color;
      width: 100%;
      height: 100%;

      &.cross {
        color: $accent-color;
      }
    }
  }
}
</style>
