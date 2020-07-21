<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
@import "./assets/mixin/_mixin.scss";

@font-face {
	font-family: 'Gotham Pro';
	src: local('Gotham Pro Light'), local('GothamPro-Light'),
		url('./assets/fonts/GothamPro-Light.eot?#iefix') format('embedded-opentype'),
		url('./assets/fonts/GothamPro-Light.woff') format('woff'),
		url('./assets/fonts/GothamPro-Light.ttf') format('truetype');
	font-weight: 300;
	font-style: normal;
}


html {
    width: 100%;
    height: 100%;
}

body {
    @include flex();
    flex-direction: column;
    background-color: white;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Gotham Pro';
}


#app {
  height: 100%;
  @include grid-def();
  grid-template-rows: 75px 1fr;
  @media (max-width: 1920px) {
    width: 100%;  
  }
}
</style>
