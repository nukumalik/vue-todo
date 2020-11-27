<template>
  <div class="pt-5">
    <AddTodo />
    <div v-if="isLoading">Loading...</div>
    <div class="row" v-else>
      <div class="col-md-3 mb-4" v-for="todo in allTodos" :key="todo.id">
        <Card :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

// Components
import AddTodo from "../components/AddTodo.vue";
import Card from "../components/Card.vue";

export default {
  components: { AddTodo, Card },
  computed: mapGetters(["allTodos", "isLoading"]),
  methods: {
    ...mapActions(["fetchTodo"])
  },
  created() {
    this.fetchTodo();
  }
};
</script>

<style lang="scss" scoped></style>
