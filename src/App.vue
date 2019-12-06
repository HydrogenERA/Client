<template>
  <div>
    <HeaderContent v-bind:header="header" v-bind:contents="contents"></HeaderContent>

    <!-- <InputContent></InputContent> -->
    <div id="fb-root"></div>
    <ImageUpload @getImages="getImages"></ImageUpload>
    <ImageCard :imageList="images"></ImageCard>
  </div>
</template>

<script>
import sharePic from "./components/sharePic";
import HeaderContent from "./components/HeaderContent.vue";
import InputContent from "./components/InputContent.vue";
import ImageCard from "./components/ImageCard.vue";
import ImageUpload from "./components/imageUpload.vue"
import axios from "../helpers/axios";

export default {
  name: "App",
  components: {
    sharePic,
    HeaderContent,
    InputContent,
    ImageCard,
    ImageUpload
  },
  data() {
    return {
      image: "",
      header: "HydrogenERA",
      contents: [
        "Upload and share beautiful images of your pin board.",
        "Start typing or drop a file into the text area to get started."
      ],
      images: [],
      // resultURL : ''
    };
  },
  methods : {
    getImages() {
      axios.get('/images')
        .then(({data}) => {
          console.log(data, "ini dr get images");
          this.images = data
          // this.resultURL = url
        })
        .catch(console.log)
    }
  
  },
    created() {
      this.getImages()
      console.log("harusnya ada");
      
    }
};
</script>

<style scoped>
* {
  background-color: black;
}
</style>
