import axios from "axios";

const state = {
  isLoading: false,
  todos: []
};

const getters = {
  allTodos(state) {
    return state.todos;
  },
  isLoading(state) {
    return state.isLoading;
  }
};

const actions = {
  async fetchTodo({ commit }) {
    commit("setLoading", true);
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=16"
    );
    commit("setTodo", res.data);
    commit("setLoading", false);
  },
  addTodo({ commit }, data) {
    commit("addTodo", data);
  },
  deleteTodo({ commit }, id) {
    commit("deleteTodo", id);
  },
  completeTodo({ commit }, id) {
    commit("completeTodo", id);
  }
};

const mutations = {
  setLoading(state, value) {
    state.isLoading = value;
  },
  setTodo(state, data) {
    state.todos = data;
  },
  addTodo(state, data) {
    state.todos.unshift(data);
  },
  deleteTodo(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  completeTodo(state, id) {
    state.todos = state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
};

export default { state, getters, actions, mutations };
