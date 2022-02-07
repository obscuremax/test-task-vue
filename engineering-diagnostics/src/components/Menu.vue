<template>
  <nav class="menu">
    <div
      class="menu__btn"
      :class="{ close: menuShow }"
      @click="menuShow = !menuShow"
    >
      <span class="line line-top"></span>
      <span class="line-center">
        <span class="line line-sm"></span><span class="line line-sm"></span>
      </span>
      <span class="line line-bottom"></span>
    </div>
    <ul class="menu__list" :class="{ open: menuShow }">
      <li class="menu__item" v-for="item in menu" :key="item.id">
        <a :href="item.href">{{item.name}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
	props: {
		menu: Array,
		require: true
	},
  data() {
    return {
      menuShow: false,
    };
  },
};
</script>