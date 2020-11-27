<template>
  <div class="pt-5">
    <form class="mb-4 shadow-sm" @submit.prevent="handleSubmit">
      <div class="input-group">
        <div class="custom-file">
          <input type="text" v-model="title" />
        </div>
        <div class="input-group-append">
          <button type="submit" class="btn btn-success">
            Add Todo
          </button>
        </div>
      </div>
    </form>
    <div v-if="isLoading">Loading...</div>
    <div class="row" v-else>
      <div class="col-md-3 mb-4" v-for="todo in allTodos" :key="todo.id">
        <div
          class="card h-100 text-white text-capitalize shadow"
          :class="todo.completed ? 'bg-success' : 'bg-primary'"
          @click="completeTodo(todo.id)"
        >
          <div class="card-body">
            <span
              :style="{
                'text-decoration': todo.completed ? 'line-through' : 'none'
              }"
              >{{ todo.title }}</span
            >
          </div>
          <div class="trash" @click="deleteTodo(todo.id)">
            <span class="fas fa-trash-alt"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      title: ""
    };
  },
  computed: mapGetters(["allTodos", "isLoading"]),
  methods: {
    ...mapActions(["fetchTodo", "deleteTodo", "addTodo", "completeTodo"]),
    handleSubmit(e) {
      e.preventDefault;
      this.addTodo({
        id: this.allTodos.length,
        completed: false,
        title: this.title,
        userId: 1
      });
    }
  },
  created() {
    this.fetchTodo();
    console.log(this.allTodos);
  }
};
</script>

<style lang="scss" scoped>
.custom-file {
  & > input[type="text"] {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 10px;
    border: 1px solid #5fa946;
    border-radius: 4px 0 0 4px;
  }
}

.card {
  position: relative;
  & .trash {
    position: absolute !important;
    color: #4d4d4f;
    bottom: 4px;
    right: 7px;
    cursor: pointer;
  }
}
</style>
