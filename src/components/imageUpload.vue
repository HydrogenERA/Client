<template>
  <b-field class="file">
    <b-upload v-model="file">
      <a class="button is-primary">
        <b-icon icon="upload"></b-icon>
        <span style="color: wh">Click to upload</span>
      </a>
    </b-upload>
    <span class="file-name" v-if="file">{{ file.name }}</span>
    <span>
      <b-button @click="send">SEND</b-button>
    </span>
  </b-field>
</template>

<script>
import axios from '../../helpers/axios'

export default {
  name: "imageupload",
  data() {
    return {
      file: null,
      resultURL: ''
    };
  },
  methods: {
    send() {
      let formData = new FormData();
      formData.append("file", this.file);
      console.log(formData, "bentuknya apaa form data");

      axios
        .post("/images/upload", formData)
        .then(({ data }) => {
          console.log(data);
          this.file = null;
          this.resultURL = data.url
          this.$emit("getImages", this.resultURL);
        })
        .catch(console.log);
    }
  }
};
</script>

<style scoped>
</style>