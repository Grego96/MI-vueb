<template>
  <div class="caja">
    <div class="img">
      <img :src="yoImg" />
    </div>
    <div class="algo">
      <div class="out"></div>
      <div class="yo">
        <h1>Gregory Hunkeler</h1>
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
              <img src="https://img.icons8.com/color/48/000000/vue-js.png" />
              <img src="https://img.icons8.com/color/48/000000/sass.png" />
              <img src="https://img.icons8.com/color/48/000000/ubuntu--v1.png" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 p-0 mt-4 mb-4">
              <div class="redes">
                <!-- <a href>
                  <img src="https://img.icons8.com/cute-clipart/64/000000/facebook.png" />
                </a>
                <a href>
                  <img src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png" />
                </a>-->
                <a href="https://www.linkedin.com/in/gregory-hunkeler-0a248b198/" target="_blank">
                  <img src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png" />
                </a>
                <a href="https://github.com/Grego96" target="_blank">
                  <img src="https://img.icons8.com/cute-clipart/64/000000/github.png"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="redes"></div>
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
import yoImg from "../../../public/img/1.png"
import curriculum from "../../../src/assets/pdf/Curriculum.pdf"

export default {
 data () {
    return {
      yoImg: yoImg,
      curriculum: curriculum
  }
},
}
</script>

<style>
.caja {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--color-1);
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

.caja .img {
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.caja .img img {
  /* position: absolute; */
  width: 70%;
  /* height: 100%; */
  /* top: -90px; */
  border-radius: 6px;
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

.footer .d:hover{
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
</style>