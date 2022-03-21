<template>
  <header
    :class="compFixedHeader"
    class="wrapper transition all duration-500 ease-linear absolute left-0 top-0 right-0 px-6 md:px-12 xl:px-32 flex items-center justify-between py-6"
  >
    <TheLogo />
    <NavBar />
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  components: {
    NavBar: () => import("../navbar/NavBar.vue"),
    TheLogo: () => import("../logo/TheLogo.vue"),
  },
  data() {
    return {
      fixedHeader: false,
    };
  },
  computed: {
    compFixedHeader() {
      return {
        fixed: this.fixedHeader,
      };
    },
  },
  methods: {
    checkDocumentObject() {
      const docScrollTop = document.documentElement.scrollTop;
      if (docScrollTop > 1) {
        this.fixedHeader = true;
      } else {
        this.fixedHeader = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkDocumentObject);
  },
};
</script>

<style scoped>
header.fixed {
  z-index: 131;
  position: fixed;
  box-shadow: 0px 0px 28px 14px rgba(175, 175, 175, 0.13);
  animation: fixHeader 0.5s ease;
  background: #fff;
  transition: transform;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

@keyframes fixHeader {
  0% {
    opacity: 0;
    transform: translateY(5%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
