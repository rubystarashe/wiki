<template>
<div>
   <div v-html="$md.render(document.data)"></div>
</div>
</template>

<script>
export default {
  props: [
    'document'
  ]
}
</script>
