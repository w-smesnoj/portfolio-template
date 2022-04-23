<template>
  <div id="app">
    <Navbar :scrolledDown="!scrolledDown" />
    <div class="splash">
      <div class="gradient-overlay"></div>
      <Sketch />
    </div>
    <Hero />
    <MainView :scrolledDown="!scrolledDown" />
  </div>
</template>

<script>
import Navbar from './components/globals/Navbar.vue';
import Sketch from './components/sketches/Sketch.vue';
import MainView from './components/MainView.vue';
import Hero from './components/Hero/Hero.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    MainView,
    Hero,
    Sketch,
  },
  data: () => ({
    size: 'xl',
    scrolledDown: false,
  }),
  mounted() {
    window.onresize = this.lodash.debounce(this.detectSize, 50);
    window.addEventListener(
      'scroll',
      this.lodash.debounce(this.detectScroll, 5)
    );
    this.detectSize();
  },
  methods: {
    detectSize() {
      const width = window.innerWidth;
      let result = {};
      switch (true) {
        case width < 425:
          result = {
            size: 'mobile',
            sizeint: 425,
            range: [0, 425],
            includes: ['mobile'],
          };
          break;
        case width < 680:
          result = {
            size: 's',
            sizeint: 680,
            range: [426, 680],
            includes: ['mobile', 's'],
          };
          break;
        case width < 1024:
          result = {
            size: 'm',
            sizeint: 1024,
            range: [680, 1024],
            includes: ['mobile', 's', 'm'],
          };
          break;
        case width < 1300:
          result = {
            size: 'l',
            sizeint: 1300,
            range: [1025, 1300],
            includes: ['mobile', 's', 'm', 'l'],
          };
          break;
        case width < 1600:
          result = {
            size: 'xl',
            sizeint: 1600,
            range: [1301, 1600],
            includes: ['mobile', 's', 'm', 'l', 'xl'],
          };
          break;
        default:
          result = {
            size: 'xl',
            sizeint: 1600,
            range: [1301, 1600],
            includes: ['mobile', 's', 'm', 'l', 'xl'],
          };
      }
      this.size = {
        width: width,
        size: result.size,
        sizeint: result.sizeint,
        range: result.range,
        includes: result.includes,
      };
    },
    detectScroll() {
      this.scrolledDown = window.scrollY > 0 ? true : false;
    },
  },
};
</script>

<style scoped>
#defaultCanvas0 {
  margin: 0;
  padding: 0;
  display: block;
}
.gradient-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(0deg, #1d1e21 0%, #1d1e2100 40%);
}
.splash {
  width: 100%;
  position: absolute;
  /* background: hsl(0deg 0% 99%); */
  z-index: -10;
  top: 0;
  background: center;
  background-size: cover;
  /* background: linear-gradient(0deg, rgb(242 242 242) 0%, rgb(247 247 247) 100%); */
  /* background-image: linear-gradient(
      0deg,
      var(--bg-root) 0%,
      rgb(241 241 241 / 41%) 550%
    ),
    url(/images/1990.jpg); */
  background-repeat: no-repeat;
}
</style>

<style scoped>
/* HEADER */
</style>

<style>
:root {
  --txt: ##3a322c;
  --txt-med: #8f8f8f;
  /* --bg: #fff; */
  --bg: #1d1e21;
  --bg-root: #1d1e21;
  --accent-1: #d7c5dd;
  --accent-2: #f7e8d4;
  --accent-3: #cae8e4;
  --accent-4: #d5e3c3;
  --accent-5: #e3c3c3;
  --accent-6: #c3cbe3;
}

img {
  display: block;
}
#app {
  /* font-family: 'Roboto', sans-serif; */
  font-family: 'Inter', sans-serif;
  /* font-family: 'Source Sans Pro', 'HelveticaNeue', sans-serif; */
  /* font-family: 'HelveticaNeue', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
@font-face {
  font-family: 'HelveticaNeue';
  src: url('/fonts/HelveticaNeue.ttf') format('ttf');
  font-weight: normal;
}

@font-face {
  font-family: 'HelveticaNeue';
  src: url('fonts/HelveticaNeue-Bold.ttf') format('ttf');
  font-weight: bold;
}
@font-face {
  font-family: 'HelveticaNeue';
  src: url('fonts/HelveticaNeue-Medium.ttf') format('ttf');
  font-weight: 500;
}
@font-face {
  font-family: 'HelveticaNeue';
  src: url('fonts/HelveticaNeue-Light.ttf') format('ttf');
  font-weight: 300;
}
/*
@font-face {
  font-family: 'myfont';
  src: url('fonts/awesome-font-boldoblique.woff') format('woff');
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: 'myfont';
  src: url('fonts/awesome-font-oblique.woff') format('woff');
  font-style: italic;
} */
body {
  background: var(--bg-root);
}
html {
  scroll-padding-top: 70px; /* height of sticky header */
  scroll-behavior: smooth !important;
}
</style>
