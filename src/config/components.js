import Vue from "vue"

import TaskList from "@/components/Lists/TaskList"
import TaskBoardEdit from "@/components/Boards/TaskBoardEdit"
import TaskListEdit from "@/components/Lists/TaskListEdit"
import TaskListRestore from "@/components/Lists/TaskListRestore"
import TaskListArchive from "@/components/Lists/TaskListArchive"
import DetailsPopup from "@/components/Details/DetailsPopup"
import TaskListActions from "@/components/Lists/TaskListActions"
import TaskListItem from "@/components/Items/TaskListItem"
import DetailsDropdown from "@/components/Details/DetailsDropdown"

Vue.component("TaskList", TaskList)
Vue.component("TaskBoardEdit", TaskBoardEdit)

Vue.component("TaskListEdit", TaskListEdit)

Vue.component("TaskListRestore", TaskListRestore)

Vue.component("TaskListArchive", TaskListArchive)
Vue.component("DetailsPopup", DetailsPopup)
Vue.component("TaskListActions", TaskListActions)
Vue.component("TaskListItem", TaskListItem)
Vue.component("DetailsDropdown", DetailsDropdown)
