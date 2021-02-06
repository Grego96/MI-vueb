<template>
  <div class="content">
    <div class="row no-gutters">
      <div class="col-xl-5 p-0">
        <Yo
          v-if="tilt()"
          v-tilt="{speed: 5000, perspective: 5000, reverse: true, glare: true, scale: 1.03}"
        />
        <Yo v-else/>
      </div>
      <div class="col-xl-7 p-0 mt-4 mb-4 z-i">
        <Datos />
      </div>
    </div>
  </div>
</template>

<script>
import Yo from "./content/Yo.vue";
import Datos from "./content/Datos.vue";

export default {
  components: {
    Yo,
    Datos
  },
  methods: {
    tilt() {
      let x = window.matchMedia("(max-width: 1000px)")
      if (x.matches) {
        return false
      } else {
        return true
      }
    }
  }
};
</script>

<style>
.z-i {
  z-index: -1;
}

@media (max-width: 1000px) {
  .z-i {
    z-index: 1;
  }
}
</style>