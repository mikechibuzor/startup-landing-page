<template>
  <div
    class="wrapper absolute left-0 top-0 right-0 xl:px-32 flex items-center justify-between py-6"
  >
    <TheLogo />
    <NavBar />
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  components: {
    NavBar: () => import("../navbar/NavBar.vue"),
    TheLogo: () => import("../logo/TheLogo.vue"),
  },
};
</script>

<style scoped></style>
