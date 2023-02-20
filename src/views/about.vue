<template>
  <div class="about-container">
    <h1 class="text-center">Todo List App</h1>
    <p class="text-center">This is a Todo List app created using Vue.js</p>
    <h2>Features</h2>
    <ul>
      <li>Allows you to add, edit, and delete tasks</li>
      <li>
        Drag and drop tasks to move them between Todo, In Progress, and Done
        sections
      </li>
      <li>
        Automatically saves your tasks to local storage, so you can continue
        where you left off even if you close the app
      </li>
      <li>
        You can check at what time and date task is added by hovering over the
        task
      </li>
    </ul>
    <h2>How to use</h2>
    <ul>
      <li>
        To add a new task, type the task in the input box and press the "Add"
        button or press Enter key
      </li>
      <li>
        To edit a task, double-click on the task and change the text. Press
        Enter to save the changes.
      </li>
      <li>To delete a task, click on the "Delete" icon</li>
      <li>
        To move a task between Todo, In Progress, and Done sections, simply drag
        and drop the task to the desired section
      </li>
    </ul>
    <p class="text-center">Coded by Ritik</p>
  </div>
</template>

<style>
.about-container {
  margin: 2rem auto;
  max-width: 800px;
}

h1,
h2 {
  text-align: center;
  font-weight: 500;
}

ul {
  list-style-type: disc;
  margin-left: 2rem;
}

li {
  text-align: center;
  margin: 0.5rem 0;
  font-size: large;
}

p.text-center {
  text-align: center;
  margin-top: 2rem;
  font-size: large;
  font-style: italic;
}
</style>
