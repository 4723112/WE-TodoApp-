<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../stores/todoStore'

const todoStore = useTodoStore()
const title = ref('')
</script>

<template>
  <div>
    <input v-model="title" placeholder="New todo" />
    <button
      @click="() => {
        if (title) {
          todoStore.addTodo(title)
          title = ''
        }
      }"
    >
      Add
    </button>
  </div>
</template>
