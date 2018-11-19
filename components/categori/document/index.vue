<template>
<div>
  <div>
    {{uri}}
    {{title}}
    {{image}}
    {{subclass}}
    {{description}}</div>
    <md :uri="uri"/>
</div>
</template>

<script>
import md from './md'

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
  components: {
    md
  }
}
</script>

<style>

</style>