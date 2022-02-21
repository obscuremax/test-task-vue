<template>
  <div class="select" @click.stop>
    <div class="selected" @click="$emit('show', !showOptions)">{{selectValue}}</div>
    <div class="options" v-show="showOptions">
      <input 
        class="options__search" 
        type="text" 
        :value="searchValue" 
        v-if="search"
        placeholder="Поиск" 
        @input="$emit('input', $event.target.value)"
      >
      <div 
        class="options__search-result" 
        v-if="!options.length"
      >{{searchResult}}</div>
      <div 
        class="options__item" 
        v-for="option in options" 
        :key="option.id" 
        :value="option.id" 
        @click="changeSelectValue(option)"
      >{{option.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      require: true
    },
    search: {
      type: Boolean,
      default: false
    },
    searchResult: {
      type: String,
      default: "Ничего не найдено"
    },
    selectValue: {
      type: String,
      default: ""
    },
    searchValue: {
      type: String,
      default: ""
    },
    showOptions: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeSelectValue(option) {
      this.$emit("select", option)
      this.$emit("show", !this.showOptions)
      this.$emit("input", "")
    }
  }
}
</script>
