<template>
  <div id="app">
    <a href="https://facebook.com/events/154757402034359/" class="fa fa-facebook" target="_blank"></a>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url(./assets/trance.png) no-repeat center center;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3b5998;
  color: white;
  position: absolute;
  top: 80%;
  left: 50%;
  display: block !important;
  transform: translateX(-50%) translateY(-50%);
}
</style>
