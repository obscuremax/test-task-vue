<template>
  <div class="card-services">
    <img class="card-services__img" :src="card.src" :alt="card.alt" />
    <div class="card-services__title">{{card.title}}</div>
    <div class="card-services__descr">{{card.descr}}</div>
    <a class="card-services__link" :href="card.href">
      <span>{{card.link}}</span>
      <img :src="card.linkImgSrc" :alt="card.linkImgAlt" />
    </a>
  </div>
</template>

<script>
export default {
	props: {
		card: {
			type: Object,
			require: true
		}
	}
};
</script>