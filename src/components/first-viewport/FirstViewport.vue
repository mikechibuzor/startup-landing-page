<template>
  <div
    class="wrapper xl:px-32 grid lg:grid-cols-2 items-center gap-x-10 min-h-screen pt-20"
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
