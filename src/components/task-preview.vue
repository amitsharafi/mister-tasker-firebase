<template>
  <div class="task-preview">
    <h3>{{ task.title }}</h3>
    <p>{{ task.importance }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
}
</script>
