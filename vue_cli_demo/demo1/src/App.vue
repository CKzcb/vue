<template>
  <h1>{{message}}</h1>
  <button @click="show_message">点击试试</button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'hello world',
    };
  },
  methods: {
    show_message() {
      this.message = this.message === 'hello world' ? '你好世界' : 'hello world';
    },
  },
};
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
