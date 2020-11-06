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
    class="symbol circle"
  >
    <circle cx="12" cy="12" r="7" :opacity="opacity"></circle>
  </svg>
</template>

<script>
export default {
  name: 'Cross',
  props: {
    opacity: Number
  }
}
</script>
