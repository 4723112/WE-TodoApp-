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