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
    <div v-if="data" v-html="data"></div>
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
      data: null
    }
  },
  watch: {
    '$route.path': function () {
      if (this.$route.path === this.uri) {
        const data = require('~/static/db' + this.uri + '.md')
        let column = data.toString('utf-8').replace(/^.*.\n/, '')
        this.data = column
      } else this.data = null
    }
  },
  created() {
    if (this.$route.path === this.uri) {
      const data = require('~/static/db' + this.uri + '.md')
      this.$nextTick(() => {
        let column = data.toString('utf-8').replace(/^.*.\n/, '')
        this.data = column
      })
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
</style>