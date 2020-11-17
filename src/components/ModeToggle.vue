<template>
  <div class="mode-toggle">
    <circle-icon size="1.5x" class="circle-icon"></circle-icon> 
  </div>
</template>

<script>
import { CircleIcon } from 'vue-feather-icons'

export default {
  name: 'Mode Toggle',
  components: {
    CircleIcon
  }
}
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.mode-toggle {
  padding: 5px 10px 0;

  &:hover {
    background-color: #f7f7f7;
    cursor: pointer;
    border-radius: 5px;
  }

  &:active {
    color: $secondary-color;
  }

  svg {
    width: 16px;
    stroke-width: 2.4px;
  }
}
</style>
