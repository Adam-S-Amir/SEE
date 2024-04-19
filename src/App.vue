<template>
  <NavbarComponent />
  <div class="bg-blue-500 text-white p-4">This is a Tailwind CSS example!</div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
  },
};
</script>

<style>
body {
  background-color: #1b1b3a;
}
</style>
