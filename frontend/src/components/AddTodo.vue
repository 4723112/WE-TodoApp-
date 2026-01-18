<<<<<<< HEAD
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
=======
<script setup>
    // 親から v-model:message で渡されたデータと同期する
    const model = defineModel("message")
    
    // 追加ボタンが押されたことを親に知らせるためのイベントを定義
    const emit = defineEmits(['add-todo'])
    
    function handleAdd() {
        // 親コンポーネントの addTodo 関数を発火させるための通知
        emit('add-todo')
    }
    </script>
    
    <template>
      <section>
        <h2>New Todo</h2>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.25rem 0;">
          <input
            v-model="model"
            placeholder="New todo title"
            aria-label="New todo title"
          />
          <button v-on:click="handleAdd" :disabled="!model">Add</button>
        </div>
      </section>
    </template>
>>>>>>> 1506a8d54ea586fb04e0e16cd89465634448342d
