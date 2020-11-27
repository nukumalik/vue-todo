<template>
  <div>
    <p v-if="isLoading">Loading...</p>
    <h1>{{ singleTodo.title }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters(["singleTodo", "isLoading"]),
  methods: {
    ...mapActions(["getTodo"])
  },
  created() {
    this.getTodo(this.$route.params.id);
  }
};
</script>
