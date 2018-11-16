<template>
<div>
  <div @click="push(uri)">
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
      column: null,
      view: false
    }
  },
  computed: {
    sectionLoad () {
      return this.column && this.$route.path === this.uri && this.view
    }
  },
  methods: {
    checkColumn () {
      if (this.$route.path === this.uri) {
          this.column = require('~/static/db' + this.uri + '.md')
        } else this.column = null
    },
    push (uri) {
      if (this.$route.path !== uri) {
        this.view = false
        this.$router.push(uri)
      }
    }
  },
  watch: {
    '$route.path': {
      handler: function (n, p) {
        this.checkColumn()
      }
    }
  },
  created() {
    this.checkColumn()
  },
  mounted() {
    this.view = true
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