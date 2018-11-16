<template>
<div>
  <div @click="$router.push(uri)">
    {{uri}}
    {{document}}
    {{title}}
    {{image}}
    {{subclass}}
    {{description}}</div>
  <transition name="fade">
    <div class="md-section" v-if="sectionLoad" v-html="column"></div>
  </transition>
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
  data() {
    return {
      column: null
    }
  },
  computed: {
    /*
    data () {
      if (this.$route.path === this.uri) {
        return require('~/static/db' + this.uri + '.md')
      } else return null
    },*/
    sectionLoad () {
      return this.column && this.$route.path === this.uri
    }
  },
  watch: {
    '$route.path': {
      handler: function (n, p) {
        if (n === this.uri) {
          this.column = require('~/static/db' + this.uri + '.md')
        } else this.column = null
      },
      immediate: true
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.md-section>section>:nth-child(1), .md-section>section>:nth-child(2), .md-section>section>:nth-child(3) {
  display: none;
}
</style>