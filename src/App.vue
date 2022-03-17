<template>
  <div class="wrapper">
    <TheHeader />
    <FirstViewport />
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
  },
};
</script>

<style></style>
