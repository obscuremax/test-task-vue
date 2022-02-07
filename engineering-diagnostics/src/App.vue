<template>
  <div id="app">
    <BgImageWrap>
      <Header />
      <Head />
    </BgImageWrap>
    <Work />
    <Services />
    <Complex />
    <Step />
  </div>
</template>

<script>
import BgImageWrap from "@/components/Bg-image-wrap";
import Header from "@/components/Header";
import Head from "@/components/Head";
import Work from "@/components/Work";
import Complex from "@/components/Complex";
import Step from "@/components/Step";
import Services from "@/components/Services";

export default {
  name: "App",
  components: {
    BgImageWrap,
    Header,
    Head,
    Work,
    Complex,
    Step,
    Services,
  },
};
</script>

