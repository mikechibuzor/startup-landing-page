<template>
  <div
    id="footer"
    class="wrapper flex gap-4 xl:gap-12 relative viewport md:px-12 pb-36 mb-10 pt-5 px-2 xl:px-32"
  >
    <div
      class="logo-and-others absolute items-center lg:items-start w-full bottom-0 left-0 md:left-8 flex-col md:flex-row right-0 lg:static flex lg:flex-col gap-y-4"
    >
      <TheLogo />
      <p class="font-dm-sans text-primary-blue order-3 lg:order-2 ml-5 lg:ml-0">
        Terms of use | Privacy
      </p>
      <p
        class="font-dm-sans text-gray-400 text-sm order-2 lg:order-3 lg:order-2 ml-5 lg:ml-0"
      >
        Copyright by 2022 RedQ, <br class="hidden lg:block" />Inc
      </p>
    </div>
    <div
      class="div gap-10 md:gap-14 grid grid-cols-2 md:grid-cols-4 lg:gap-14 xl:gap-20"
    >
      <!-- about us -->
      <div class="about-us">
        <h4 class="font-dm-sans mb-8 text-primary-blue font-medium lg:text-lg">
          About Us
        </h4>
        <ul>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Support Center</a
            >
          </li>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Customer Support</a
            >
          </li>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >About Us</a
            >
          </li>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Copyright</a
            >
          </li>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Popular Campaign</a
            >
          </li>
        </ul>
      </div>
      <!-- our information -->
      <div class="information">
        <h4 class="font-dm-sans mb-8 text-primary-blue font-medium lg:text-lg">
          Our Information
        </h4>
        <ul>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Return Policy</a
            >
          </li>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Privacy Policy</a
            >
          </li>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Terms & Conditions</a
            >
          </li>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Site Map</a
            >
          </li>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Store Hours</a
            >
          </li>
        </ul>
      </div>
      <!-- my account -->
      <div class="account">
        <h4 class="font-dm-sans mb-8 text-primary-blue font-medium lg:text-lg">
          My Account
        </h4>
        <ul>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Press inquiries</a
            >
          </li>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Social media</a
            >
          </li>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >directories</a
            >
          </li>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Images & B-roll</a
            >
          </li>
          <li class="py-1.5">
            <a href="#" class="font-dm-sans text-gray-500 text-sm lg:text-base"
              >Permissions</a
            >
          </li>
        </ul>
      </div>
      <!-- connect -->
      <div class="account">
        <h4 class="font-dm-sans mb-8 text-primary-blue font-medium lg:text-lg">
          Connect
        </h4>
        <ul>
          <li class="py-1.5">
            <a
              href="#"
              class="font-dm-sans text-gray-500 text-sm lg:text-base flex items-center"
              ><span class="mr-2">
                <img
                  src="../../assets/images/fb-icon.png"
                  class="h-5 w-5 object-contain"
                  alt="fb-icon" /></span
              ><span>Facebook</span></a
            >
          </li>

          <li class="py-1.5">
            <a
              href="#"
              class="font-dm-sans text-gray-500 text-sm lg:text-base flex items-center"
              ><span class="mr-2">
                <img
                  src="../../assets/images/twiiter-icon.png"
                  class="h-5 w-5 object-contain"
                  alt="fb-icon" /></span
              ><span>Twitter</span></a
            >
          </li>
          <li class="py-1.5">
            <a
              href="#"
              class="font-dm-sans text-gray-500 text-sm lg:text-base flex items-center"
              ><span class="mr-2">
                <img
                  src="../../assets/images/dribble-icon.png"
                  class="h-5 w-5 object-contain"
                  alt="fb-icon" /></span
              ><span>Dribble</span></a
            >
          </li>
          <li class="py-1.5">
            <a
              href="#"
              class="font-dm-sans text-gray-500 text-sm lg:text-base flex items-center"
              ><span class="mr-2">
                <img
                  src="../../assets/images/github-icon.png"
                  class="h-5 w-5 object-contain"
                  alt="fb-icon" /></span
              ><span>GitHub</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TheLogo: () => import("../logo/TheLogo.vue"),
  },
};
</script>

<style scoped>
.footer {
  background: #f9fafc;
}
</style>
