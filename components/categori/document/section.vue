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
    <div v-if="column">
      <div class="bg" @click="toMenu()"></div>
      <div class="md-section" v-html="column"/>
    </div>
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
  methods: {
    checkColumn () {
      if (this.$route.path === this.uri) {
          this.column = require('~/static/db' + this.uri + '.md')
        } else this.column = null
    },
    toMenu() {
      this.$router.push('/' + this.categori)
      this.column = null
    }
  },
  watch: {
    '$route.path': {
      handler: function (n, p) {
        this.checkColumn()
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

.bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.md-section {
  position: fixed;
}

.md-section>section>:nth-child(1), .md-section>section>:nth-child(2), .md-section>section>:nth-child(3) {
  display: none;
}
</style>