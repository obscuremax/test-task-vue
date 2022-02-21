<template>
  <ul class="list">
    <ListItem v-for="(item) in list" :key="item.id">
      <Comment v-if="type === 'comment'" :comment="item"/>
      <Issue v-if="type === 'issue'" :issue="item"/>
    </ListItem>
    <div v-if="!hasData">Упс... Нет данных!!!</div>
  </ul>
</template>

<script>
import ListItem from "./ListItem"
import Comment from "./Comment"
import Issue from "./Issue"
export default {
  props: {
    list: {
      type: Array,
      require: true
    },
    type: {
      type: String,
    },
    hasData: {
      type: Boolean,
    }
  },
  components: {
    ListItem, Comment, Issue
  }
}
</script>