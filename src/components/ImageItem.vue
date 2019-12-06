<template>
  <div class="card">
    <img v-bind:src="imageUrl" class="card-img-top">
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
  width: 18rem;
  height: 20rem;
}
</style>
