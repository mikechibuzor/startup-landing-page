<template>
  <div id="pricing" class="wrapper viewport md:px-12 py-20 mt-10 px-2 xl:px-32">
    <!-- up -->
    <div class="up flex flex-col items-center justify-center">
      <p class="font-medium font-dm-sans text-primary-yellow">
        Deal for your business
      </p>
      <h2 class="font-bold text-2xl text-primary-blue font-dm-sans mt-4">
        Meet our pricing plan that suit you
      </h2>
    </div>
    <!-- down -->
    <!-- I made this section for desktop and large screens -->
    <div class="hidden pricing-container lg:grid grid-cols-5 gap-2 mt-20">
      <div class="pricing-bar rounded-lg">
        <div
          class="title-price opacity-0 lg:pt-8 xl:pt-10 flex items-center justify-center flex-col"
        >
          <h4 class="text-gray-300 lg:mb-4 xl:mb-7 font-medium font-dm-sans">
            Starter Pack
          </h4>
          <h2 class="text-3xl font-medium">$18.99/per mo</h2>
        </div>
        <div class="pricing-coverage">
          <ul class="lg:mt-8 xl:mt-14">
            <li
              class="flex items-center font-medium text-primary-blue justify-start py-4 border-b"
            >
              Full Access Library
            </li>
            <li
              class="flex items-center font-medium text-primary-blue justify-start py-4 border-b"
            >
              Multiple User
            </li>
            <li
              class="flex items-center font-medium text-primary-blue justify-start py-4 border-b"
            >
              Refund Policy
            </li>
            <li
              class="flex items-center font-medium text-primary-blue justify-start py-4 border-b"
            >
              Google Analytics
            </li>
            <li
              class="flex items-center font-medium text-primary-blue justify-start py-4 border-b"
            >
              24/7 Support
            </li>
          </ul>
        </div>
      </div>
      <div
        v-for="price in pricing"
        :key="price.id"
        class="pricing-bar border relative rounded-lg"
        :class="{ 'recommended-price': price.id === 2 }"
      >
        <p
          v-if="price.id === 2"
          class="bg-blue-400 absolute -top-6 left-0 right-0 px-4 py-1 text-sm rounded-tr-lg rounded-tl-lg font-medium text-center text-white font-dm-sans"
        >
          RECOMMENDED
        </p>
        <div
          class="title-price lg:pt-8 xl:pt-10 flex items-center justify-center flex-col"
        >
          <h4 class="text-gray-300 lg:mb-4 xl:mb-7 font-medium font-dm-sans">
            {{ price.title }}
          </h4>
          <h2 class="text-xl font-medium font-dm-sans">
            <span class="price">{{ price.price }}</span
            >/per mo.
          </h2>
        </div>
        <div class="pricing-coverage">
          <ul class="lg:mt-8 xl:mt-14">
            <li
              v-for="cover in coverage"
              :key="cover"
              class="flex items-center justify-center py-5 border-b"
            >
              <svg
                v-if="price[cover]"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z"
                  fill="#3CC68A"
                />
              </svg>

              <svg
                v-else
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99983 0C4.47716 0 0 4.47722 0 9.9999C0 15.5224 4.47709 20 9.9997 20C15.5223 20 19.9999 15.5224 19.9999 9.9999C19.9999 4.47722 15.5224 0 9.99983 0ZM13.7721 13.8113C13.3728 14.2102 12.726 14.2102 12.3271 13.8113L10.0516 11.5358L7.67259 13.9149C7.27353 14.3138 6.62667 14.3138 6.22781 13.9149C5.82854 13.5155 5.82854 12.8688 6.22781 12.4695L8.60665 10.0907L6.39174 7.87592C5.99281 7.47653 5.99281 6.82986 6.39174 6.43074C6.7908 6.03167 7.43779 6.03167 7.83692 6.43074L10.0517 8.64551L12.1631 6.534C12.5621 6.13507 13.2093 6.13494 13.6081 6.534C14.0073 6.9334 14.0073 7.58046 13.6081 7.97919L11.4969 10.0906L13.7722 12.366C14.1711 12.7649 14.1713 13.4121 13.7721 13.8113Z"
                  fill="#CED7E1"
                />
              </svg>
            </li>
          </ul>
          <div class="down flex flex-col items-center mt-10 justify-center">
            <button
              class="font-dm-sans border-2 border-red-100 hover:border-none hover:border-transparent font-bold text-primary-blue px-6 btn rounded-md py-3"
            >
              Chooose Plan
            </button>
            <p class="mt-4 mb-8">{{ price.trialDays }} days free trial</p>
          </div>
        </div>
      </div>
    </div>
    <!-- I made this section for Ipad and mobile devices -->
    <div
      class="pricing-container px-4 lg:hidden grid gap-x-5 gap-y-0 md:grid-cols-2"
    >
      <div
        v-for="price in pricing"
        :key="price.id"
        class="pricing-card border rounded-xl mt-20"
      >
        <div class="title-price pt-5 flex items-center justify-center flex-col">
          <h4 class="text-gray-300 font-medium font-dm-sans">
            {{ price.title }}
          </h4>
          <h2 class="text-3xl font-medium">{{ price.price }}/per mo.</h2>
        </div>
        <div class="coverage mt-8">
          <ul>
            <li
              v-for="cover in coverage"
              :key="cover"
              class="flex items-center justify-between px-8 py-4 border-b"
            >
              <span>{{ cover }}</span>
              <span>
                <svg
                  v-if="price[cover]"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z"
                    fill="#3CC68A"
                  />
                </svg>

                <svg
                  v-else
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99983 0C4.47716 0 0 4.47722 0 9.9999C0 15.5224 4.47709 20 9.9997 20C15.5223 20 19.9999 15.5224 19.9999 9.9999C19.9999 4.47722 15.5224 0 9.99983 0ZM13.7721 13.8113C13.3728 14.2102 12.726 14.2102 12.3271 13.8113L10.0516 11.5358L7.67259 13.9149C7.27353 14.3138 6.62667 14.3138 6.22781 13.9149C5.82854 13.5155 5.82854 12.8688 6.22781 12.4695L8.60665 10.0907L6.39174 7.87592C5.99281 7.47653 5.99281 6.82986 6.39174 6.43074C6.7908 6.03167 7.43779 6.03167 7.83692 6.43074L10.0517 8.64551L12.1631 6.534C12.5621 6.13507 13.2093 6.13494 13.6081 6.534C14.0073 6.9334 14.0073 7.58046 13.6081 7.97919L11.4969 10.0906L13.7722 12.366C14.1711 12.7649 14.1713 13.4121 13.7721 13.8113Z"
                    fill="#CED7E1"
                  /></svg
              ></span>
            </li>
          </ul>
        </div>
        <div class="down flex flex-col items-center mt-10 justify-center">
          <button
            class="font-dm-sans border-2 border-red-100 hover:border-none hover:border-transparent font-bold text-primary-blue px-6 btn rounded-md py-3"
          >
            Chooose Plan
          </button>
          <p class="mt-4 mb-8">{{ price.trialDays }} days free trial</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pricing: [
        {
          title: "Starter Pack",
          price: "$18.99",
          trialDays: "15",
          fullAccess: true,
          multipleUser: true,
          refundPolicy: false,
          googleAnalytics: false,
          support: false,
          id: 1,
        },
        {
          title: "Premium Pack",
          price: "$23.99",
          trialDays: "30",
          fullAccess: true,
          multipleUser: true,
          refundPolicy: true,
          googleAnalytics: false,
          support: false,
          id: 2,
        },
        {
          title: "Custom Pack",
          price: "$29.99",
          trialDays: "30",
          fullAccess: true,
          multipleUser: true,
          refundPolicy: true,
          googleAnalytics: true,
          support: false,
          id: 3,
        },
        {
          title: "Ultimate Pack",
          price: "$35.99",
          trialDays: "45",
          fullAccess: true,
          multipleUser: true,
          refundPolicy: true,
          googleAnalytics: true,
          support: true,
          id: 4,
        },
      ],
      coverage: [
        "fullAccess",
        "multipleUser",
        "refundPolicy",
        "googleAnalytics",
        "support",
      ],
    };
  },
};
</script>

<style scoped>
.recommended-price {
  border: none;
  box-shadow: 0px 0px 8px 8px rgba(180, 178, 178, 0.1);
}
.title-price h2 span.price {
  font-weight: 600;
  font-size: 26px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -0.55px;
}
@media screen and (width: 1024px) {
  .title-price h2 {
    font-size: 20px;
  }
}
.title-price h4 {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #94979b;
}
.down p {
  font-family: "DM Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #94979b;
}

@media screen and (max-width: 1025px) {
  .title-price h4,
  .down p {
    font-size: 12px;
  }

  .title-price h2 {
    font-size: 20px;
    margin-top: 2rem;
  }
}
</style>
