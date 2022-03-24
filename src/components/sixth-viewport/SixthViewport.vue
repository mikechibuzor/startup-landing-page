<template>
  <div id="blog" class="wrapper viewport md:px-12 py-16 px-2 xl:px-32">
    <div class="up flex flex-col items-center justify-center">
      <p class="font-medium font-dm-sans text-primary-yellow">
        Latest newsfeed
      </p>
      <h2 class="font-bold text-2xl text-white font-dm-sans mt-4">
        Our recent blog post that updated
      </h2>
    </div>
    <div class="down h-height90 border mt-20">
      <div class="courses">
        <div class="course-1 h-full">
          <div class="image">
            <img
              src="../../assets/images/course-image1.png"
              class="object-cover h-full w-full"
              alt="course-image1"
            />
          </div>
          <div class="learn-more-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  background-color: #353448;
}
.courses {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1fr, 12);
  grid-template-areas: "course-1 . . . . . . . . . . .";
}
.course-1 {
  grid-area: course-1;
}

.image {
  height: 70%;
}
.leaarn-more-text {
  height: 30%;
}
</style>
