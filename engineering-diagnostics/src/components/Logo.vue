<template>
		<a class="logo" :href="logo.href">
			<img class="logo__img" :src="logo.src" :alt="logo.name">
		</a>
</template>

<script>
export default {
	props: {
		logo: Object,
		require: true
	}
}
</script>
