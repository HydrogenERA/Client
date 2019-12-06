<template>
  <div>
    <HeaderContent v-bind:header="header" v-bind:contents="contents"></HeaderContent>

    <InputContent></InputContent>
    <!-- <div class="addthis_inline_share_toolbox" :data-url="resultURL" data-title="WATER" ></div> -->
    <!-- <sharePic :resultURL="resultURL"></sharePic> -->
    <facebookShare :imageLink="resultURL"></facebookShare>
    <ImageCard></ImageCard>
    <ImageUpload @getImages="getImages"></ImageUpload>
  </div>
</template>

<script>
import sharePic from "./components/sharePic";
import HeaderContent from "./components/HeaderContent.vue";
import InputContent from "./components/InputContent.vue";
import ImageCard from "./components/ImageCard.vue";
import ImageUpload from "./components/imageUpload.vue"
import axios from "../helpers/axios"
import facebookShare from "../src/components/facebookShare"

export default {
  name: "App",
  components: {
    sharePic,
    HeaderContent,
    InputContent,
    ImageCard,
    ImageUpload,
    facebookShare
  },
  data() {
    return {
      image: "",
      header: "HydrogenERA",
      contents: [
        "Create and share beautiful images of your source code.",
        "Start typing or drop a file into the text area to get started."
      ],
      images: [],
      resultURL : ''
    };
  },
  methods : {
    getImages(url) {
      axios.get('/images')
        .then(({data}) => {
          console.log(data);
          this.images = data
          this.resultURL = url
        })
        .catch(console.log)
    },
    created() {
      this.getImages()
    }
  }
};
</script>

<style scoped>
</style>
