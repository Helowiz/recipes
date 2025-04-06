<template>
    <div v-if="recipe" class="recipe-content">
      <p v-if="recipe.description" class="recipe-description">{{ recipe.description }}</p>

      <h4>Ingrédients</h4>
      <ul class="ingredients-list">
        <li v-for="(ingredient, index) in recipe.ingredients" :key="`ing-${recipe.id}-${index}`">
          <span v-if="ingredient.quantity">
            <strong>{{ formatQuantity(ingredient.quantity) }} {{ ingredient.unit }}</strong>
          </span>
          <span v-else-if="ingredient.unit && ingredient.unit !== 'Selon goût'">
               <strong>{{ ingredient.unit }}</strong> <!-- Pour 'Grande portion', etc. -->
          </span>
           {{ ingredient.item }}
          <em v-if="ingredient.note"> ({{ ingredient.note }})</em>
          <em v-if="ingredient.optional"> (Optionnel)</em>
        </li>
      </ul>
  
      <h4>Préparation</h4>
      <ol v-if="recipe.steps && recipe.steps.length > 1" class="steps-list">
        <li v-for="(step, index) in recipe.steps" :key="`step-${recipe.id}-${index}`">
          {{ step }}
        </li>
      </ol>

      <p v-else-if="recipe.steps && recipe.steps.length === 1" class="single-step">
          {{ recipe.steps[0] }}
      </p>
      <p v-else>Aucune étape de préparation spécifiée.</p>
  
      <div v-if="recipe.notes" class="recipe-notes">
          <h4>Notes</h4>
          <p>{{ recipe.notes }}</p>
      </div>
  
    </div>
    <div v-else>
      <p>Chargement de la recette...</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    recipe: {
      type: Object,
      required: true,
    }
  });
  
  // Fonction pour formater les quantités (ex: 0.5 -> 1/2)
  function formatQuantity(qty) {
      if (qty === 0.5) return '½';
      if (qty === 0.25) return '¼';
      if (qty === 0.75) return '¾';
      return qty;
  }
  </script>
  
  <style scoped>
  .recipe-content {
    font-family: 'Nunito', sans-serif;
    line-height: 1.8;
    color: var(--color-text);
  }
  
  .recipe-description {
      font-style: italic;
      color: var(--color-text-light);
      margin-bottom: 20px;
      text-align: center;
  }
  
  h4 {
    font-family: 'Poppins', sans-serif;
    color: var(--color-accent);
    margin: 20px 0 10px;
    font-weight: 600;
    border-bottom: 1px dotted #ccc;
    padding-bottom: 5px;
  }
  
  .ingredients-list, .steps-list {
    padding-left: 25px;
    margin-bottom: 15px;
  }
  
  .ingredients-list li, .steps-list li {
    margin-bottom: 8px;
  }
  
  .ingredients-list strong {
    font-weight: 700;
    color: var(--color-primary);
  }
  
  .ingredients-list em {
      font-size: 0.9em;
      color: var(--color-text-light);
  }
  
  .steps-list {
      list-style-type: decimal;
  }
  
  .single-step {
      margin-left: 5px;
  }
  
  .recipe-notes {
      margin-top: 25px;
      padding-top: 15px;
      border-top: 1px dashed #eee;
  }
  .recipe-notes h4 {
      color: var(--color-secondary);
       border-bottom-style: dashed;
       border-color: #ddd;
  }
  .recipe-notes p {
      font-style: italic;
      font-size: 0.95em;
       color: var(--color-text-light);
  }
  
  </style>