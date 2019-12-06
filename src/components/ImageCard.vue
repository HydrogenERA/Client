<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div v-for="(image,i) in imageList" :key="i" class="col-sm-4">
        <ImageItem
          :imageUrl="image.url"
        >
        </ImageItem>
        <sharePic :imageId="image.url"></sharePic>
        <facebookShare></facebookShare>
      </div>
    </div>
  </div>
</template>

<script>
import ImageItem from './ImageItem.vue'
import sharePic from './sharePic.vue'
import facebookShare from '../components/facebookShare'

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
    facebookShare
  }
}
</script>

<style scoped>
.card {
  color: white;
  width: 18rem;
  margin: 0 auto;
}

/* .container {
  width: 50rem;
  margin: 0 auto;
  width: 20rem;
} */

img {
  width: 100%;
}
</style>
