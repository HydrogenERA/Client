<template>
<div>
    <sharePic :imageId="image"></sharePic>
</div>
</template>

<script>
import sharePic from './components/sharePic'
export default {
  name:'App',
  components:{
      sharePic
  },
  data() {
    return {
      image:''
    };
  },
};
</script>

<style scoped>
    
</style>