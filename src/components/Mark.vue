<template>
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['symbol', { cross: type === 1 }, { circle: type === 2 }]"
  >
    <template v-if="type === 1">
      <line x1="18" y1="6" x2="6" y2="18" :opacity="opacity"></line>
      <line x1="6" y1="6" x2="18" y2="18" :opacity="opacity"></line>
    </template>
    <circle v-if="type === 2" cx="12" cy="12" r="7" :opacity="opacity"></circle>
  </svg>
</template>

<script>
// TODO: remove intersection opacity addition

export default {
  name: 'Mark',
  props: {
    opacity: String,
    type: Number
  }
}
</script>
