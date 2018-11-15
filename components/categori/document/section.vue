<template>
<div>
  <div @click="$router.push('/nuxt/test')">{{uri}} {{document}}, {{title}}, {{image}}, {{subclass}}, {{description}}</div>
  <transition name="fade">
    <div v-if="data" v-html="$md.render(data)"></div>
  </transition>
</div>
</template>

<script>
export default {
  props: [
    'uri',
    'document',
    'title',
    'image',
    'subclass',
    'description',
    'data'
  ]
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