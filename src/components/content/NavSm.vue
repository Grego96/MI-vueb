<template>
  <div class="navSm d-md-none">
    <a v-bind:class="{ activo : styles1 }" class="btn-t" @click="cambiarDato1">CERTIFICADOS Y CURSOS</a>
    <a v-bind:class="{ activo : styles2 }" class="btn-m" @click="cambiarDato2">FORMACION ACADEMICA</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styles1: true,
      styles2: false
    };
  },
  methods: {
    cambiarDato1() {
      this.$bus.$emit("cambiar-dato1");
       this.styles1 = true;
      this.styles2 = false;
    },
    cambiarDato2() {
      this.$bus.$emit("cambiar-dato2");
         this.styles1 = false;
      this.styles2 = true;
    }
  }
};
</script>

<style>
.navSm {
  padding: 10px;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px var(--color-4);
  /* border: 2px solid var(--color-4); */
}

.navSm a {
  width: 100%;
  color: rgba(104, 104, 104, 0.938);
  font-weight: 900;
  background-color: #fff;
  padding: 10px;
  border: 1px solid var(-color-1);
  transition: 500ms;
  text-decoration: underline;
}

.navSm a:hover {
  background-color: var(--color-3);
  text-decoration: none;
  cursor: default;
  color: #fff;
}

.btn-t {
  border-bottom: 2px solid var(--color-1);
}

.btn-m {
  border-bottom: 1px solid white;
}

.btn-b {
  border-top: 2px solid var(--color-1);
}
</style>