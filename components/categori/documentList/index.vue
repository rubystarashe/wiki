<template>
<div>
  <div v-for="subclass in subclasses" :key="subclass">
    {{subclass}}
    <div v-for="{ uri, title, description } in subclassesData(subclass, data)" :key="uri">
      <div @click="$router.push(uri)">{{title}} {{description}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'data'
  ],
  computed: {
    subclasses () {
      let res = []
      this.data.forEach(d => {
        res.push(d.subclass)
      })
      return [ ...new Set(res) ]
    }
  },
  methods: {
    subclassesData (subclass, data) {
      return data.filter(d => { return d.subclass === subclass }).sort((a, b) => {
        if (a.title > b.title) return 1
        else if (a.title < b.title) return -1
        else return 0
      })
    }
  }
}
</script>
