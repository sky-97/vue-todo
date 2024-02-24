<template>
  <nav class="navbar navbar-light bg-faded">
    <router-link to="/" class="navbar-brand">
      <label>
         Board
        <span class="text-uppercase" v-show="this.activeBoard"> : {{ boardName }} </span>
      </label>
    </router-link>
    <div class="d-flex justify-content-end" v-if="!isLoading">
      <TaskListRestore></TaskListRestore>
      <TaskListEdit></TaskListEdit>
      <TaskBoardEdit></TaskBoardEdit>
      <TaskListArchive></TaskListArchive>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex"

export default {

  computed: {
    ...mapGetters({
      activeBoard: "activeBoard",
      isLoading: "isLoading"
    }),
    boardName() {
      return this.activeBoard ? this.activeBoard.name : ""
    }
  }
}
</script>
