<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTodoStore } from '../stores/todoStore'

const route = useRoute()
const todoStore = useTodoStore()

const todoId = computed(() => Number(route.params.id))

const todo = computed(() =>
  todoStore.todos.find(t => t.id === todoId.value)
)
</script>

<template>
  <section v-if="todo">
    <h2>Todo Detail</h2>

    <p>
      <strong>Title:</strong>
      {{ todo.title }}
    </p>

    <p>
      <strong>Status:</strong>
      {{ todo.completed ? 'Completed' : 'Not completed' }}
    </p>
  </section>

  <section v-else>
    <p>Todo not found.</p>
  </section>
</template>
