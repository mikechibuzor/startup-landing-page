<template>
  <div class="wrapper flex items-center">
    <!-- nav for desktop and large screens-->
    <nav class="hidden lg:block">
      <ul class="flex gap-8">
        <li>
          <a href="#home" class="font-dm-sans">Home</a>
        </li>
        <li>
          <a href="#services" class="font-dm-sans">Services</a>
        </li>
        <li>
          <a href="#features" class="font-dm-sans">Features</a>
        </li>
        <li>
          <a href="#pricing" class="font-dm-sans">Pricing</a>
        </li>
        <li>
          <a href="#clients" class="font-dm-sans">Our Clients</a>
        </li>
        <li>
          <a href="#blog" class="font-dm-sans">Blog</a>
        </li>
        <li>
          <a href="#faq" class="font-dm-sans">Faq</a>
        </li>
      </ul>
    </nav>
    <!-- purchase now -->
    <button
      class="hidden lg:block ml-28 font-dm-sans font-bold bg-primary-yellow text-white px-6 btn rounded-md py-3"
    >
      Purchase Now
    </button>
    <!-- hamburger -->
    <div class="hamburger-button lg:hidden" @click="toggleShowMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>

    <transition name="fade">
      <!-- hamburger overlay -->
      <div v-if="isShowMenu" class="overlay lg:hidden"></div>
    </transition>
    <!-- nav for mobile -->
    <transition name="slide-in">
      <nav
        v-if="isShowNav"
        class="lg:hidden transform flex flex-col justify-between bg-white pt-16 h-screen w-11/12 right-0 fixed top-0 bottom-0"
      >
        <div class="up">
          <!-- logo and close icon -->
          <div
            class="div fixed top-0 w-full px-6 pt-5 right-0 flex items-center justify-between"
          >
            <div class="logo">logo</div>
            <div class="close-icon cursor-pointer pl-4" @click="toggleShowMenu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <ul class="flex flex-col">
            <li class="">
              <a
                href="#home"
                class="pl-6 text-gray-500 font-dm-sans block py-2 border-t border-b w-full"
                >Home</a
              >
            </li>
            <li class="">
              <a
                href="#services"
                class="pl-6 text-gray-500 font-dm-sans block py-2 border-t border-b w-full"
                >Services</a
              >
            </li>
            <li class="">
              <a
                href="#feature"
                class="pl-6 text-gray-500 font-dm-sans block py-2 border-t border-b w-full"
                >Feature</a
              >
            </li>
            <li class="">
              <a
                href="#pricing"
                class="pl-6 text-gray-500 ok font-dm-sans block py-2 border-t border-b w-full"
                >Pricing</a
              >
            </li>
            <li class="">
              <a
                href="#ourclients"
                class="pl-6 text-gray-500 font-dm-sans block py-2 border-t border-b w-full"
                >Our Clients</a
              >
            </li>
            <li class="">
              <a
                href="#blog"
                class="pl-6 text-gray-500 font-dm-sans block py-2 border-t border-b w-full"
                >Blog</a
              >
            </li>
            <li class="">
              <a
                href="#faq"
                class="pl-6 text-gray-500 font-dm-sans block py-2 border-t border-b w-full"
                >Faq</a
              >
            </li>
          </ul>
        </div>
        <!-- purchase now -->
        <div class="button flex px-8 items-center mb-10">
          <button
            class="w-full text-sm font-dm-sans font-bold bg-primary-yellow text-white px-6 btn rounded-md py-3"
          >
            Purchase Now
          </button>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  TheLogo: () => import("../logo/TheLogo.vue"),
  data() {
    return {
      isShowMenu: false,
      isShowNav: false,
    };
  },

  methods: {
    toggleShowMenu() {
      // so the app doesn't scroll when the menu is active
      document.querySelector("body").classList.toggle("fixed-app");

      this.isShowMenu = !this.isShowMenu;

      this.isShowNav = !this.isShowNav;
    },
  },
};
</script>

<style>
/* hamburger overlay */
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.slide-in-enter-active {
  animation: slide 0.3s ease-in forwards;
}
.slide-in-leave-active {
  animation: slide 0.3s ease-in-out forwards alternate-reverse;
}
.fade-enter-active {
  animation: fade 0.3s ease-in forwards;
}
.fade-leave-active {
  animation: fade 0.3s ease-in forwards;
}

@keyframes slide {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fixed-app {
  height: 100vh;
  overflow: hidden;
}
</style>
