<template>
  <div
    class="wrapper px-2 lg:px-28 xl:px-32 grid lg:grid-cols-2 items-center gap-y-10 gap-x-10 min-h-screen pt-20"
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
