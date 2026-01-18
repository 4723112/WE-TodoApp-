<script setup lang="ts">
import { useTodoStore } from './stores/todoStore'
import AddTodo from './components/AddTodo.vue'

const todoStore = useTodoStore()
</script>

<template>
  <div id="app">
    <section class="todo-app">
      <h2>Todos</h2>
      <ul>
        <li
          v-for="todo in todoStore.todos"
          :key="todo.id"
          style="display:flex; align-items:center; gap:0.5rem; margin:0.25rem 0;"
        >
          <input type="checkbox" v-model="todo.completed" />
          <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
            {{ todo.title }}
          </span>
          <button @click="todoStore.removeTodo(todo.id)">
            Remove
          </button>
        </li>
      </ul>
    </section>

    <AddTodo />
  </div>
</template>
