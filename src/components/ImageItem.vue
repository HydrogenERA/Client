<template>
  <div class="image-card">
    <img v-bind:src="imageUrl">
  </div>
</template>


<script>
export default {
  props: ['imageUrl'],
}
</script>

<style scoped>
.image-card {
  margin: 0.5rem;
}
</style>
