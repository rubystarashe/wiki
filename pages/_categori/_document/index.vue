<template>
<section>
  {{categori}}
  <documentSection
    v-for="{ uri, document, title, image, subclass, description, data } in thumbnail"
    :uri="uri"
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
  fetch({ store, params }) {
    const db = require('~/db')
    let thumbnail = db.thumbnail(params.categori)
    if (params.document) thumbnail[thumbnail.findIndex(e => e.document === params.document)].data = db.document(params.categori + '/' + params.document + '.md')
    store.commit('SET_THUMBNAIL', thumbnail)
  },
  components: {
    documentSection
  },
  computed: {
    thumbnail() {
      return this.$store.getters.thumbnail
    }
  }
}
</script>
