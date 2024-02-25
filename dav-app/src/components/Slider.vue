<template>
  <Card></Card>
</template>

<script>
import Card from './Card.vue';
import {mapGetters} from 'vuex'

export default {
  components: {
    Card,
  },

  data() {
    return {
      slides: this.getSlides
    }
  },
  methods: {
    ...mapGetters({
      getSlides: 'main/getSlides'
    })
  },
  computed: {
    actualSlides() {
      return this.getSlides()
    }
  }
}
</script>