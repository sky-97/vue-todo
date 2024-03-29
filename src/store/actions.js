
export default {
  async fetchData({ commit }) {
    commit("SET_LOADING_STATE", true);
    
    // Wrap setTimeout in a promise
    await new Promise(resolve => setTimeout(resolve, 5 * 1000));
    
    // After the timeout, set loading state to false
    commit("SET_LOADING_STATE", false);
  },
  
  async saveTaskBoard({ commit }, payload) {
    commit("SAVE_TASKBOARD", payload)
  },
  async archiveTaskBoard({ commit }, payload) {
    commit("ARCHIVE_TASKBOARD", payload)
  },
  async restoreTaskBoard({ commit }, payload) {
    commit("RESTORE_TASKBOARD", payload)
  },
  async setActiveTaskBoard({ commit }, payload) {
    commit("SET_ACTIVE_TASKBOARD", payload)
  },

  async saveTaskList({ commit }, payload) {
    commit("SAVE_TASKLIST", payload)
  },
  async archiveTaskList({ commit }, payload) {
    commit("ARCHIVE_TASKLIST", payload)
  },
  async restoreTaskList({ commit }, payload) {
    commit("RESTORE_TASKLIST", payload)
  },

  async reorderTaskLists({ commit }, payload) {
    commit("REORDER_TASKLISTS", payload)
  },
  async reorderTaskListItems({ commit }, payload) {
    commit("REORDER_TASKLIST_ITEMS", payload)
  },

  async saveTaskListItem({ commit }, payload) {
    commit("SAVE_TASKLIST_ITEM", payload)
  },
  async deleteTaskListItem({ commit }, payload) {
    commit("DELETE_TASKLIST_ITEM", payload)
  }
}
