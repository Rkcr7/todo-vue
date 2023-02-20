<template>
  <div>
    <navbar />

    <router-view />
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";

export default {
  name: "App",
  components: {
    navbar,
  },
};
</script>

<style></style>
