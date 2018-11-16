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
    <div v-if="loaded && column" v-html="column"></div>
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
      loaded: false
    }
  },
  computed: {
    column() {
      if (this.$route.path === this.uri) {
        const data = require('~/static/db' + this.uri + '.md')
        let column = data.split('\n')
        column.splice(0, 4)
        const res = column.join('\n')
        return res
      } else return null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loaded = true
    })
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