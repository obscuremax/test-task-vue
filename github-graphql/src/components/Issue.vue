<template>
  <div class="issue-wrap">
    <div class="issue" @click="isOpen = !isOpen">
      <p class="issue__name">{{issue.name}}</p>
      <p class="issue__status">Status: {{issue.status}}</p>
      <p class="issue__descr">{{issue.descr}}</p>
    </div>
    <List 
      class="list-comments"
      v-if="isOpen" 
      :list="issue.comments" 
      type="comment" 
      :hasData="!!issue.comments.length"
    />
  </div>
</template>

<script>
export default {
  props: {
    issue: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  components: {
    List: () => import('../components/List')
  }
}
</script>