<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div v-for="image in imageList" class="col-sm-4">
        <ImageItem
          :imageUrl="image.url"
        >
        </ImageItem>
        <sharePic :imageId="image.url"></sharePic>
      </div>
    </div>
  </div>
</template>

<script>
import ImageItem from './ImageItem.vue'
import sharePic from './sharePic.vue'

export default {
  data: function () {
    return {
      imageList: [
        {url: 'https://storage.googleapis.com/hydrogen-images/1575606969591-36396557-tumblr-wallpaper.jpg'},
        {url: 'https://storage.googleapis.com/hydrogen-images/1575606969591-36396557-tumblr-wallpaper.jpg'},
        {url: 'https://storage.googleapis.com/hydrogen-images/1575606969591-36396557-tumblr-wallpaper.jpg'},
        {url: 'https://storage.googleapis.com/hydrogen-images/1575606969591-36396557-tumblr-wallpaper.jpg'},
        {url: 'https://storage.googleapis.com/hydrogen-images/1575606969591-36396557-tumblr-wallpaper.jpg'},
        {url: 'https://storage.googleapis.com/hydrogen-images/1575606969591-36396557-tumblr-wallpaper.jpg'}
      ]
    }
  },
  components: {
    ImageItem,
    sharePic,
  }
}
</script>

<style scoped>

</style>
