<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <br>
    <div>
      <p v-for="(content, i) in contents" :key=i>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'contents']
}
</script>

<style scoped>
h1 {
  font-family: 'Indie Flower', cursive;
  font-size: 100px;
}

p {
  font-family: 'Courgette', cursive;
  font-size: 25px;
  margin: 0;
}

.header {
  padding-top: 5rem;
  text-align: center;
  color: white;
}

</style>
