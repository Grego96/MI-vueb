<template>
  <div class="caja" >
    <transition name="bounce" >
      <div v-if="show" class="img" >
        <div class="bur burbuja1"></div>
        <div class="bur burbuja2"></div>
        <img class="imgyo" :src="yoImg" />
      </div>
    </transition>
    <div class="algo">
      <div class="out"></div>
      <div class="yo">
        <transition name="bounceLeft">
          <h1 class="nombre" v-if="show" v-tilt="{speed: 5000, perspective: 5000, reverse: true, scale: 1.1}">Gregory Hunkeler</h1>
        </transition>
        <p>Desarrollador web</p>
        <div class="herramientas">
          <div class="row">
            <div class="col-md-6 p-0 d-flex justify-content-center">
              <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
              <img src="https://img.icons8.com/color/48/000000/javascript.png" />
              <img
                src="https://img.icons8.com/ios-filled/50/000000/jquery.png"
                width="48"
                height="50"
              />
            </div>
            <div class="col-md-6 p-0 d-flex justify-content-center">
              <img
                class="vue"
                id="vue"
                src="https://img.icons8.com/color/48/000000/vue-js.png"
                @mouseover="hover = true"
                @mouseleave="hover = false"
              />
              <img src="https://img.icons8.com/color/48/000000/sass.png" />
              <img src="https://img.icons8.com/color/48/000000/ubuntu--v1.png" />
              <img
                class="matecito"
                src="https://img.icons8.com/bubbles/100/000000/mate.png"
                :class="{ matecitos: hover }"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 p-0 mt-4 mb-4">
              <div class="redes">
                <a href="https://www.linkedin.com/in/gregory-hunkeler-0a248b198/" target="_blank">
                  <img src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png" />
                </a>
                <a href="https://github.com/Grego96" target="_blank">
                  <img src="https://img.icons8.com/cute-clipart/64/000000/github.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="d">
          <a class="a descargar" :href="curriculum" target="_blank">Descargar cv</a>
        </div>
        <div class="d b-tr">
          <a href="mailto:gregoryhunkeler@gmail.com" class="a contactame">Contactame</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import yoImg from "../../../public/img/1.png";
import curriculum from "../../../src/assets/pdf/Curriculum.pdf";

export default {
  data() {
    return {
      yoImg: yoImg,
      curriculum: curriculum,
      show: false,
      hover: false,
    };
  },
  mounted() {
    this.show = true;
  }
};
</script>

<style>
.caja {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--color-1);
  height: 100%;
  border-radius: 6px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

.caja .img {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.caja .img img {
  width: 70%;
  border-radius: 6px;
  clip-path: circle(55% at 50% 50%);
}
@media (max-width: 1000px) {
  .caja .img img {
    width: 100%;
    height: 100%;
  }
  .caja .img {
    height: auto;
  }
}
.caja .yo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #fff;
  height: 300px;
  text-align: center;
}
@media (max-width: 1000px) {
  .caja .yo {
    height: auto;
    font-size: 18px;
  }
}
.footer {
  color: #fff;
  display: flex;
  justify-content: space-between;
  background: var(--color-1);
}
.footer .d {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  transition: 500ms;
}
.footer .d:hover {
  background-color: var(--color-4);
}
.footer .d a {
  color: white;
  font-weight: 700;
  font-size: 18px;
}
.footer .d a:hover {
  text-decoration: none;
  color: white;
}
.footer .d:hover {
  background-color: var(--color-4);
}
.b-tr {
  border-left: 1px solid black;
}
.algo {
  position: relative;
}
.out {
  height: 100px;
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: -99px;
  clip-path: polygon(0 0, 0% 0, 100% 100%, 50% 100%, 0 80vh);
}
.yo h1 {
  font-size: 50px;
}
.yo p {
  font-size: 20px;
  color: var(--color-1);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

@keyframes flotar {
  0% {
    top: -5%;
  }
  50% {
    top: 0%;
  }
  100% {
    top: -5%;
  }
}

@keyframes flotar1 {
  0% {
    top: -7%;
  }
  50% {
    top: 0%;
  }
  100% {
    top: -7%;
  }
}

@keyframes flotar2 {
  0% {
    top: 45%;
  }
  50% {
    top: 70%;
  }
  100% {
    top: 45%;
  }
}

@media (min-width: 1200px) {
  .caja .img img {
    clip-path: circle(46% at 50% 50%);
    animation-name: flotar;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    position: absolute;
    width: 70%;
    border-radius: 6px;
  }
  .bur {
    position: absolute;
    clip-path: circle(40% at 50% 50%);
    background-color: rgba(234, 248, 233, 0.541);
    box-shadow: 50px 50px 1px rgba(234, 248, 233, 0.541);
  }

  .burbuja1 {
    height: 40%;
    width: 40%;
    top: -20px;
    left: -20px;
    animation-name: flotar1;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }

  .burbuja2 {
    height: 45%;
    width: 45%;
    right: -5%;
    animation-name: flotar2;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
  .matecito {
    position: absolute;
    left: 0px;
    bottom: 0px;
    animation-name: Mate;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    transition: 0.5s;
    z-index: -10;
  }

  .matecitos {
    left: -430px;
    cursor: pointer;
  }
}

.matecito {
  position: absolute;
  z-index: -10;
}

@keyframes Mate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>