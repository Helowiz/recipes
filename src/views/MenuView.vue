<template>
    <div>
      <h1>Mon Menu</h1>
      <p class="subtitle">Recettes Bio, Sportives & Adaptées au Budget Étudiant ✨</p>
      <div class="batch-cook-suggestions">
        <h3><span class="emoji">💡</span> Suggestions Batch Cooking</h3>
        <ul>
            <li v-for="(suggestion, index) in weeklyBatchCookSuggestions" :key="index">
                {{ suggestion }}
            </li>
        </ul>
         <p class="prep-link">Voir la <a href="#" @click.prevent="emit('show-prep-modal')">préparation détaillée</a>.</p>
    </div>
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
          v-for="(day, index) in weeklyMenuData"
          :key="day.id"
          :day="day"
          :all-weekly-data="weeklyMenuData" 
          :current-index="index" 
          @show-recipe="(recipeId) => emit('show-recipe-modal', recipeId)"
        />
      </div>
    </div>
  </template>
  
<script setup>
import { ref, defineEmits, computed } from 'vue'; // Ajout computed
import DayCard from '@/components/menu/DayCard.vue';
import { weeklyMenu as menuDataImport } from '@/data/menuData.js';
import { recipes } from '@/data/recipes.js'; // Importer recettes

const weeklyMenuData = ref(menuDataImport);
const emit = defineEmits(['show-recipe-modal', 'show-list-modal', 'show-prep-modal']);

const weeklyBatchCookSuggestions = computed(() => {
    const suggestions = [];
    const ingredientCount = {};
    const batchCookableMeals = [];

    weeklyMenuData.value.forEach(day => {
        day.meals.forEach(meal => {
            const recipe = recipes[meal.id] || recipes['default'];

            recipe.ingredients?.forEach(ing => {
                const keyIngredient = identifyBatchIngredient(ing.item);
                if (keyIngredient) {
                    ingredientCount[keyIngredient] = (ingredientCount[keyIngredient] || 0) + 1;
                }
            });

            if (recipe.canBatchCook) {
                if (!batchCookableMeals.some(m => m.id === recipe.id)) {
                     batchCookableMeals.push({ id: recipe.id, title: recipe.title.replace(/<[^>]*>?/gm, ''), notes: recipe.batchCookNotes }); // Nettoyer le titre
                }
            }
        });
    });

    for (const [ingredient, count] of Object.entries(ingredientCount)) {
        if (count >= 2) {
             suggestions.push(`Cuire une grande quantité de ${ingredient} pour la semaine.`);
        }
    }

     batchCookableMeals.forEach(meal => {
         suggestions.push(`Préparer une grande quantité de "${meal.title}" (${meal.notes || 'pour plusieurs repas'}).`);
     });

     const usesEggs = weeklyMenuData.value.some(day => day.meals.some(meal => meal.id === 'lunch_potato_egg_chickpea_salad'));
     if (usesEggs) {
         suggestions.push("Cuire quelques œufs durs pour les salades.");
     }


    if (suggestions.length === 0) {
        return ['Peu d\'opportunités de batch cooking identifiées cette semaine.'];
    }

    return suggestions;
});

// Fonction utilitaire simple pour identifier les ingrédients clés
function identifyBatchIngredient(item) {
    const lowerItem = item.toLowerCase();
    if (lowerItem.includes('quinoa')) return 'Quinoa';
    if (lowerItem.includes('riz complet')) return 'Riz Complet';
    if (lowerItem.includes('lentilles vertes')) return 'Lentilles Vertes';
    if (lowerItem.includes('pois chiches') && !lowerItem.includes('houmous')) return 'Pois Chiches'; 
    if (lowerItem.includes('haricots rouges')) return 'Haricots Rouges';
    if (lowerItem.includes('haricots blancs')) return 'Haricots Blancs';
    return null;
}
</script>
  
<style scoped>
  h1 { text-align: center; font-family: 'Pacifico', cursive; color: var(--color-secondary); font-size: 2.8em; margin-bottom: 25px; }
  .subtitle { text-align: center; color: var(--color-text-light); margin-bottom: 45px; font-size: 1.1em; }
  .action-buttons-container { display: flex; justify-content: center; gap: 20px; margin-bottom: 40px; flex-wrap: wrap; }
  .days-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 35px; }
  
  /* --- Styles Boutons Action (avec état :active) --- */
  .action-button {
      color: white; border: none; padding: 12px 25px;
      font-family: 'Poppins', sans-serif; font-size: 1em; font-weight: 600;
      border-radius: 50px; cursor: pointer;
      /* Transition douce pour tous les états */
      transition: background-color 0.3s ease, transform 0.15s ease, box-shadow 0.2s ease;
      display: inline-flex; align-items: center;
  }
  .action-button .emoji { margin-right: 8px; }
  
  /* Styles spécifiques par bouton */
  #show-list-button { background-color: var(--color-primary); box-shadow: 0 4px 10px rgba(26, 188, 156, 0.3); }
  #show-list-button:hover { background-color: #16a085; transform: translateY(-3px); box-shadow: 0 6px 12px rgba(26, 188, 156, 0.4); }
  #show-list-button:active { transform: translateY(0px); box-shadow: 0 2px 5px rgba(26, 188, 156, 0.3); background-color: #148f77; } /* Feedback clic */
  
  #show-prep-button { background-color: var(--color-accent); box-shadow: 0 4px 10px rgba(230, 126, 34, 0.3); }
  #show-prep-button:hover { background-color: #d35400; transform: translateY(-3px); box-shadow: 0 6px 12px rgba(230, 126, 34, 0.4); }
  #show-prep-button:active { transform: translateY(0px); box-shadow: 0 2px 5px rgba(230, 126, 34, 0.3); background-color: #ba4a00; } /* Feedback clic */
  
</style>