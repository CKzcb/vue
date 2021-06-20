<template>
  <div class="div">
    <h1 class="red">{{message}}</h1>
    <input class="left" v-model="todo_one" @keydown.enter="add_one">
    <button class="left" @click="add_one">增加</button>
    <button @click="open_show_list" class="left">{{open_state}}</button>
    <br><span v-show="oepn_show">you will add: {{todo_one}}</span>
    <ul class="left">
      <li v-for="item in todolist" :key="item">{{item}}</li>
      <!-- <li v-for="i in 99">{{i}}</li> -->
    </ul>
    <todo-item />
  </div>
</template>

<script>
export default {
  component: 'todo-item',
  name: 'App',
  data() {
    return {
      message: 'hello, this is your todo list',
      todo_one: '',
      todolist: [],
      oepn_show: true,
      open_state: '关闭',
    };
  },
  methods: {
    add_one() {
      this.todolist.push(this.todo_one);
    },
    open_show_list() {
      if (this.oepn_show) {
        this.oepn_show = false;
        this.open_state = '开启';
      } else {
        this.oepn_show = true;
        this.open_state = '关闭';
      }
    },
  },
};
</script>

<style>
  .red {
    color: red;
    font-size: 50px;
    background-color: darkorange;
    align-content: center;
  }
  .div {
    text-align: center;
  }
  .left {
    text-align: left;
    font-size: 20px;
  }
</style>
