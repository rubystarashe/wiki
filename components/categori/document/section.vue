<template>
<div>
  <div>
    {{uri}}
    {{document}}
    {{title}}
    {{image}}
    {{subclass}}
    {{description}}</div>
    <div class="md-section" v-html="column"/>
</div>
</template>

<script>
export default {
  props: [
    'uri',
    'categori',
    'document',
    'title',
    'image',
    'subclass',
    'description',
  ],
  computed: {
    column () {
      return require('~/db' + this.uri + '.md')
    }
  },
  methods: {
    checkColumn () {
      if (this.$route.path === this.uri) {
          this.column = require('~/db' + this.uri + '.md')
        } else this.column = null
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