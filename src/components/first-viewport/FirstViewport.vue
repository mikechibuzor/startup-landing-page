<template>
  <div
    id="home"
    class="wrapper viewport px-2 xl:px-32 md:px-12 md:pb-10 lg:pb-0 grid lg:grid-cols-2 pt-20 items-center gap-y-10 md:gap-x-7 xl:gap-x-10 min-h-screen"
  >
    <LeftSection />
    <RightSection />
  </div>
</template>

<script>
export default {
  components: {
    LeftSection: () => import("./LeftSection.vue"),
    RightSection: () => import("./RightSection.vue"),
  },
};
</script>

<style scoped>
.wrapper {
  background: linear-gradient(
    180deg,
    rgba(255, 254, 252, 0.5) 0%,
    #fefaf5 100%
  );
}
</style>
