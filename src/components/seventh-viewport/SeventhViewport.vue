<template>
  <div id="faq" class="wrapper viewport md:px-12 py-16 px-2 xl:px-32 mt-10">
    <div class="up flex flex-col items-center justify-center">
      <p class="font-medium font-dm-sans text-primary-yellow">
        Get yours question answer
      </p>
      <h2 class="font-bold text-2xl text-primary-blue font-dm-sans mt-4">
        Frequantly asked question
      </h2>
    </div>
    <div class="down grid md:grid-cols-2 gap-x-5 gap-y-8 mt-20">
      <SingleFaq v-for="faq in faqs" :key="faq.question" :faq-object="faq" />
    </div>
  </div>
</template>

<script>
import SingleFaq from "./single-faq/SingleFaq.vue";
export default {
  components: {
    singleFaq: () => import("./single-faq/SingleFaq.vue"),
    SingleFaq,
  },
  data() {
    return {
      faqs: [
        {
          question: "Which domain should I purchase?",
          answer:
            "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result",
        },
        {
          question: "What if I need help choosing the right domain?",
          answer:
            "Create a hub for cross-functional work that also works with all your other tools. Centralize and standardize communication with Miro. All premium functional are included here with updates.",
        },
        {
          question: "What is in InMotion Hosting’s uptime rate?",
          answer:
            "Designed with beginners in mind and packed with advanced features developers will love. Start with a quick and simple install",
        },
        {
          question: "Learn from community on Brandwagon",
          answer:
            "Brian Halligan knows that you need more than a great product to have a great brand. Hear his thoughts & score a peek at our wagon.",
        },
        {
          question: "What are some tips when choosing a name?",
          answer:
            "Get your website tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.",
        },
        {
          question: "Can I upgrade or downgrade my web hosting plan",
          answer:
            "The pricing made me a little hesitant at first but I have been pleasantly surprised by the level of care given by CometNine.",
        },
        {
          question: "How do I upgrade the storage capacity of my hosting plan?",
          answer:
            "Stop your viewers from getting distracted. Publish videos to your own Channel and rest easy knowing viewers won’t be annoyed by ads or pulled down a rabbit hole of unrelated videos.",
        },
      ],
    };
  },
};
</script>

<style></style>
