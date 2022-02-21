<template>
  <div class="comment">
    <p class="comment__date">{{comment.date}}</p>
    <p class="comment__text">{{comment.text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      require: true
    }
  }
}
</script>