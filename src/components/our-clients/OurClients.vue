<template>
  <div id="clients" class="wrapper viewport md:px-12 py-16 px-2 xl:px-32">
    <div
      class="up w-5/6 lg:w-3/5 xl:w-2/4 mx-auto flex items-center justify-center flex-col"
    >
      <h2
        class="font-bold text-xl md:text-2xl lg:text-3xl text-center leading-loose text-primary-blue font-dm-sans mt-4"
      >
        Agencies who also worked us
      </h2>
      <p
        class="leading-loose text-center font-dm-sans text-sm md:text-base mt-3"
      >
        Every email, web page, and social media post makes an impression on your
        customers. With our software you can be confident it's impression.
      </p>
      <p
        class="text-blue-500 text-sm md:text-base mt-10 font-medium flex items-center gap-x-2"
      >
        Explore Details
        <span class="caret">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="rgb(37, 99, 235)"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
              stroke="rgb(37, 99, 235)"
            />
          </svg>
        </span>
      </p>
    </div>
    <div class="down h-height20 md:h-height30 xl:h-height70"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.down {
  background-image: url("../../assets/images/clients.png");
  background-position: cover;
  background-size: contain;
}
</style>
