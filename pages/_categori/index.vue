<template>
<section>
  <document-list :data="thumbnail"/>
</section>
</template>

<script>
import documentList from '~/components/categori/documentList'

export default {
  components: {
    documentList
  },
  computed: {
    categori () {
      return this.$route.params.categori
    },
    thumbnail () {
      return this.$store.getters.thumbnail[this.categori]
    }
  }
}
</script>
