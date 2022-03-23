<template>
  <div id="feature" class="wrapper viewport md:px-12 px-2 xl:px-32">
    <div class="vid-wrapper z-20 relative w-5/6 mx-auto">
      <!-- dots ontop -->
      <div
        class="dots flex items-center gap-2 py-1 md:py-2.5 xl:py-3.5 px-3 w-11/12 mx-auto rounded-tr rounded-tl border"
      >
        <span v-for="x in 3" :key="x">
          <svg
            class="md:h-2.5 md:w-2.5 h-1.5 w-1.5"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.12" cx="5.5" cy="5.5" r="5.5" fill="#625C27" />
          </svg>
        </span>
      </div>
      <!-- video call screen -->
      <div
        class="video-call flex items-end justify-center w-full custom-breakpoint:h-height60 lg:h-height60 xl:h-height70 h-height20 md:h-height40"
      >
        <!-- video call icons -->
        <div class="icons flex gap-2 lg:gap-4 mb-4 md:mb-12 lg:mb-16 xl:mb-12">
          <span class="vid-call">
            <svg
              class="lg:h-12 md:h-8 md:w-8 h-4 w-4 lg:w-12"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#4F96FF" />
              <path
                d="M35.5212 17.5969C35.4148 17.5561 35.3125 17.5355 35.2142 17.5355C34.9932 17.5355 34.8092 17.6135 34.6618 17.7689L29.7142 22.7042V20.6786C29.7142 19.7045 29.3684 18.8719 28.6768 18.1802C27.9851 17.4886 27.1525 17.1428 26.1784 17.1428H17.5356C16.5618 17.1428 15.729 17.4886 15.0372 18.1802C14.3458 18.8719 14 19.7045 14 20.6786V29.3215C14 30.2955 14.3458 31.1281 15.0373 31.8197C15.729 32.5113 16.5618 32.8571 17.5357 32.8571H26.1785C27.1526 32.8571 27.9852 32.5113 28.6769 31.8197C29.3685 31.1281 29.7143 30.2955 29.7143 29.3215V27.2834L34.6619 32.231C34.8093 32.3864 34.9933 32.4643 35.2143 32.4643C35.3126 32.4643 35.4149 32.4438 35.5213 32.403C35.8406 32.2638 36.0001 32.0225 36.0001 31.6787V18.3214C36 17.9775 35.8405 17.7361 35.5212 17.5969Z"
                fill="white"
              />
            </svg>
          </span>

          <span class="mic">
            <svg
              class="lg:h-12 md:h-8 md:w-8 h-4 w-4 lg:w-12"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#6A717E" />
              <path
                d="M25.0007 29.9992C26.3758 29.9992 27.5527 29.5097 28.5318 28.5309C29.5107 27.5522 30.0002 26.3748 30.0002 24.9997V17C30.0002 15.625 29.5111 14.4481 28.5318 13.4688C27.5527 12.4899 26.3758 12 25.0007 12C23.6257 12 22.4487 12.4899 21.4695 13.4688C20.4903 14.4479 20.0008 15.625 20.0008 17V24.9997C20.0008 26.3747 20.4905 27.5522 21.4695 28.5309C22.4485 29.5097 23.6257 29.9992 25.0007 29.9992Z"
                fill="white"
              />
              <path
                d="M33.7026 22.2967C33.5052 22.0988 33.2703 21.9998 32.9995 21.9998C32.7289 21.9998 32.4946 22.0988 32.2964 22.2967C32.0987 22.4946 31.9998 22.7289 31.9998 22.9997V24.9997C31.9998 26.9269 31.3147 28.5751 29.9449 29.9449C28.5756 31.3147 26.927 31.9996 24.9999 31.9996C23.0727 31.9996 21.4244 31.3147 20.0545 29.9449C18.6849 28.5755 18.0001 26.9269 18.0001 24.9997V22.9997C18.0001 22.7289 17.9011 22.4946 17.7032 22.2967C17.5053 22.0988 17.2712 21.9998 17.0002 21.9998C16.7292 21.9998 16.4948 22.0988 16.2969 22.2967C16.0989 22.4946 16 22.7289 16 22.9997V24.9997C16 27.3018 16.7684 29.3044 18.3046 31.0073C19.8409 32.7103 21.7393 33.6868 23.9999 33.9366V35.9993H20C19.7291 35.9993 19.4948 36.0984 19.2969 36.2963C19.099 36.4941 19 36.7286 19 36.9994C19 37.2698 19.099 37.5047 19.2969 37.7025C19.4948 37.9002 19.7291 37.9995 20 37.9995H29.9995C30.2703 37.9995 30.5049 37.9003 30.7025 37.7025C30.9007 37.5047 30.9998 37.2699 30.9998 36.9994C30.9998 36.7286 30.9007 36.4942 30.7025 36.2963C30.505 36.0984 30.2703 35.9993 29.9995 35.9993H26.0001V33.9366C28.2602 33.6868 30.1585 32.7103 31.6949 31.0073C33.2314 29.3044 34 27.3018 34 24.9997V22.9997C34 22.729 33.9008 22.4948 33.7026 22.2967Z"
                fill="white"
              />
            </svg>
          </span>

          <span class="option">
            <svg
              class="lg:h-12 md:h-8 md:w-8 h-4 w-4 lg:w-12"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#6A717E" />
              <path
                d="M16.9336 22C15.3161 22 14 23.3161 14 24.9336C14 26.5511 15.3161 27.8672 16.9336 27.8672C18.5511 27.8672 19.8672 26.5511 19.8672 24.9336C19.8672 23.3161 18.5511 22 16.9336 22Z"
                fill="white"
              />
              <path
                d="M33.0666 22C31.4491 22 30.1331 23.3161 30.1331 24.9336C30.1331 26.5511 31.4491 27.8672 33.0666 27.8672C34.6841 27.8672 36.0002 26.5511 36.0002 24.9336C36.0002 23.3161 34.6841 22 33.0666 22Z"
                fill="white"
              />
              <path
                d="M25.0001 22C23.3826 22 22.0665 23.3161 22.0665 24.9336C22.0665 26.5511 23.3826 27.8672 25.0001 27.8672C26.6176 27.8672 27.9337 26.5511 27.9337 24.9336C27.9337 23.3161 26.6176 22 25.0001 22Z"
                fill="white"
              />
            </svg>
          </span>

          <span class="end-call">
            <svg
              class="lg:h-12 md:h-8 md:w-8 h-4 w-4 lg:w-12"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#DE0124" />
              <path
                d="M16.5163 28.5836C17.4335 27.7593 18.4611 27.0916 19.5642 26.6029C20.1087 26.3679 20.5069 25.7768 20.5301 25.2888L21.0888 22.5205C23.9655 21.7938 26.2338 21.8993 28.9788 22.888L29.197 25.6158C29.1598 26.2199 29.4589 26.7847 29.9853 27.094C31.028 27.6859 31.9688 28.4447 32.7812 29.3501C33.368 30.0041 34.3847 30.0516 35.0475 29.4559L37.7987 26.9836C38.4616 26.3879 38.5234 25.3712 37.9366 24.7173C31.2103 17.2209 19.5569 16.6769 11.9591 23.5046C11.2962 24.1002 11.2344 25.1169 11.8212 25.7709L14.25 28.4778C14.8368 29.1317 15.8535 29.1792 16.5163 28.5836Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
      <!-- chat one (one with yellow background) -->
      <div
        class="chat-one bg-primary-yellow font-dm-sans text-white absolute top-12 md:top-24 -left-10 py-4 px-6 md:px-8 w-36 md:w-48 lg:w-60 font-medium text-xs md:text-sm lg:text-lg"
      >
        <p>Hi, I am Andry. Let me know what I can do for you</p>
      </div>
      <!-- chat two (one with white background) -->
      <div
        class="chat-two bg-white text-primary-yellow font-dm-sans shadow-lg absolute bottom-24 -right-10 py-4 px-4 lg:px-8 w-36 text-xs md:text-sm md:w-48 lg:w-64 font-medium lg:text-lg"
      >
        <p>Your personal support assistance</p>
      </div>
      <div class="z-10">
        <PatternDeco class="pattern-one absolute z-10 -bottom-2 left-32" />
      </div>
      <div class="z-10">
        <PatternDeco class="pattern-two absolute z-10 top-20 -right-10" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    PatternDeco: () => import("./pattern/PatternDeco.vue"),
  },
};
</script>
<style scoped>
.video-call {
  background: url("../../assets/images/shutter-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.dots {
  width: 92.5%;
}
.chat-one {
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.8rem;
  border-bottom-left-radius: 1.8rem;
  left: -5rem;
}
.chat-two {
  right: -3.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  bottom: 5rem;
  box-shadow: 4px 2px 15px rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .dots {
    width: 100%;
  }
  .chat-two {
    bottom: 7rem;
  }
  .chat-one {
    top: 7rem;
  }
}
@media screen and (max-width: 768px) {
  .dots {
    width: 93%;
  }
  .chat-one {
    left: -2rem;
  }
  .chat-two {
    bottom: 2rem;
  }
}
</style>
