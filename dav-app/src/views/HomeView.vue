<template>


  <Slider/>
 

</template>

<script>
import Slider from '../components/Slider.vue';

export default {
  data() {
    return {}
  },

  components: {
    Slider
  }
}
</script>


<style>


.fon {
  height: 100vh;
  width: 100%;
  display: flex;
  transform-style: preserve-3d;
  justify-content: center;
  align-items: center;
}

.left_box {
  position: relative;
  width: 50%;
}

.right_box {
  position: relative;
  height: 100%;
  width: 50%;
}


</style>
