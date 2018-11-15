<template>
<section>
  {{categori}} {{thumbnail}}
  <documentSection v-if="document" :document="document"/>
</section> 
</template>

<script>
import documentSection from '~/components/categori/document/section'

export default {
  asyncData({ params }) {
    const db = require('~/db')
    return {
      categori: params.categori,
      thumbnail: db.thumbnail(params.categori),
      document: params.document ? {
        name: params.document,
        data: db.document(params.categori + '/' + params.document + '.md')
      } : null
    }
  },
  components: {
    documentSection
  },
  methods: {
    
  }
}
</script>
