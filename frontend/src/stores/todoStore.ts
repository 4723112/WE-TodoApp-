import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Todo {
    id: number
    title: string
    completed: boolean
}

export const useTodoStore = defineStore('todos', () => {
    let serialId = 4 //next id
    const todos = ref<Todo[]>([])

    const addTodo = async (title: string) => {
        const response = await fetch('http://127.0.0.1:8001/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })
        const newTodo: Todo = await response.json()
        todos.value.push(newTodo)
    }

    const removeTodo = async (id: number) => {
        await fetch(`http://127.0.0.1:8001/todos/${id}`, {
            method: 'DELETE'
        })
        todos.value = todos.value.filter((todo) => todo.id !== id)
    }
    return { todos, addTodo, removeTodo }
})
