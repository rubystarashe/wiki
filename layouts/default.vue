<template>
<section>
  <nuxt/>
  <documentSection
    v-for="{ uri, document, title, image, subclass, description } in thumbnail[categori]"
    :uri="uri"
    :key="document"
    :categori="categori"
    :document="document"
    :title="title"
    :image="image"
    :subclass="subclass"
    :description="description"
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
    categori() {
      return this.$route.params.categori
    },
    thumbnail() {
      return this.$store.getters.thumbnail
    }
  }
}
</script>
