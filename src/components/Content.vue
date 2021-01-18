<template>
  <div class="content">
    <div class="row no-gutters">
      <div class="col-xl-5 p-0">
        <Yo />
      </div>
      <div class="col-xl-7 p-0 mt-4 mb-4 z-i">
        <Datos />
      </div>
    </div>
  </div>
</template>

<script>
import Yo from "./content/Yo.vue"
import Datos from "./content/Datos.vue"

export default {
    components : {
        Yo,
        Datos,
    }
}
</script>

<style>

.z-i {
    z-index: -1;
}

@media (max-width: 1000px) {
  .z-i{
    z-index: 1;
  }
}
</style>