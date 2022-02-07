<template>
	<button class="btn btn-primary">
		<img :src="button.src" :alt="button.alt">
		<p>
			<slot></slot>
		</p>
	</button>
</template>

<script>
export default {
	props: {
		button: {
			type: Object,
			default: {}
		},
		img: {
			type: Boolean,
			default: false
		}
	}
}
</script>
