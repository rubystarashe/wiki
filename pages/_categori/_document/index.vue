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
      thumbnail: db.thumbnails(params.categori)
    }
  },
  components: {
    documentSection
  },
  computed: {
    categori () {
      return this.$route.params.categori
    },
    document () {
      return this.$route.params.document
    }
  },
  methods: {
    
  }
}
</script>
