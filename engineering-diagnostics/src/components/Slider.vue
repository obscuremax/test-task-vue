<template>
	<div class="slider">
		<div class="slide" v-show="visibleSlide === ind" v-for="(slide, ind) in slides" :key="ind">
			<img :src="slide.src">
		</div>
	</div>
</template>

<script>
export default {
	props: {
		slides: {
			type: Array,
			require: true
		}
	},
	data() {
		return {
			visibleSlide: 0
		}
	},
	computed: {
		slidesLength() {
			return this.slides.length
		}
	},
	methods: {
		start() {
			setInterval(this.changeSlide, 4000)
		},
		changeSlide() {
			if (this.visibleSlide >= this.slidesLength - 1) {
				this.visibleSlide = 0
			} else {
				this.visibleSlide++
			}
		}
	},
	mounted() {
		this.start()
	}
}
</script>