<template>
  <div class="wrapper px-1">
    <!-- news -->
    <section class="news">
      <p
        class="flex p items-center py-1.5 w-10/12 gap-4 px-2 rounded-full bg-white"
      >
        <span
          class="bg-primary-yellow py-0.5 rounded-full px-2 text-white text-sm font-bold font-dm-sans"
          >NEWS</span
        >
        <span class="flex items-center gap-2 text-sm"
          >we have updated our term &amp; condition policy
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
        class="font-bold text-primary-blue text-5xl font-dm-sans leading-snug"
      >
        Engage your website visitors using support management tools
      </h1>
      <p
        class="font-dm-sans leading-loose mt-5 w-11/12 custom-breakpoint:w-10/12"
      >
        Explore 50+ integrations that make your day-to-day workflow more
        efficient and familiar. Our extensive developer tools might also strike
        your fancy website.
      </p>
    </section>
    <!-- buttons -->
    <section class="buttons flex items-center gap-5 mt-16">
      <button
        class="font-dm-sans font-bold bg-primary-yellow text-white px-6 btn rounded-md py-3"
      >
        Try free trial
      </button>
      <button
        class="font-dm-sans font-bold bg-white text-primary-blue px-6 shadow-lg rounded-md py-3"
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
section .p {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}
</style>
