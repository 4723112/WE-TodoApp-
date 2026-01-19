<script setup lang="ts">

import { RouterView, RouterLink } from 'vue-router'; // <-- RouterViewとRouterLinkをインポートする

</script>

<template>
  <div id="app">
    <header> <!-- ヘッダーエリア -->
      <h1>Todo App</h1>
    </header>

    <main id="main-content"> <!-- メインコンテンツ -->
      <router-view />
    </main>
    <footer> <!-- フッターエリア -->
      <ul>
        <li><router-link to="/todos">Todo List</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
  #main-content { padding: 1rem; border-style: solid; border-width: 2px; }
</style>