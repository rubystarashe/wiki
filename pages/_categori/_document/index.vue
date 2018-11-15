<template>
<section>
  {{categori}} {{thumbnail}}
  <documentSection v-if="document" :document="document"/>
</section> 
</template>

<script>
import documentSection from '~/components/categori/document/section'

export default {
  components: {
    documentSection
  },
  computed: {
    categori () {
      return this.$route.params.categori
    },
    document () {
      return this.$route.params.document
    },
    thumbnail () {
      return this.$store.getters.thumbnail(this.categori)
    }
  },
  methods: {
    
  }
}
</script>
