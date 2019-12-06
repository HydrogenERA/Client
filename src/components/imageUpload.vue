<template>
  <div style="text-align: center;">
  <b-field   class="file">
    <b-upload v-model="file">
      <a style="margin-left: 550; margin-top: 40%;" class="button is-primary">
        <b-icon  icon="upload"></b-icon>
        <span style="color: white">Click to upload</span>
      </a>
    </b-upload>
    <span class="file-name" v-if="file">{{ file.name }}</span>
  </b-field>
  <span>
    <b-button style="color : white ;background-color: #3E4E6C; border: none; margin-bottom: 30px;" @click="send">SEND</b-button>
  </span>
  </div>
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
a {
  margin-top: 1rem;
  margin-left: 760%;
}
</style>
