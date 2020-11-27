<template>
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["addTodo"]),
    handleSubmit(e) {
      e.preventDefault;
      this.addTodo({
        id: this.allTodos.length,
        completed: false,
        title: this.title,
        userId: 1
      });
    }
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
</style>
