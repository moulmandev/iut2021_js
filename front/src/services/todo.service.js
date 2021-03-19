import axios from 'axios';
import { TodoDTO } from '../components/Todo.vue';

const url = 'http://localhost:3000';

export function getAllTodo() {
  return axios
    .get(`${url}/todos`)
    .then((response) => response.data.map((todo) => new TodoDTO(todo.name, todo.checked, todo._id)))
    .catch((err) => []);
}

export function addTodo(name) {
  return axios
    .post(`${url}/todos`, { name: name })
    .then((response) => new TodoDTO(response.data.name, response.data.checked, response.data._id));
}

export function updateTodoCheck(id, checked) {
  return axios.patch(
    `${url}/todos/${id}`,
    { checked }, // Same as { checked: checked }
  );
}

export function deleteTodo(id) {
  return axios.delete(`${url}/todos/${id}`);
}
