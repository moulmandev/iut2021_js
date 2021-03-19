<template>
  <div class="todos">
    <h1>Taches</h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="todo" placeholder="Nouvelle tache" />
      <button type="submit">Ajouter la tache</button>
    </form>
    <div class="todos__container">
      <Todo v-for="(t, index) in todos" :key="index" :todo="t" @remove="removeTodo" />
    </div>
    <p>Total: {{ totalChecked }} / {{ total }} ({{ percent }}%)</p>
  </div>
</template>

<script>
import Todo, { TodoDTO } from '../components/Todo.vue';
import { getAllTodo, addTodo, deleteTodo } from '../services/todo.service.js';
export default {
  name: 'Todos',
  components: {
    Todo,
  },
  data: () => ({ todo: '', todos: [] }),
  computed: {
    total() {
      return this.todos.length;
    },
    totalChecked() {
      return this.todos.filter((t) => t.checked).length;
    },
    percent() {
      return !this.total ? 0 : Number((this.totalChecked / this.total) * 100).toFixed(2);
    },
  },
  methods: {
    addTodo() {
      if (this.todo) {
        addTodo(this.todo).then((newTodo) => {
          this.todos.push(newTodo);
          this.todo = '';
        });
      }
    },
    removeTodo(todo) {
      deleteTodo(todo.id).then(() => {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
      });
    },
  },
  mounted() {
    getAllTodo().then((todos) => {
      this.todos = todos;
    });
  },
};
</script>

<style scoped>
.todos {
  width: 50%;
  margin: auto;
  border: 1px solid;
}
</style>
