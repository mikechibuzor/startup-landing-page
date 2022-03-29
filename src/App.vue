<template>
  <div class="wrapper">
    <TheHeader />
    <FirstViewport />
    <SecondViewport />
    <VideoCall />
    <FourthViewport />
    <OurClients />
    <SixthViewport />
    <SeventhViewport />
    <EightViewport />
    <TheFooter />
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
    SixthViewport: () =>
      import("./components/sixth-viewport/SixthViewport.vue"),
    SeventhViewport: () =>
      import("./components/seventh-viewport/SeventhViewport.vue"),
    EightViewport: () =>
      import("./components/eight-viewport/EightViewport.vue"),
    TheFooter: () => import("./components/footer/TheFooter.vue"),
  },
};
</script>

<style>
body {
  font-family: "DM Sans", sans-serif;
}
@media screen and (min-width: 1441px) {
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
