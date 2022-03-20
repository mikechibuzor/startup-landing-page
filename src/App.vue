<template>
  <div class="wrapper">
    <TheHeader />
    <FirstViewport />
    <SecondViewport />
    <div class="another h-screen"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    TheHeader: () => import("./components/header/TheHeader.vue"),
    FirstViewport: () =>
      import("./components/first-viewport/FirstViewport.vue"),
    SecondViewport: () =>
      import("./components/second-viewport/SecondViewport.vue"),
  },
};
</script>

<style></style>
