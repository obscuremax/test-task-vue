<template>
  <section class="section step">
    <div class="step__slider">
			<Slider :slides="SLIDES"/>
		</div>
    <div class="step__box-wrap">
      <div class="step__box">
        <div class="step__box-inner">
          <div class="step__title-wrap">
            <div class="step-item">{{ step }}</div>
            <div class="step__title">{{ STEP.title }}</div>
          </div>
          <div class="step__descr">{{ STEP.descr }}</div>
        </div>
        <article class="step__article article">
          <div class="article__box article__box-img">
            <img :src="STEP.src" :alt="STEP.alt" class="article__img" />
          </div>
          <div class="article__box">
            <blockquote class="article__blockquote">
              {{ STEP.blockquote }}
            </blockquote>
            <div class="article__author">{{ STEP.author }}</div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Slider from "@/components/Slider"
export default {
  data() {
    return {
      step: "шаг №1.",
    };
  },
	components: {
		Slider
	},
  computed: {
    ...mapGetters(["STEP", "SLIDES"]),
  },
};
</script>