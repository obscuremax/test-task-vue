<template>
  <div class="section-wrap">
    <BgImageWrap class="bg-image-wrap-services">
      <div class="wrapper">
        <section class="section services">
          <div class="container services__container">
            <div class="services__title-wrap">
              <div class="services__title">{{ SERVICES.title }}</div>
              <div class="services__descr">{{ SERVICES.descr }}</div>
            </div>
            <div class="services__slider-wrap">
              <CardServices v-for="card in CARD" :key="card.id" :card="card" />
            </div>
            <div class="services__line"></div>
          </div>
        </section>
      </div>
    </BgImageWrap>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BgImageWrap from "@/components/Bg-image-wrap";
import CardServices from "@/components/CardServices";
export default {
  components: {
    BgImageWrap,
    CardServices,
  },
  methods: {
    srcoll() {
      const windowInnerHeight = document.documentElement.clientHeight;
      const divHeight = document.querySelector(
        ".bg-image-wrap-services"
      ).clientHeight;
      let horLength = document.querySelector(
        ".services__slider-wrap"
      ).scrollWidth;
      let distFromTop = document.querySelector(".section-wrap").offsetTop;
      const windowWidth = window.innerWidth;
      let scrollDistance = distFromTop + horLength;

      document.querySelector(".bg-image-wrap-services").style.top =
        windowInnerHeight / 2 - divHeight / 2 + "px";

      document.querySelector(".section-wrap").style.height =
        horLength + windowWidth / 2 + "px";
      window.onscroll = function () {
        let scrollTop = window.pageYOffset;
        console.log(scrollTop - distFromTop);
        if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
          document.querySelector(".services__slider-wrap").style.transform =
            "translateX(-" + (scrollTop - distFromTop) + "px)";
        }
        if (scrollTop - distFromTop < 0) {
          document.querySelector(".services__slider-wrap").style.transform =
            "translateX(0)";
        }
      };
    },
  },
  computed: {
    ...mapGetters(["SERVICES", "CARD"]),
  },
  mounted() {
    this.srcoll();
  },
};
</script>