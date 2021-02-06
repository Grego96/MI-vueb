<template>
  <div class="nav" v-tilt="{speed: 1000, perspective: 500, reverse: true, scale: 1.1}">
      <a v-bind:class="{ activo : styles1 }" class="btn-t" @click="cambiarDato1">CERTIFICADOS Y CURSOS</a>
      <a v-bind:class="{ activo : styles2 }" class="btn-m" @click="cambiarDato2">FORMACION ACADEMICA</a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      styles1: true,
      styles2: false
    }
  },
  methods: {
    cambiarDato1() {
      this.$bus.$emit("cambiar-dato1")
      this.styles1 = true;
      this.styles2 = false;
    },
    cambiarDato2() {
      this.$bus.$emit("cambiar-dato2")
       this.styles1 = false;
      this.styles2 = true;
    },
  }
}
</script>

<style>

@media (max-width: 1000px) {
 .nav {
   margin-bottom: 100px;
 }
}

.nav {
  margin: auto;
  
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  
}

.nav a {
  width: 100%;
  color: rgba(104, 104, 104, 0.938);
  font-weight: 900;
  background-color: #fff;
  padding: 10px;
  transition: 500ms;
}

.nav a:hover {
  background-color: var(--color-3);
  text-decoration: none;
  cursor: default;
  color: #fff;
}

.btn-t {
  border-bottom: 2px solid var(--color-1);
}

.btn-b {
  border-top: 2px solid var(--color-1);
}

.activo{
  background-color: var(--color-2) !important;
  color:white !important;
}

</style>