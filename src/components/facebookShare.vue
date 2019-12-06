<template>
  <div>
    <!-- Your share button code -->
    <div id="fb-root"></div>
    <div
      class="fb-share-button"
      :data-href="imageLink"
      data-layout="button_count"
    ></div>
  </div>
</template>

<script>
export default {
    props:['imageLink']
};
</script>

<style>
</style>