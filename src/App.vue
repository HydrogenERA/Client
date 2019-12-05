<template>
  <div>
    <HeaderContent
        v-bind:header="header"
        v-bind:contents="contents"
      >
    </HeaderContent>

    <InputContent>
    </InputContent>
  </div>
</template>

<script>
import HeaderContent from './components/HeaderContent.vue'
import InputContent from './components/InputContent.vue'

export default {
  data: function () {
    return {
      header: 'HydrogenERA',
      contents: [
        'Create and share beautiful images of your source code.',
        'Start typing or drop a file into the text area to get started.'
      ]
    }
  },
  components: {
    HeaderContent,
    InputContent,
  }
}
</script>

<style scoped>
</style>
