<template>
  <div id="team" class="wrapper viewport md:px-12 py-16 px-2 xl:px-32">
    <div
      class="up w-5/6 lg:w-3/5 xl:w-2/4 mx-auto flex items-center justify-center flex-col"
    >
      <h2
        class="font-medium text-xl md:text-3xl lg:text-4xl text-center text-primary-blue font-dm-sans mt-4"
      >
        Meet our amazing super heroes who always work hardly behind the scenes
      </h2>
      <p
        class="leading-loose text-center font-dm-sans text-sm md:text-base mt-5"
      >
        Focus only on the meaning, we take care of the design. As soon as the
        meeting end you can export in one click into your preferred.
      </p>
    </div>
    <div class="down">
      <div
        class="team-image h-height20 md:h-height30 lg:h-height60 xl:h-height90 custom-breakpoint:h-height60 w-11/12 mx-auto"
      ></div>
      <div
        class="do grid gap-y-8 md:grid-cols-2 bg-primary-blue p-10 rounded-md"
      >
        <h1
          class="text-white font-medium text-center lg:text-left text-lg md:text-3xl lg:text-4xl custom-breakpoint:5xl leading-snug"
        >
          Do you have any <br class="hidden lg:block" />
          question? Feel free to <br class="hidden lg:block" />contact us
        </h1>
        <div class="button flex items-center justify-center lg:justify-end">
          <button
            class="px-8 py-3 font-medium text-primary-blue bg-white rounded shadow-sm"
          >
            CONTACT US NOW
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.team-image {
  background-image: url("../../assets/images/team.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
h2 {
  line-height: 45px;
  text-align: center;
  letter-spacing: -1px;
}
p {
  line-height: 35px;
}
.do {
  background: #183656;
}
.button {
  background-image: url("../../assets/images/pattarn-do.png");
  background-position: left center;
  background-size: contain;
}
</style>
