<script setup lang="ts">
  import { ref, computed } from 'vue';
  // 1. AddTodoコンポーネントをインポート
  import AddTodo from './components/AddTodo.vue';
  
  type Todo = { id: number; title: string; completed: boolean };
  
  const todos = ref<Todo[]>([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Write report', completed: true },
    { id: 3, title: 'Call Alice', completed: false },
  ]);
  
  const kensuu = computed(() => {
    return todos.value.filter(todo => !todo.completed).length;
  });
  
  const newTitle = ref('');
  const nextId = ref(Math.max(0, ...todos.value.map((t) => t.id)) + 1);
  
  function addTodo() {
    if (!newTitle.value) return;
    todos.value.push({ id: nextId.value++, title: newTitle.value, completed: false });
    newTitle.value = ''; // defineModelにより子側のinputも空になります
  }
  </script>
  
  <template>
    <div id="app">
      <section class="todo-app">
        <h2>Todos</h2>
        <p>未完了のタスク数: {{kensuu}}</p>
        <ul>
          <li
            v-for="todo in todos"
            :key="todo.id"
            style="display:flex; align-items:center; gap:0.5rem; margin:0.25rem 0;"
          >
            <input type="checkbox" v-model="todo.completed" />
            <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
              {{ todo.title }}
            </span>
          </li>
        </ul>
      </section>
  
      <AddTodo 
        v-model:message="newTitle" 
        @add-todo="addTodo" 
      />
    </div>
  </template>