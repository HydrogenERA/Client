<template>
  <div>
    <a
      :href="shareLink"
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
        shareLink:`https://twitter.com/intent/tweet?text=https://imgur.com/gallery/u2QPHwe`
    };
  },
  props:['imageId']
};
</script>

<style>
</style>