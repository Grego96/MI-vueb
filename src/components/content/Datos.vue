<template>
  <div class="datos">
    <div class="row">
      <div class="col-md-12">
        <div class="contenido">
          <!-- -->
          <div class="titulo pl-3 pr-3">
            <h2 class="pt-4">Sobre Mi</h2>
          </div>
          <transition name="bounceUp">
          <div v-if="show" class="datos1 p-3">
            <div class="row">
              <div class="col-xl-6">
                <div class="sobremi">
                  <p>Hola, soy Grego, un desarrollador web nuevo y autodidacta que se intereso en la programacion luego de algunos años estudiando arquitectura
                    lo que me llevo a dejar la carrera para poder estudiar ingenieria informatica, llevo mas de un añó estudiando intensamente desarrollo web mediante cursos online y 
                    presenciales y constantemente amplio mis conocimientos sobre el tema para algun dia poder ser un desarrollador web experimentado e ingeniero informatico.
                  </p>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="el elemento-1">
                  <h5>Edad :</h5>
                  <p>24</p>
                </div>
                <div class="el elemento-1">
                  <h5>Residencia :</h5>
                  <p>Uruguay</p>
                </div>
                <div class="el elemento-1">
                  <h5>Dirección :</h5>
                  <p>Bv Jose Batlle y Ordoñez 1302</p>
                </div>
                <div class="el elemento-1">
                  <h5>Cel :</h5>
                  <p>099907201</p>
                </div>
                <div class="el elemento-1">
                  <h5>Mail :</h5>
                  <p>gregoryhunkeler@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          </transition>
          <!--  -->
        </div>
      </div>
      <div class="col-md-12">
        <div class="contenido">
          <!--  -->
          <div class="datos1">
            <div class="row">
              <Animacion />
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Animacion from "./Animacion.vue"

export default {
    components: {
        Animacion,
    },
    data() {
      return{
        show: false
      }
    },
    mounted() {
    this.show = true;
  }
}
</script>

<style>

h2 {
  margin: 0;
}

.contenido {
  height: auto;
}

@media (max-width: 1000px) {
  .contenido {
    height: auto;
    font-size: 18px;
  }
}

.titulo {
  border-bottom: 1px solid var(--color-1);
  border-top: 1px solid var(--color-1);
}

.datos {
  background: #fff;
  height: 100%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 0px 6px 6px 0px;
  overflow: hidden;
}

.el {
  display: flex;
  justify-content: space-between;
  padding: 0px;
}

.el h5 {
  font-size: 17px;
  border-radius: 5px;
  padding: 5px;
  color: #fff;
  background: var(--color-1);
  height: 30px;
  margin-right: 20px;
}

.el p {
  color: var(--color-1);
  font-size: 18px;
  margin-right: 30px;
}

.h100 {
  height: 100%;
}
</style>