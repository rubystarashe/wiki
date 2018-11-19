<template>
<div>
  <div class="md-section" v-html="column"/>
</div>
</template>

<script>
export default {
  props: [
    'uri'
  ],
  computed: {
    column () {
      return require('~/db' + this.uri + '.md')
    }
  }
}
</script>

<style>
.md-section {
  position: fixed;
}

.md-section>section>:nth-child(1), .md-section>section>:nth-child(2), .md-section>section>:nth-child(3) {
  display: none;
}
</style>
