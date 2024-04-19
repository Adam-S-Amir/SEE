<template>
  <nav class="bg-Turquoise py-4 rounded-lg">
    <div class="mx-auto">
      <ul class="flex justify-center space-x-4">
        <li><a href="#" class="text-black font-bungee">Home</a></li>
        <li><a href="#" class="text-black">About</a></li>
        <li><a href="#" class="text-black">Services</a></li>
        <li><a href="#" class="text-black">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
nav {
  width: 70%;
  transform: translate(20%, 0%);
}
</style>
