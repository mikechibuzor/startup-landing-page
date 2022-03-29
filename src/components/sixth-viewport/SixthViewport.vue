<template>
  <div id="blog" class="wrapper viewport md:px-12 py-16 px-8 xl:px-32">
    <div class="up flex flex-col items-center justify-center">
      <p class="font-medium font-dm-sans text-primary-yellow">
        Latest newsfeed
      </p>
      <h2 class="font-bold text-xl text-white font-dm-sans mt-4">
        Our recent blog post that updated
      </h2>
    </div>
    <div class="down mt-20">
      <div
        class="courses pb-16 font-dm-sans lg:h-height60 xl:h-height80 custom-breakpoint:h-height60"
      >
        <div class="course-1 z-20 relative h-full">
          <div class="image relative z-30"></div>
          <div class="learn-more-text">
            <h2 class="font-bold text-xl text-white font-dm-sans mt-4">
              Introducing our newest team with great experience
            </h2>
            <p class="leading-snug mt-4 text-gray-300">
              Brian Halligan knows that you need more than a great product to
              have a great brand
            </p>
            <p
              class="text-gray-300 text-sm md:text-base mt-10 font-medium flex items-center gap-x-2"
            >
              Learn More
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
                    stroke="rgb(209, 213, 219)"
                  />
                </svg>
              </span>
            </p>
          </div>
          <PatternDeco
            size="h-44 w-44"
            class="absolute right-10 -top-32 xl:-top-36 z-10"
          />
        </div>
        <div class="course-2">
          <div class="image"></div>
          <div class="learn-more-text">
            <h2 class="font-bold text-xl text-white font-dm-sans mt-4">
              New banking application has developed and we expecting good
              feedback
            </h2>
            <p
              class="text-gray-300 text-sm md:text-base mt-10 font-medium flex items-center gap-x-2"
            >
              Learn More
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
                    stroke="rgb(209, 213, 219)"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div class="course-3">
          <div class="image"></div>
          <div class="learn-more-text">
            <h2 class="font-bold text-xl text-white font-dm-sans mt-4">
              Develop you design experience with figma features.
            </h2>
          </div>
        </div>
        <div class="course-4">
          <div class="image"></div>
          <div class="learn-more-text">
            <h2 class="font-bold text-xl text-white font-dm-sans mt-4">
              Ui/UX industry are doing great job in previous year history
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    PatternDeco: () =>
      import("../../components/video-call/pattern/PatternDeco.vue"),
  },
};
</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.wrapper {
  background-color: #353448;
}
.courses {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 2rem;
  grid-template-columns: repeat(1fr, 12);
  grid-template-areas:
    ".. .. .. .. .. .. .. .. course-3 course-3 course-3 course-3"
    ".. .. .. .. course-2 course-2 course-2 course-2  course-3 course-3 course-3 course-3"
    "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2  course-3 course-3 course-3 course-3"
    "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 course-3 course-3 course-3 course-3"
    "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 course-3 course-3 course-3 course-3"
    "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 course-4 course-4 course-4 course-4"
    "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 course-4 course-4 course-4 course-4"
    "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 course-4 course-4 course-4 course-4"
    "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 course-4 course-4 course-4 course-4"
    "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 course-4 course-4 course-4 course-4";
}
.courses > div {
  border-radius: 0.5rem;
  position: relative;
}
.course-1 {
  grid-area: course-1;
}
.course-1 .image {
  height: 55%;
  background: url("../../assets/images/course-image1.png");
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
}
.course-2 {
  grid-area: course-2;
}
.course-2 .image {
  height: 75%;
  background: url("../../assets/images/course-2.png");
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
}
.course-3 {
  grid-area: course-3;
}
.course-3 .image {
  height: 75%;
  background: url("../../assets/images/course-3.png");
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
}
.course-4 {
  grid-area: course-4;
}
.course-4 .image {
  height: 70%;
  background: url("../../assets/images/course-4.png");
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
}

.image {
  height: 70%;
}
.learn-more-text {
  height: 30%;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .courses {
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 2rem;
    grid-template-columns: repeat(1fr, 8);
    grid-template-areas:
      "course-4 course-4 course-4 course-4 .. .. .. .. "
      "course-4 course-4 course-4 course-4 .. .. .. .. "
      "course-4 course-4 course-4 course-4 course-3 course-3 course-3 course-3"
      "course-4 course-4 course-4 course-4 course-3 course-3 course-3 course-3"
      "course-4 course-4 course-4 course-4 course-3 course-3 course-3 course-3"
      "course-4 course-4 course-4 course-4 course-3 course-3 course-3 course-3"
      "course-4 course-4 course-4 course-4 course-3 course-3 course-3 course-3"
      "course-4 course-4 course-4 course-4 course-3 course-3 course-3 course-3"
      "course-4 course-4 course-4 course-4 course-3 course-3 course-3 course-3"
      ".. .. .. ..  course-3 course-3 course-3 course-3"
      ".. .. .. ..  course-3 course-3 course-3 course-3"
      ".. .. .. ..  course-2 course-2 course-2 course-2"
      ".. .. .. ..  course-2 course-2 course-2 course-2"
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 "
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 "
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 "
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 "
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 "
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 "
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 "
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 "
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 "
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 "
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 "
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 "
      "course-1 course-1 course-1 course-1 course-2 course-2 course-2 course-2 ";
  }
}
@media screen and (max-width: 768px) {
  .courses {
    grid-template-columns: 1fr;
    grid-template-areas:
      "course-4"
      "course-4"
      "course-4"
      "course-4"
      "course-4"
      "course-4"
      "course-4"
      "course-3"
      "course-3"
      "course-3"
      "course-3"
      "course-3"
      "course-3"
      "course-3"
      "course-2"
      "course-2"
      "course-2"
      "course-2"
      "course-2"
      "course-2"
      "course-2"
      "course-2"
      "course-1"
      "course-1"
      "course-1"
      "course-1"
      "course-1"
      "course-1";
    min-height: 100vh;
    padding-bottom: 2rem;
  }
  .course-4,
  .course-3 {
    height: 40vh;
  }
  .course-2 {
    height: 65vh;
  }
  .course-1 {
    height: 50vh;
    margin-top: 8rem;
  }
  .image {
    border-radius: 0.2rem;
  }
}
</style>
