// (Contenu identique à la réponse précédente)
<template>
  <div class="day-card" :data-day="day.dayOfWeek" :class="{ 'current-day': isCurrentDay }" :style="dayCardStyle">
    <h2>{{ day.name }}</h2>
    <p class="activity">
        <span class="emoji">{{ day.activityEmoji || '✨' }}</span>Activité : {{ day.activity }}
    </p>
    <ul>
      <li v-for="meal in day.meals" :key="meal.id" class="meal-item" @click="emitShowRecipe(meal.id)">
        <strong :class="mealTypeClass(meal.type)">
            <span class="emoji">{{ meal.emoji || '🍴' }}</span>{{ mealTypeLabel(meal.type) }}:
        </strong>
        <span class="meal-description">{{ meal.name }}</span>
        <span v-if="meal.isPortable" class="info-tag portable-info"><span class="emoji">🎒</span>Portable</span>
        <span v-if="meal.isOptional" class="info-tag optional-info"><span class="emoji">🤔</span>Optionnel</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps({ day: { type: Object, required: true } });
const emit = defineEmits(['show-recipe']);
const isCurrentDay = computed(() => new Date().getDay() === props.day.dayOfWeek);
const emitShowRecipe = (recipeId) => emit('show-recipe', recipeId);
const mealTypeClass = (type) => `meal-${type}`;
const mealTypeLabel = (type) => { const labels={ breakfast: 'Petit Déjeuner', lunch: 'Déjeuner', snack: 'Collation', dinner: 'Dîner', 'evening-snack': 'Collation Soirée' }; return labels[type]||'Repas'; };
const dayColors = { 1: '#e74c3c', 2: '#f39c12', 3: '#f1c40f', 4: '#2ecc71', 5: '#3498db', 6: '#9b59b6', 0: '#34495e' };
const dayCardStyle = computed(() => ({ borderTopColor: dayColors[props.day.dayOfWeek] || '#ccc' }));
</script>

<style scoped>
.day-card {
    background-color: var(--color-card-bg); border: 1px solid var(--color-border);
    border-top: 5px solid; border-radius: 15px; padding: 25px;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out;
    display: flex; flex-direction: column; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
.day-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
    border-color: var(--color-primary);
}
.day-card.current-day { 
    background-color: #f7feff; border: 2px solid var(--color-primary); border-top-width: 5px;
    box-shadow: 0 8px 25px rgba(26, 188, 156, 0.2);
}
.day-card h2 { color: var(--color-secondary); margin-bottom: 8px; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 1.4em; border-bottom: none; padding-bottom: 5px; }
.day-card .activity { font-size: 0.95em; color: var(--color-text-light); margin-bottom: 20px; font-style: italic; border-bottom: 1px dashed #eee; padding-bottom: 15px; }
.day-card .activity .emoji { margin-right: 5px; font-size: 1.1em; }
.day-card ul { list-style: none; padding: 0; flex-grow: 1; display: flex; flex-direction: column; }
.day-card li.meal-item { margin-bottom: 15px; padding: 10px; border: 1px solid transparent; border-radius: 8px; position: relative; cursor: pointer; transition: background-color 0.2s ease, border-color 0.2s ease; }
.day-card li.meal-item:hover { background-color: #f9f9f9; border-color: #eee; }
.day-card li.meal-item:last-child { margin-bottom: 0; }
.day-card li strong { display: block; margin-bottom: 5px; font-weight: 700; font-size: 1.1em; pointer-events: none; font-family: 'Poppins', sans-serif; }
.day-card li strong .emoji { margin-right: 8px; font-size: 1.2em; vertical-align: -2px;}
.day-card li .meal-description { pointer-events: none; font-size: 1em; color: var(--color-text); }
.meal-breakfast { color: var(--meal-breakfast); } .meal-lunch { color: var(--meal-lunch); } .meal-snack { color: var(--meal-snack); } .meal-dinner { color: var(--meal-dinner); } .meal-evening-snack { color: var(--meal-evening-snack); }
.info-tag { font-size: 0.8em; font-weight: bold; margin-left: 8px; padding: 3px 8px; border-radius: 50px; display: inline-block; vertical-align: middle; pointer-events: none; border: 1px solid; }
.portable-info { background-color: #e8f8f5; color: var(--color-primary); border-color: #a3e4d7; }
.optional-info { background-color: #f4f6f7; color: #7f8c8d; border-color: #e5e7e9; }
.info-tag .emoji { margin-right: 3px; font-size: 1em; }
</style>