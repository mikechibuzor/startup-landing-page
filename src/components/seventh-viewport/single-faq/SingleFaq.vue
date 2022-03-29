<template>
  <div class="px-4 md:px-0 single-faq">
    <h2 class="lg:text-lg font-medium text-primary-blue mb-6">
      {{ faqObject.question }}
    </h2>
    <p
      class="leading-relaxed text-sm lg:text-base lg:leading-relaxed text-justify w-11/12 lg:w-10/12 border-b-2 border-black pb-10"
    >
      {{ faqObject.answer }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    faqObject: {
      type: String,
      default: () => {
        () => {};
      },
    },
  },
};
</script>

<style scoped>
p {
  line-height: 2;
}
</style>
