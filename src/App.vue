<template>
  <div id="app">
    <div class="bur2 burbuja4"></div>

    <div class="container-fluid" >
      <div class="row">
        <div id="mate" class="col-xl-1 d-none d-xl-block p-0 pr-xl-4 mb-3">
          <Nav />
        </div>
        <div class="col-sm-12 col-xl-11">
          <Content />
        </div>
      </div>
    </div>
    <p class="btn-disable-analitycs">
      Click
      <a href="#" @click.prevent="disableTracking">here</a>,
      to disable the tracking through Google Analytics.
      <a
        href="#"
        @click.prevent="enableTracking"
      >Enable</a>
    </p>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Content from "./components/Content.vue";

export default {
  components: {
    Nav,
    Content
  },
  methods: {
    disableTracking: function() {
      this.$ga.disable();
      alert("Tracking disabled");
    },
    enableTracking: function() {
      this.$ga.enable();
    }
  }
};

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap");

:root {
  --color-1: rgba(47, 204, 128, 1);
  --color-2: rgb(43, 196, 175);
  --color-3: rgba(47, 204, 128, 1);
  --color-4: rgb(10, 168, 92);
}

#app {
  padding: 48px 70px;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  filter: brightness(90%);
  position: relative;
}

@media (max-width: 1000px) {
  #app {
    padding: 4px;
    padding-top: 30px;
  }
}

body {
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
}

.btn-disable-analitycs {
  margin-top: 15px;
  float: right;
}

@keyframes flotar4 {
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
  #app {
    overflow: hidden;
  }

  .bur2 {
    position: absolute;
    clip-path: circle(40% at 50% 50%);
    background-color: rgba(234, 248, 233, 0.349);
    box-shadow: 50px 50px 1px rgba(234, 248, 233, 0.349);
    z-index: -10;
  }

  .burbuja4 {
    height: 80%;
    width: 50%;
    right: -5%;
    animation-name: flotar4;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
}

</style>
