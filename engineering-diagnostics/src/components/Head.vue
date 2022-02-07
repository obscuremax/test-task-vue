<template>
<div class="wrapper">
  <section class="section head">
    <div class="container head__container">
      <div class="head__inner">
        <div class="head__box">
          <div class="head__examination">
            <h1 class="head__title">{{ EXAMINATION.title }}</h1>
            <div class="head__desrc">{{ EXAMINATION.descr }}</div>
          </div>
          <div class="head__send">
            <Button
              :button="button"
              :img="true"
              class="btn btn-primary head__btn"
              >получить коммерческое</Button
            >
            <div class="head__text">{{ SENDTEXT }}</div>
          </div>
        </div>
        <div class="head__box">
          <List class="head__list">
            <ListItem
              class="head__list-item"
              v-for="item in LIST"
              :item="item"
              :key="item.id"
            />
          </List>
          <div class="head__video">
            <img src="@/assets/image/icons/stamp.svg" alt="circle">
						<div class="head__player">
							<img class="head__play" src="@/assets/image/icons/Polygon.svg" alt="button">
						</div>
          </div>
        </div>
      </div>
    </div>
  </section>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      button: {
        src: require("@/assets/image/icons/download.svg"),
        alt: "foto",
      },
    };
  },
  computed: {
    ...mapGetters(["EXAMINATION", "SENDTEXT", "LIST"]),
  },
};
</script>