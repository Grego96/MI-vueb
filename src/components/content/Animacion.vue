<template>
  <div class="container-fluid caja-info">
    <NavSm />
    <div v-bind:class="{ active: isActive }" class="caja-pa-1">
      <div class="contenido-cv">
        <div class="out2"></div>
        <div class="out3"></div>
        <div class="contenidoo p-2 p-md-5" v-html="contenido"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavSm from "../content/NavSm"

export default {
  components: {
    NavSm
  },
  data() {
    return {
      isActive: true,
      contenido: `<h3>FORMACION ACADEMICA </h3>
                <ul>
                    <li>Escuela N°148 - SAN RAMÓN.</li>
                    <li>LICEO "DOCTOR JUAN BELZA" — SAN RAMÓN. </li>
                    <li>LICEO "JOSÉ ALONSO Y TRELLES" TALA </li>
                    <li>FACULTAD DE ARQUITECTURA, DISEÑO Y URBANISMO | UDELAR (no finalizado) </li>
                </ul>`,
      contenido1: `<h3>FORMACION ACADEMICA </h3>
                  <ul>
                    <li>Escuela N°148 - SAN RAMÓN.</li>
                    <li>LICEO "DOCTOR JUAN BELZA" — SAN RAMÓN. </li>
                    <li>LICEO "JOSÉ ALONSO Y TRELLES" TALA </li>
                    <li>FACULTAD DE ARQUITECTURA, DISEÑO Y URBANISMO | UDELAR (no finalizado) </li>
                  </ul>`,
      contenido2: `<h3>CERTIFICADOS Y CURSOS </h3>
                  <ul>
                    <li>Certificado Inglés – <span>Alianza:</span>
                        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="si"></span>(2008) -Teen Basic A.
                        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="si"></span>(2009) -Teen Basic B.
                        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="si"></span>(2010) -Teen
                        Upper-Basic.
                    </li>

                    <li>(2019) - Diseño BIM - Modelos de Información Constructiva (Revit Architecture
                        2019) -<span>Bios</span> </li>
                    <li>(2019) - Photoshop Proceso Digital de Imágenes -<span>Ibec</span>.</li>
                    <li>(2019) - Master en CSS: Responsive, Flexbox. Grid y Bootstrap 4 por Víctor Robles
                        <span>(Online-Udemy)</span>.</li>
                    <li>(2019) - HTML desde cero -<span>EdTeam</span>.</li>
                    <li>(2019) - CSS Desde Cero -<span>EdTeam</span>.</li>
                    <li>(2019) - Curso Gratis de Programación Básica -<span>Platzi</span>.</li>
                    <li>(2020) - Front-End <span>Hack Academy</span>.</li>
                    <li>(2020) - Vue JS (2 y 3) - Crea Aplicaciones Web Modernas con Vue por Grover Vásquez <span>(Online-Udemy)</span>.</li>
                  </ul>`,
    };
  },
  methods: {
    cambiarContenido1() {
      this.isActive = false;

      setTimeout(
        function () {
          this.isActive = true;
          //----------------------------------------------

          this.contenido = this.contenido1;

          //----------------------------------------------
        }.bind(this),
        500
      );
    },
    cambiarContenido2() {
      this.isActive = false;

      setTimeout(
        function () {
          this.isActive = true;
          //----------------------------------------------

          this.contenido = this.contenido2;

          //----------------------------------------------
        }.bind(this),
        500
      );
    },
    cambiarContenido3() {
      this.isActive = false;

      setTimeout(
        function () {
          this.isActive = true;
          //----------------------------------------------

          this.contenido = this.contenido3;

          //----------------------------------------------
        }.bind(this),
        500
      );
    },
  },
   created () {
      this.$bus.$on('cambiar-dato1', () => {
        this.cambiarContenido1()
      }),
      this.$bus.$on('cambiar-dato2', () => {
        this.cambiarContenido2()
      })
    },
};
</script>

<style>
.h-100 {
  height: 100%;
}

.caja-pa-1 {
  color: white;
  clip-path: circle(100px at 100% 0%);
  transition: 500ms;
  background: rgba(47, 204, 128, 1);
  background: -moz-linear-gradient(
    -45deg,
    rgba(47, 204, 128, 1) 0%,
    rgba(74, 183, 255, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right bottom,
    color-stop(0%, rgba(47, 204, 128, 1)),
    color-stop(100%, rgba(74, 183, 255, 1))
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(47, 204, 128, 1) 0%,
    rgba(74, 183, 255, 1) 100%
  );
  background: -o-linear-gradient(
    -45deg,
    rgba(47, 204, 128, 1) 0%,
    rgba(74, 183, 255, 1) 100%
  );
  background: -ms-linear-gradient(
    -45deg,
    rgba(47, 204, 128, 1) 0%,
    rgba(74, 183, 255, 1) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(47, 204, 128, 1) 0%,
    rgba(74, 183, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2fcc80', endColorstr='#4ab7ff', GradientType=1 );
  overflow: hidden;
}

.active {
  clip-path: circle(150% at 100% 0%);
}

.contenido-cv {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 544px;
  font-size: 20px;
  font-weight: 700;
}

@media (max-width: 1000px) {
  .contenido-cv {
    height: auto;
    width: 100%;
    font-size: 18px;
  }
  .contenidoo {
    width: 100%;
  }
}

.contenidoo {
  position: relative;
}

.contenidoo ul li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.out2 {
  height: 100px;
  width: 100%;
  background-color: var(--color-1);
  position: absolute;
  bottom: -195px;
  clip-path: polygon(0 0, 0% 0, 100% 100%, 50% 100%, 0 80vh);
}

.out3 {
  height: 100px;
  width: 100%;
  background-color: var(--color-2);
  position: absolute;
  bottom: -197px;
  clip-path: polygon(0 0, 0% 0, 100% 100%, 50% 10%, 0 80vh);
}
</style>