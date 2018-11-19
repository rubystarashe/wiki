<template>
<section>
  {{thumbnail}}
</section>
</template>

<script>
export default {
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
