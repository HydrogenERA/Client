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
        {url: '../images/thumbnail1.png'},
        {url: '../images/thumbnail2.png'},
        {url: '../images/thumbnail3.png'},
        {url: '../images/thumbnail4.png'},
        {url: '../images/thumbnail5.png'},
        {url: '../images/thumbnail6.png'}
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
