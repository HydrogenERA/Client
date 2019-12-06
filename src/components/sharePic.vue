<template>
  <div>
    <!-- <a
      :href="getSharePic"
      class="twitter-share-button"
      data-size="large"
      data-show-count="false"
    >Tweet</a> -->

                <!-- Go to www.addthis.com/dashboard to customize your tools -->
                <div class="addthis_inline_share_toolbox" :data-url="getSharePic" data-title="WATER" ></div>

  </div>
</template>

<script>
export default {
  name: "sharePic",
  data() {
    return {};
  },
  props: ["resultURL"],
  methods: {
    shareTwit() {
      var addthis_share = {
        url: `https://twitter.com/intent/tweet?text=check this out!?q=${this.resultURL}`,
        title: "THE TITLE",
        description: "THE DESCRIPTION",
        media: "THE IMAGE"
      };
    }
  },
  computed: {
    // getSharePic() {
      // return `https://twitter.com/intent/tweet?text=check this out!?q=${this.resultURL}`;
    //   return this.resultURL
    // }
  }
};
</script>

<style>
</style>
