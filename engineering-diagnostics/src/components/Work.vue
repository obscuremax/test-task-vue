<template>
  <section class="section work">
    <div class="work__inner">
      <div class="work__box-wrap">
        <div class="work__box"></div>
        <div class="work__box"></div>
      </div>
      <div class="wrapper">
        <div class="container work__container">
          <div class="work__block">
            <div class="work__info">
              <p class="work__title">
								<span>{{ WORK.title[0] }}</span>
								<span>{{ WORK.title[1] }}</span>
								<span>{{ WORK.title[2] }}</span>
								<span class="mobile">{{ WORK.title[0] + " " + WORK.title[1] + " " + WORK.title[2]}}</span>
							</p>
              <p class="work__descr">
								<span>{{ WORK.descr[0] }}</span>
								<span>{{ WORK.descr[1] }}</span>
								<span>{{ WORK.descr[2] }}</span>
								<span class="mobile">{{ WORK.descr[0] + " " + WORK.descr[1] + " " + WORK.descr[2]}}</span>
							</p>
            </div>
          </div>
          <div class="work__block">
            <img
              class="work__block-img"
              src="../assets/image/content/tv.png"
              alt="tv"
            />
          </div>
          <div class="work__block">
            <div class="work__content">
              <div class="work__caption">{{ CAPTION }}</div>
              <List class="work__list">
                <ListItem
                  class="work__list-item"
                  v-for="item in WORKLIST"
                  :item="item"
                  :key="item.id"
                />
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["WORK", "CAPTION", "WORKLIST"]),
  },
};
</script>
