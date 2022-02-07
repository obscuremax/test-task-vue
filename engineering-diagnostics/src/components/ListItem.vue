<template>
	<li class="list-item">
		<img :src="item.src" :alt="item.alt">
		<p>{{item.name}}</p>
	</li>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			require: true
		}
	}
}
</script>