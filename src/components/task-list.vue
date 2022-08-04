<template>
  <section class="task-list">
    <task-preview v-for="task in tasks" :key="task.id" :task="task" />
  </section>
</template>

<script>
import taskPreview from './task-preview.vue'
export default {
  data() {
    return {
      tasks: [
        { title: 'hi', importance: 1 },
        { title: 'bye', importance: 2 },
      ],
    }
  },

  components: { taskPreview },
}
</script>
