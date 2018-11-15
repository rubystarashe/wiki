<template>
<section>
  {{categori}}
  <documentSection
    v-for="{ document, title, image, subclass, description, data } in thumbnail"
    :key="document"
    :document="document"
    :title="title"
    :image="image"
    :subclass="subclass"
    :description="description"
    :data="data"
  />
</section> 
</template>

<script>
import documentSection from '~/components/categori/document/section'

export default {
  asyncData({ params }) {
    const db = require('~/db')
    let thumbnail = db.thumbnail(params.categori)
    if (params.document) thumbnail[thumbnail.findIndex(e => e.document === params.document)].data = db.document(params.categori + '/' + params.document + '.md')
    return {
      categori: params.categori,
      thumbnail
    }
  },
  components: {
    documentSection
  }
}
</script>
