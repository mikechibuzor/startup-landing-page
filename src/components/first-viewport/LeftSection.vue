<template>
  <div class="wrapper px-1">
    <!-- news -->
    <section class="news px-4 md:px-0 mt-10 md:mt-16 lg:mt-0">
      <p
        class="flex p items-center py-1 md:py-1.5 w-full md:w-4/6 md:mx-auto lg:mx-0 lg:w-full xl:w-4/5 gap-3 lg:gap-4 px-2 rounded-full bg-white"
      >
        <span
          class="bg-primary-yellow py-1 lg:py-0.5 rounded-full text-xs px-2 text-white md:text-sm font-bold font-dm-sans"
          >NEWS</span
        >
        <span
          class="flex text-primary-blue items-center gap-2 text-xs md:text-sm mr-4 lg:mr-0"
          >We have updated our term &amp; condition policy
          <span class="caret">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
                stroke="rgba(156, 163, 175)"
              />
            </svg>
          </span>
        </span>
      </p>
    </section>
    <!-- text -->
    <section class="text mt-4">
      <h1
        class="font-bold px-10 md:px-0 text-center lg:text-left mt-5 md:mt-2 lg:mt-0 text-primary-blue text-3xl lg:text-4xl xl:text-5xl font-dm-sans lg:leading-snug xl:leading-snug"
      >
        Engage your website visitors using support management tools
      </h1>
      <p
        class="font-dm-sans text-center lg:text-left text-sm md:text-base leading-loose lg:leading-loose mt-3 lg:mt-5 w-full md:w-9/12 md:mx-auto lg:mx-0 lg:w-11/12 custom-breakpoint:w-10/12"
      >
        Explore 50+ integrations that make your day-to-day workflow more
        efficient and familiar. Our extensive developer tools might also strike
        your fancy website.
      </p>
    </section>
    <!-- buttons -->
    <section
      class="buttons justify-center lg:justify-start flex items-center gap-3 lg:gap-5 mt-8 lg:mt-16"
    >
      <button
        class="font-dm-sans font-bold bg-primary-yellow text-white px-3 lg:px-6 btn rounded-md py-3"
      >
        Try free trial
      </button>
      <button
        class="font-dm-sans font-bold bg-white text-primary-blue px-3 lg:px-6 shadow-lg rounded-md py-3"
      >
        Discover in video
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "LeftSection",
};
</script>

<style scoped>
.news p {
  background-color: white;
  box-shadow: 0px 2px 8px rgb(67 99 136 / 7%);
  color: rgba(2, 7, 62, 0.9);
  border-radius: 50px;
  padding: 5px 15px 5px 5px;
}
.text p {
  color: #02073e;
  line-height: 2.62;
}
section h1 {
  letter-spacing: -0.5px;
}
@media screen and (max-width: 768px) {
  section h1 {
    line-height: 1.33;
  }
}
</style>
