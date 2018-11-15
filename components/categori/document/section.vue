<template>
<div>
  <div>{{document}}, {{title}}, {{image}}, {{subclass}}, {{description}}</div>
  <div v-if="data" v-html="$md.render(data)"></div>
</div>
</template>

<script>
export default {
  props: [
    'document',
    'title',
    'image',
    'subclass',
    'description',
    'data'
  ]
}
</script>
