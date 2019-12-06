<template>
  <div style="text-align: center">
    <!-- Your share button code -->
    <div id="fb-root"></div>
    <!-- data-href="https://i.pinimg.com/236x/88/96/be/8896be66dcab873d6ca5a9688c6adac3.jpg" -->
    <!-- :data-href="imageLink" -->

    <div
      class="fb-share-button"
      :data-href="imageLink"
      data-layout="button_count"
    ></div>
<!-- 
<div class="fb-share-button" data-href="https://storage.googleapis.com/hydrogen-images/1575618302569-index.jpeg" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstorage.googleapis.com%2Fhydrogen-images%2F1575618302569-index.jpeg&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Bagikan</a></div> -->


  </div>
</template>

<script>
export default {
    props:['imageLink']
};
</script>

<style scoped>

</style>