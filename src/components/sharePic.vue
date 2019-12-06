<template>
  <div>
    <a
      :href="getSharePic"
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
    };
  },
  props:['resultURL'],
  computed: {
    getSharePic() {
      return `https://twitter.com/intent/tweet?text=check this out!?q=${this.resultURL}`
    }
  }
};
</script>

<style>
</style>