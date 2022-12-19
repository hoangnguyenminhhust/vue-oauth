<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <span @click="logIng('oauth2')">Login</span>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    logIng(provider) {
      console.log("provider" , this.$auth)
      this.$auth.authenticate(provider).then(function () {
        console.log("Welcome to your Vue.js App");
        // Execute application logic after successful login
      }).catch(e => console.log("Error: " + e));
      console.log("heel")
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
