<script setup>
import { computed } from 'vue';

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

const stopPropagation = (event) => {
  event.stopPropagation();
};

const recipeTitle = computed(() => props.recipe?.title || 'Recette');
const recipeEmoji = computed(() => props.recipe?.emoji || '');
const ingredients = computed(() => props.recipe?.ingredients || []);
const steps = computed(() => props.recipe?.steps || []);
const prepTasks = computed(() => props.recipe?.prepTasks || []);
const notes = computed(() => props.recipe?.notes || '');
const batchCookNotes = computed(() => props.recipe?.batchCookNotes || '');
const prepRequired = computed(() => props.recipe?.prepRequiredTheDayBefore || false);

</script>

<template>
    <div class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click="stopPropagation">
        <button class="close-button" @click="closeModal">×</button>
  
        <h2>{{ recipeEmoji }} {{ recipeTitle }}</h2>
  
         <div v-if="prepRequired || batchCookNotes || notes" class="recipe-notes">
             <p v-if="prepRequired" class="prep-note">
                  <strong>⚠️ Préparation la veille requise !</strong>
             </p>
             <p v-if="prepTasks.length > 0" class="prep-tasks">
                 <strong>Tâches de préparation :</strong>
                 <ul>
                     <li v-for="(task, index) in prepTasks" :key="`prep-${index}`">{{ task }}</li>
                 </ul>
             </p>
              <p v-if="batchCookNotes" class="batch-cook-note">
                  <strong>💡 Batch Cooking :</strong> {{ batchCookNotes }}
              </p>
             <p v-if="notes && !batchCookNotes" class="general-note"> 
                  <strong>Note :</strong> {{ notes }}
             </p>
         </div>
  
        <div class="recipe-section">
          <h3>Ingrédients</h3>
          <ul v-if="ingredients.length > 0">
            <li v-for="(ing, index) in ingredients" :key="`ing-${index}`">
              {{ ing.item }}
              <span v-if="ing.quantity || ing.unit">
                : {{ ing.quantity }} {{ ing.unit }}
              </span>
              <span v-if="ing.note" class="ingredient-note"> ({{ ing.note }})</span>
              <span v-if="ing.prepSuggestion" class="prep-suggestion" title="Suggestion de préparation">💡 {{ ing.prepSuggestion }}</span>
            </li>
          </ul>
          <p v-else>Aucun ingrédient spécifié.</p>
        </div>
  
        <div class="recipe-section">
          <h3>Préparation</h3>
          <ol v-if="steps.length > 0">
            <li v-for="(step, index) in steps" :key="`step-${index}`">
              {{ step }}
            </li>
          </ol>
          <p v-else>Aucune étape de préparation spécifiée.</p>
        </div>
  
      </div>
    </div>
  </template>

<style scoped>
.modal-overlay {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 700px; 
  width: 90%; 
  max-height: 90vh; 
  overflow-y: auto; 
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  color: #aaa;
  cursor: pointer;
  line-height: 1;
}
.close-button:hover {
    color: #333;
}

h2 {
  margin-top: 0;
  color: #333;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

h3 {
  color: #e67e22;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
}

.recipe-section ul, .recipe-section ol {
  padding-left: 1.5rem;
}

.recipe-section li {
  margin-bottom: 0.6rem;
  line-height: 1.5;
}

.ingredient-note, .prep-suggestion {
  font-size: 0.9em;
  color: #555;
  font-style: italic;
  margin-left: 0.3rem;
}
.prep-suggestion {
    cursor: help;
    color: #2980b9;
}

.recipe-notes {
    background-color: #fffbe6; 
    border: 1px solid #ffe58f;
    border-left-width: 4px;
    border-radius: 4px;
    padding: 0.8rem 1rem;
    margin-bottom: 1.5rem;
    font-size: 0.95em;
}
.recipe-notes p {
    margin: 0.5rem 0;
}
.recipe-notes strong {
    color: #8a6d3b;
}
.prep-note strong {
    color: #c0392b; 
}
.batch-cook-note strong {
    color: #27ae60; 
}
.prep-tasks ul {
    margin-top: 0.3rem;
    margin-bottom: 0;
    padding-left: 1.2rem;
}

</style>