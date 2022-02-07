<template>
  <div class="contact" >
    <div class="contact__title">
			<img class="contact__title-img" v-if="imgTitle === true" :src="contact.titleSrc" :alt="contact.titleAlt">
			<p class="contact__title-text">{{ contact.title }}</p>
		</div>
    <div class="contact__descr">
			<img class="contact__descr-img" v-if="imgDescr === true" :src="contact.descrSrc" :alt="contact.descrAlt">
      <a
        v-if="contact.type === 'tel'"
        class="contact__link"
        :href="`tel:${contact.tel}`"
        >{{ contact.link }}</a
      >
      <a
        v-if="contact.type === 'email'"
        class="contact__link"
        :href="`mailto:${contact.email}`"
        >{{ contact.link }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
			type: Object,
			require: true
		},
		imgTitle: {
			type: Boolean,
			default: false
		},
		imgDescr: {
			type: Boolean,
			default: false
		},
  },
};
</script>