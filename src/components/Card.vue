<template>
  <div
    class="card h-100 text-white text-capitalize shadow"
    :class="todo?.completed ? 'bg-success' : 'bg-primary'"
    @click="completeTodo(todo?.id)"
  >
    <div class="card-body">
      <span
        :style="{
          'text-decoration': todo?.completed ? 'line-through' : 'none'
        }"
        >{{ todo?.title }}</span
      >
    </div>
    <div class="trash" @click="deleteTodo(todo?.id)">
      <span class="fas fa-trash-alt"></span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Card",
  props: ["todo"],
  methods: {
    ...mapActions(["completeTodo", "deleteTodo"])
  }
};
</script>

<style lang="scss" scoped>
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
