<template>
<section>
  {{categori}}
  <documentSection
    v-if="data"
    :key="document"
    :categori="categori"
    :document="document"
    :uri="data.uri"
    :title="data.title"
    :image="data.image"
    :subclass="data.subclass"
    :description="data.description"
  />
</section>
</template>

<script>
import documentSection from '~/components/categori/document/section'

export default {
  components: {
    documentSection
  },
  computed: {
    thumbnail () {
      return this.$store.getters.thumbnail[this.categori]
    },
    categori () {
      return this.$route.params.categori
    },
    document () {
      return this.$route.params.document
    },
    data () {
      try {
        const { uri, title, image, subclass, description } = this.$store.getters.document(this.categori, this.document)
        return {
          uri,
          title,
          image,
          subclass,
          description
        }
      } catch (e) {
        return null
      }
    }
  }
}
</script>
