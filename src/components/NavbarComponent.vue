<template>
  <nav
    class="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-white shadow-md z-50"
  >
    <div class="flex items-center space-x-4">
      <img
        src="@/assets/Img/S-BlueCopy.png"
        alt="Company Logo"
        class="h-12 w-auto"
        @click="scrollToTop"
      />
      <span class="text-xl" @click="scrollToTop">S.E.E.</span>
    </div>
    <ul class="flex space-x-6">
      <li><a @click="scrollToTop" class="hover:text-gray-300">Home</a></li>
      <li>
        <a
          href="#about"
          @click.prevent="scrollToSection('about')"
          class="hover:text-gray-300"
          >About</a
        >
      </li>
      <li>
        <a
          href="#services"
          @click.prevent="scrollToSection('services')"
          class="hover:text-gray-300"
          >Services</a
        >
      </li>
      <li>
        <a
          href="#contact"
          @click.prevent="scrollToSection('contact')"
          class="hover:text-gray-300"
          >Contact</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollToSection(section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
/* nav {
  position: fixed;
} */
</style>
