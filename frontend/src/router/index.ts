import { createRouter, createWebHistory } from 'vue-router'
import TodoListView from '../views/TodoListView.vue'

const routes = [
    { path: '/', name: 'TodoList', component: TodoListView },
    { path: '/todos', name: 'TodoList', component: TodoListView },
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router