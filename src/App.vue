<template>
  <div>
    <HeaderContent v-bind:header="header" v-bind:contents="contents"></HeaderContent>

    <InputContent></InputContent>
    <ImageCard></ImageCard>
  </div>
</template>

<script>
import sharePic from "./components/sharePic";
import HeaderContent from "./components/HeaderContent.vue";
import InputContent from "./components/InputContent.vue";
import ImageCard from "./components/ImageCard.vue";

export default {
  name: "App",
  components: {
    sharePic,
    HeaderContent,
    InputContent,
    ImageCard
  },
  data() {
    return {
      image: "",
      header: "HydrogenERA",
      contents: [
        "Create and share beautiful images of your source code.",
        "Start typing or drop a file into the text area to get started."
      ]
    };
  }
};
</script>

<style scoped>
</style>
