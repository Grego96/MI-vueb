<template>
  <div class="navSm d-md-none">
    <a v-bind:class="{ activo : styles1 }" class="btn-t" @click="cambiarDato1">FORMACION ACADEMICA</a>
    <a v-bind:class="{ activo : styles2 }" class="btn-m" @click="cambiarDato2">CERTIFICADOS Y CURSOS</a>
    <!-- <a class="btn-b" @click="cambiarDato3">Dato 3</a> -->
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
    // cambiarDato3() {
    //   this.$bus.$emit("cambiar-dato3")
    // }
  }
};
</script>

<style>
.navSm {
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  /* margin: 0px 25px; */
  /* background: var(--color-1); */
  /* height: 60%; */
  /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); */
  /* border-radius: 10px; */
  overflow: hidden;
}

.navSm a {
  width: 100%;
  color: rgba(104, 104, 104, 0.938);
  font-weight: 900;
  /* background-color: var(--color-2); */
  background-color: #fff;
  padding: 10px;
  /* border-radius: 5px; */
  border: 1px solid var(-color-1);
  transition: 500ms;
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