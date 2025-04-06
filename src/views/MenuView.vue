<template>
    <div> <!-- Conteneur pour la vue -->
      <h1>Mon Menu</h1>
      <p class="subtitle">Recettes Bio, Sportives & Adaptées au Budget Étudiant ✨</p>
  
      <div class="action-buttons-container">
          <button id="show-prep-button" class="action-button" @click="emit('show-prep-modal')">
              <span class="emoji">🧑‍🍳</span> Préparation à l'Avance
          </button>
          <button id="show-list-button" class="action-button" @click="emit('show-list-modal')">
              <span class="emoji">🛒</span> Voir la Liste de Courses
          </button>
      </div>
  
      <div class="days-grid">
        <DayCard
          v-for="day in weeklyMenuData"
          :key="day.id"
          :day="day"
          @show-recipe="(recipeId) => emit('show-recipe-modal', recipeId)"
        />
        <!-- Le @show-recipe de DayCard déclenche l'émission de @show-recipe-modal vers App.vue -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  import DayCard from '@/components/DayCard.vue'; // Utilisation de l'alias @
  import { weeklyMenu as menuDataImport } from '@/data/menuData.js';
  
  const weeklyMenuData = ref(menuDataImport);
  
  // Définir les événements que cette vue peut émettre vers son parent (App.vue)
  const emit = defineEmits(['show-recipe-modal', 'show-list-modal', 'show-prep-modal']);
  
  // Les boutons cliqués ici émettent simplement l'événement vers App.vue
  // La logique d'ouverture réelle est dans App.vue
  </script>
  
  <style scoped>
  /* Styles spécifiques à la vue (principalement les éléments globaux déjà stylés dans main.css) */
  /* On peut garder les styles pour .action-buttons-container et .days-grid ici si on préfère */
  h1 { text-align: center; font-family: 'Pacifico', cursive; color: var(--color-secondary); font-size: 2.8em; margin-bottom: 25px; }
  .subtitle { text-align: center; color: var(--color-text-light); margin-bottom: 45px; font-size: 1.1em; }
  .action-buttons-container { display: flex; justify-content: center; gap: 20px; margin-bottom: 40px; flex-wrap: wrap; }
  .action-button { color: white; border: none; padding: 12px 25px; font-family: 'Poppins', sans-serif; font-size: 1em; font-weight: 600; border-radius: 50px; cursor: pointer; transition: background-color 0.3s ease, transform 0.2s ease; display: inline-flex; align-items: center; }
  .action-button:hover { transform: translateY(-2px); }
  .action-button .emoji { margin-right: 8px; }
  #show-list-button { background-color: var(--color-primary); box-shadow: 0 4px 10px rgba(26, 188, 156, 0.3); }
  #show-list-button:hover { background-color: #16a085; }
  #show-prep-button { background-color: var(--color-accent); box-shadow: 0 4px 10px rgba(230, 126, 34, 0.3); }
  #show-prep-button:hover { background-color: #d35400; }
  .days-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 35px; }
  </style>