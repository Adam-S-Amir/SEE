<template>
  <NavbarComponent />
  <div class="div-welcome" id="home">
    <div class="flex flex-col items-center text-center space-y-4">
      <img src="@/assets/Img/S-BlueCopy.png" class="h-auto w-auto" />
      <h1 class="text-6xl">Welcome to<br />Safi Exodus Enterprises</h1>
      <h1 class="text-xl">
        Expertise in App Development, Website Solutions, and Tech Repair
      </h1>
    </div>
  </div>
  <section id="about">
    <div class="h-screen flex flex-col justify-center items-center">
      <div class="flex items-center max-w-3xl mx-5">
        <img src="@/assets/Img/S.png" class="h-64 mr-5" alt="Image" />
        <div class="flex flex-col space-y-5">
          <h1 class="font-Dangrek text-4xl">Who We Are:</h1>
          <p>
            Safi Exodus Enterprises LLC is a dedicated small business specializing in
            delivering high-quality solutions in app development, web design, and
            technology repair. Our mission is to collaborate closely with our clients to
            provide exceptional service at competitive prices.
          </p>
          <h1 class="font-Dangrek text-4xl">Our Expertise:</h1>
          <p>
            We are dedicated to delivering the highest quality service to our clients. Our
            team possesses a comprehensive understanding of both software and hardware
            engineering, ensuring a robust development plan tailored to each project. We
            pride ourselves on our ability to effectively translate our clients' needs
            into their envisioned solutions throughout the development process.
          </p>
          <h1 class="font-Dangrek text-4xl">Personalized Service:</h1>
          <p>
            We believe in partnership and transparency, understanding the challenges of
            finding affordable and reliable app, website, or tech repair services. We will
            collaborate with you to identify the most effective solution for your needs
            while adhering to any suggested budget. At S.E.E., we work with you, not
            against you.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="services">
    <div class="flex flex-col items-center text-center space-y-8 py-10">
      <p class="max-w-lg">
        At Safi Exodus Enterprises, we pride ourselves on delivering high-quality
        solutions tailored to your specific needs. Our fields of specialization include:
      </p>
      <div class="flex justify-center space-x-8">
        <div>
          <h2 class="text-xl font-bold">App Development</h2>
          <ol class="list-decimal list-inside space-y-2 text-left">
            <li>Custom mobile applications</li>
            <li>Cross-platform app development</li>
            <li>Personalized user interface design</li>
            <li>Responsive application design and development</li>
          </ol>
        </div>
        <div>
          <h2 class="text-xl font-bold">Website Solutions</h2>
          <ol class="list-decimal list-inside space-y-2 text-left">
            <li>E-commerce platforms</li>
            <li>Remote website monitoring</li>
            <li>Website optimization</li>
            <li>Responsive website design and development</li>
          </ol>
        </div>
        <div>
          <h2 class="text-xl font-bold">Tech Repair</h2>
          <ol class="list-decimal list-inside space-y-2 text-left">
            <li>Hardware diagnostics and repair</li>
            <li>Software troubleshooting and updates</li>
            <li>Device setup and configuration</li>
            <li>Hardware cleaning</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <section id="contact">
    <div class="flex flex-col items-center text-center space-y-8 py-10">
      <p class="max-w-xlg">
        If you'd like to schedule a free device consultation, use the link below
      </p>
    </div>
  </section>
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

<style scoped>
.div-welcome {
  height: 100vh;
  display: block;
  text-align: center;
  margin-top: 150px;
}
</style>
