import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.component('todo-item', {
  template: '<li>This is a todo</li>',
});

const vm = app.mount('#app');
vm.message = 'hi~';
