<template>
  <div class="counter-container">
    <div class="counter-display">{{ count }}</div>
    <div class="counter-buttons">
      <button class="counter-button increment" @click="increment">增加</button>
      <button class="counter-button decrement" @click="decrement">减少</button>
      <button class="counter-button reset" @click="reset">重置</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
    reset() {
      this.count = 0;
    },
  },
};
</script>

<style scoped>
.counter-container {
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.counter-display {
  font-size: 3rem;
  font-weight: bold;
  color: #42b883;
  margin: 20px 0;
}

.counter-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.counter-button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.counter-button.increment {
  background-color: #42b883;
  color: white;
}

.counter-button.decrement {
  background-color: #e74c3c;
  color: white;
}

.counter-button.reset {
  background-color: #34495e;
  color: white;
}

.counter-button:hover {
  opacity: 0.9;
}
</style>
