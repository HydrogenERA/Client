<template>
  <div>
    <a
      :href="baseUrl"
      class="twitter-share-button"
      data-size="large"
      data-show-count="false"
    >Tweet</a>
  </div>
</template>

<script>
export default {
  name: "sharePic",
  data() {
    return {
        baseUrl:`https://twitter.com/intent/tweet?text=`
    };
  },
  props:['imageId']
};
</script>

<style>
</style>
