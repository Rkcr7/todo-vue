<template>
  <div class="row">
    <!-- Todo column -->
    <div class="col">
      <div class="outercard">
        <div class="card-header">
          <h3 class="text-center mb-0">Todo ({{ todoTasks.length }})</h3>
        </div>
        <div class="card-body todo-card-body">
          <div class="todocard-column card-columns">
            <!-- Draggable container for todo tasks -->
            <draggable
              :item-key="(task) => task.id"
              v-model="todoTasks"
              group="tasks"
              @end="saveTasksToLocalStorage"
              class="draggable-container"
            >
              <!-- Task card -->
              <template #item="{ element, index }">
                <div
                  class="card mb-3 todo-task"
                  :class="{ editing: element.editing }"
                  @dblclick="element.editing = true"
                >
                  <!-- Card element with a title that displays the date and time the task was created -->

                  <div
                    class="card-body d-flex justify-content-between align-items-center"
                    :title="`Task added at ${element.created}`"
                  >
                    <!-- Task index -->
                    <span style="padding-right: 3%; font-weight: bolder">{{
                      index + 1
                    }}</span>

                    <!-- Task text -->
                    <span v-if="!element.editing">{{ element.text }} </span>

                    <!-- Editable task text input -->
                    <input
                      v-else
                      type="text"
                      v-model="element.text"
                      @keyup.enter="element.editing = false"
                      @blur="element.editing = false"
                    />
                    <div>
                      <!-- Delete task button -->
                      <delete-icon @click="removeTask(index)" />
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
        </div>
      </div>

      <!-- Add task input and button -->
      <div class="card mb-3 todo-task-add">
        <div class="card-body">
          <div class="inputtask">
            <input
              type="text"
              class="form-control"
              v-model="newTaskText"
              placeholder="Add a new task"
              @keyup.enter="addTask"
            />
          </div>
          <div class="addbtn">
            <button
              class="btn"
              style="
                width: 80px;
                background-color: #01a0c7;
                font-weight: bold;
                color: white;
              "
              @click="addTask"
            >
              Add
            </button>
            <span style="margin-left: 4%; font-size: small"
              >Double click on task to edit</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- In Progress column -->
    <div class="col">
      <div class="outercard">
        <div class="card-header">
          <h3 class="text-center mb-0">
            In Progress ({{ inProgressTasks.length }})
          </h3>
        </div>
        <div class="card-body">
          <div class="card-columns">
            <!-- Draggable container for in-progress tasks -->
            <draggable
              :item-key="(task) => task.id"
              v-model="inProgressTasks"
              group="tasks"
              @end="saveTasksToLocalStorage"
              class="draggable-container"
            >
              <!-- Card element with a title that displays the date and time the task was created -->
              <template #item="{ element }">
                <div
                  class="card mb-3 in-progress-task"
                  :title="`Task added at ${element.created}`"
                >
                  <div class="card-body">
                    <span>{{ element.text }}</span>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
        </div>
      </div>
    </div>

    <!-- Done column -->

    <div class="col">
      <div class="outercard">
        <div class="card-header">
          <h3 class="text-center mb-0">Done ({{ doneTasks.length }})</h3>
        </div>
        <div class="card-body">
          <div class="card-columns">
            <draggable
              :item-key="(task) => task.id"
              v-model="doneTasks"
              group="tasks"
              @end="saveTasksToLocalStorage"
              class="draggable-container"
            >
              <template #item="{ element }">
                <div
                  class="card mb-3 done-task"
                  :title="`Task added at ${element.created}`"
                >
                  <div class="card-body">
                    <span class="linethrough">{{ element.text }}</span>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.draggable-container {
  min-height: 200px;
}

*::-webkit-scrollbar {
  width: 0.3em;
  height: 0.3em;
}

.card-columns {
  margin-top: 1rem;
}

.card-columns:first-child {
  margin-top: 0rem;
}

.col {
  padding: 0 1rem;
}

.h3 {
  font-family: Arial, Helvetica, sans-serif;
}

.linethrough {
  text-decoration: line-through;
}

.todo-task {
  background-color: #fff;
}
.in-progress-task {
  background-color: rgba(70, 179, 253, 0.44);
}
.done-task {
  background-color: #c3d6b1;
}

.card:hover {
  transform: translateY(-5px);
}
.card {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(52, 52, 52, 0.2);
  overflow: hidden;
  margin: 20px;
}
.outercard {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin: 20px;
}

.card-header {
  background-color: #01a0c7;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
}

.card-body {
  font-size: 18px;
  line-height: 1.5;
}

.todo-task input[type="text"] {
  width: 80%;
}

.linethrough {
  text-decoration: line-through;
}

.card-columns::-webkit-scrollbar {
  width: 0.3em;
  height: 0.3em;
}

.card-columns::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1em;
}

.card-columns::-webkit-scrollbar-track {
  background-color: transparent;
}
.card-columns {
  max-height: 500px;
  overflow-y: auto;
}

.todocard-column {
  max-height: 400px;
  overflow-y: auto;
}

.add-task-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.add-task-form input[type="text"] {
  width: 80%;
  margin-right: 10px;
}
span {
  color: #4c4c4c;
  font-weight: 500;
}
</style>

<script>
// Import required libraries and components
import dayjs from "dayjs"; //for date and time
import DeleteIcon from "vue-material-design-icons/Delete.vue";
import draggable from "vuedraggable"; //To use drag & drop

export default {
  // Component name
  name: "TodoList",

  // Component data
  data() {
    return {
      todoTasks: [], // List of tasks to do
      inProgressTasks: [], // List of tasks in progress
      doneTasks: [], // List of completed tasks
      newTaskText: "", // Text for adding new task
      taskCounter: 0, // Counter to assign unique IDs to new tasks
    };
  },

  // Component lifecycle hook for when component is mounted
  mounted() {
    // Load task data from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      this.todoTasks = tasks.todo; // Assign the to-do tasks from the saved data
      this.inProgressTasks = tasks.inProgress; // Assign the in-progress tasks from the saved data
      this.doneTasks = tasks.done; // Assign the completed tasks from the saved data
    }
  },

  // Component methods
  methods: {
    // Method for adding a new task to the to-do list
    addTask() {
      if (this.newTaskText.trim() === "") return; // Check if input is empty
      const newTask = {
        id: ++this.taskCounter, // Assign a new unique ID to the task
        text: this.newTaskText.trim(), // Assign the text from the input field to the task
        editing: false, // Flag for if the task is being edited
        created: dayjs().format("h:mm:ss A on YYYY-MM-DD "), // Timestamp for when the task was created & time format usingg dayjs
      };
      this.todoTasks.push(newTask); // Add the new task to the to-do list
      this.newTaskText = ""; // Clear the input field
      this.saveTasksToLocalStorage(); // Save the tasks to local storage
    },

    // Method for removing a task from a list
    removeTask(index) {
      this.todoTasks.splice(index, 1); // Remove the task from the to-do list at the specified index
      this.saveTasksToLocalStorage(); // Save the tasks to local storage
    },

    // Method for saving the task data to local storage
    saveTasksToLocalStorage() {
      localStorage.setItem(
        "tasks",
        JSON.stringify({
          todo: this.todoTasks, // Save the to-do tasks
          inProgress: this.inProgressTasks, // Save the in-progress tasks
          done: this.doneTasks, // Save the completed tasks
        })
      );
    },
  },

  // Component sub-components
  components: {
    draggable, // Component for making task lists draggable
    DeleteIcon, // Component for the delete icon
  },
};
</script>
