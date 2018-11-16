<template>
<section>
  {{categori}}
</section> 
</template>

<script>
export default {
  computed: {
    categori() {
      return this.$route.params.categori
    }
  }
}
</script>
