<template>
  <div class="wrapper">
    <TheHeader />
    <FirstViewport />
    <SecondViewport />
    <VideoCall />
    <FourthViewport />
    <OurClients />
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
    VideoCall: () => import("./components/video-call/VideoCall.vue"),
    FourthViewport: () =>
      import("./components/fourth-viewport/FourthViewport.vue"),
    OurClients: () => import("./components/our-clients/OurClients.vue"),
  },
};
</script>

<style>
body {
  font-family: "DM Sans", sans-serif;
}
</style>
