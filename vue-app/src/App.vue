<template>
  <div class="vue-container">
    <h2>Vue 计数器应用</h2>
    <p>这是一个使用Vue构建的简单计数器应用，作为微前端架构的一部分。</p>
    <Counter />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Counter,
  },
};
</script>

<style scoped>
.vue-container {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.vue-container h2 {
  color: #42b883;
  border-bottom: 2px solid #42b883;
  padding-bottom: 10px;
}
</style>
