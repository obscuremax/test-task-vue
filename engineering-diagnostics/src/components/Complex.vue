<template>
  <div class="wrapper">
    <section class="section complex">
      <div class="container">
        <div class="complex__title">{{ COMPLEX.title }}</div>
        <div class="complex__descr">{{ COMPLEX.descr }}</div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["COMPLEX"]),
  },
};
</script>