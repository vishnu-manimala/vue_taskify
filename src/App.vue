<template>
  <TodoLayout />
</template>

<script>
import TodoLayout from './layouts/TodoLayout.vue'

export default {
  name: 'App',
  components: {
    TodoLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
