<template>
    <div class="prep-list-content">
       <div v-for="categoryData in prepList" :key="categoryData.category" class="list-category">
          <h4>
              <span v-if="categoryData.emoji" class="emoji">{{ categoryData.emoji }}</span>
              {{ categoryData.category }}
              <em v-if="categoryData.note" class="category-note"> {{ categoryData.note }}</em>
          </h4>
          <ul class="task-list">
              <li v-for="task in categoryData.tasks" :key="task.id">
                   <input type="checkbox" :id="task.id" :checked="task.checked" @change="toggleTask(task.id)">
                   <label :for="task.id">
                      <span v-html="task.text"></span> <!-- Utilise v-html pour le strong -->
                      <em v-if="task.details"> {{ task.details }}</em>
                   </label>
              </li>
          </ul>
       </div>
      <p class="prep-note" v-html="prepNote"></p>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref, watch } from 'vue';
  
  const props = defineProps({
    listData: { type: Array, required: true },
    note: { type: String, default: '' }
  });
  
  const prepList = ref(props.listData);
  const prepNote = ref(props.note);
  
  watch(() => props.listData, (newList) => {
      prepList.value = newList;
  }, { deep: true });
  
  const toggleTask = (taskId) => {
      console.log("Toggle task:", taskId);
      // Logique similaire à ShoppingListContent pour l'interactivité future
       const category = prepList.value.find(cat => cat.tasks.some(t => t.id === taskId));
      if(category) {
          const task = category.tasks.find(t => t.id === taskId);
          if (task) {
              task.checked = !task.checked;
          }
      }
  };
  </script>
  
  <style scoped>
  h4 {
    font-family: 'Poppins', sans-serif;
    color: var(--color-prep); /* Orange/Jaune */
    margin: 20px 0 10px;
    font-weight: 600;
    border-bottom: 1px dashed #fdebd0;
    padding-bottom: 8px;
  }
  h4:first-of-type {
    margin-top: 0;
  }
  h4 .emoji {
      margin-right: 8px;
  }
  .category-note {
      font-weight: 400;
      font-style: italic;
      font-size: 0.9em;
      color: var(--color-text-light);
      margin-left: 5px;
  }
  
  .task-list {
    list-style: none; /* On gérera la puce via CSS si besoin */
    padding-left: 5px;
    margin-bottom: 15px;
  }
  
  .task-list li {
    margin-bottom: 12px;
    font-size: 1em;
    display: flex;
    align-items: flex-start;
  }
  
  .task-list input[type="checkbox"] {
      margin-right: 10px;
      margin-top: 5px; /* Ajustement vertical */
      cursor: pointer;
      flex-shrink: 0;
  }
  
  .task-list label {
      cursor: pointer;
      flex-grow: 1;
  }
  
  .task-list label :deep(strong) { /* Style le strong injecté par v-html */
      color: var(--color-text);
      font-weight: 600;
  }
  
  .task-list label em { /* Détails */
      font-size: 0.9em;
      color: var(--color-text-light);
      margin-left: 5px;
      display: block; /* Met les détails sur une nouvelle ligne */
      margin-top: 2px;
  }
  
  .prep-note {
    font-size: 0.9em;
    color: var(--color-text-light);
    margin-top: 25px;
    text-align: center;
    font-style: italic;
    padding-top: 15px;
    border-top: 1px dashed #eee;
  }
  </style>