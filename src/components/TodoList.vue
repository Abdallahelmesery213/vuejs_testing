<template>
  <div class="todo-list">
    <h2 class="mb-5">Todo List</h2>
    <form>
      <div class="row mb-5">
        <div class="col-md-8">
          <input
            type="text"
            placeholder="type your task"
            v-model="taskText"
            class="form-control"
          />
        </div>
        <div class="col-md-2 text-end">
          <button
            class="btn btn-primary"
            @click.prevent="addTask"
            :disabled="!taskText.length"
          >
            Add Task
          </button>
        </div>
        <div class="col-md-2 text-start">
          <button
            class="btn btn-danger"
            @click.prevent="deleteAll"
            :disabled="!tasks[0]"
          >
            Delete All
          </button>
        </div>
      </div>
    </form>
    <div class="container">
      <div
        class="task-lists row mt-3"
        v-for="(task, index) in tasks"
        :key="index"
      >
        <div class="col-md-8 my-task">
          {{ task }}
        </div>
        <div class="col-md-4">
          <button class="btn btn-danger" @click.prevent="deleteTask(index)">
            Delete Task
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      tasks: [],
      taskText: "",
    };
  },
  methods: {
    addTask: function () {
      this.tasks.push(this.taskText);
      this.taskText = "";
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
    },
    deleteAll: function () {
      this.tasks = [];
    },
  },
};
</script>
<style scoped lang="scss">
.todo-list {
  width: 80%;
  margin: 20px auto;
}
.my-task {
  background-color: #d9d5d5;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  font-size: 18px;
  color: #523d3d;
}
.btn {
  padding: 10px;
}
input {
  padding: 10px;
}
</style>
