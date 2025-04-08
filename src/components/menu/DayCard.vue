<script setup>
import { computed } from 'vue';

const emit = defineEmits(['show-recipe']);
const props = defineProps({
  dayData: {
    type: Object, 
    required: true
  }
});

const handleMealClick = (mealId) => {
  if (mealId) {
    emit('show-recipe', mealId);
  } else {
    console.warn('Tentative d\'affichage de recette pour un repas sans ID.');
    emit('show-recipe', 'default');
  }
};
const getMealTypeName = (type) => {
  const types = {
    'breakfast': "P'tit Déj",
    'lunch': "Déjeuner",
    'snack': "Collation",
    'dinner': "Dîner",
    'evening-snack': "Soirée"
  };
  return types[type] || type;
}
const sortedMeals = computed(() => {
  const order = ['breakfast', 'lunch', 'snack', 'dinner', 'evening-snack'];
  return [...props.dayData.meals].sort((a, b) => {
    return order.indexOf(a.type) - order.indexOf(b.type);
  });
});

const dayHeaderColors = [
  '#8e24aa',
  '#e53935',
  '#fb8c00',
  '#fdd835',
  '#43a047',
  '#1e88e5',
  '#3949ab',
];
const headerBackgroundColor = computed(() => {
  return dayHeaderColors[props.dayData.dayOfWeek] || '#bdbdbd';
});

const isToday = computed(() => {
  const today = new Date().getDay();
  return props.dayData.dayOfWeek === today;
});
</script>

<template>
    <div class="day-card" :class="{ 'today-highlight': isToday }">
		<h2 :style="{ backgroundColor: headerBackgroundColor }">
		{{ dayData.name }}
		</h2>
  
		<p class="activity">
			<strong>Activité:</strong> {{ dayData.activityEmoji }} {{ dayData.activity }}
		</p>
	
		<h3>Repas:</h3>
		<ul>
			<li
				v-for="meal in sortedMeals"
				:key="meal.id"
				class="meal-item clickable-meal"
				@click="handleMealClick(meal.id)"
				:title="`Afficher la recette pour : ${meal.name}`"
			>
				<span class="meal-emoji">{{ meal.emoji }}</span>
				<div class="meal-details">
					<span class="meal-name">{{ meal.name }}</span>
					<span class="meal-type"> ({{ getMealTypeName(meal.type) }})</span>
				</div>
				<div class="meal-tags">
					<span v-if="meal.isPortable" class="tag portable" title="À emporter">🎒</span>
					<span v-if="meal.isOptional" class="tag optional" title="Optionnel">🌙</span>
				</div>
			</li>
		</ul>
    </div>
</template>

<style scoped>

.day-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;
}

.day-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.day-card h2 {
  text-align: center;
  color: white;
  padding: 0.8rem 1rem;
  margin: 0 -1.5rem 1.2rem -1.5rem;
  font-size: 1.4em;
  font-weight: 600;
}

.day-card.today-highlight {
  border-color: #4CAF50;
  border-width: 1px;
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.25);
}

.activity {
  font-style: italic;
  color: #555;
  margin-bottom: 1rem;
  text-align: center;
  background-color: #f8f9fa;
  padding: 0.5rem;
  border-radius: 4px;
}

.activity strong {
    font-style: normal;
}

h3 {
    color: #2ecc71;
    margin-bottom: 0.8rem;
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.6rem; 
  padding: 0.5rem 0;
  border-bottom: 1px dashed #eee;
}
li:last-child {
    border-bottom: none;
}

.emoji {
  font-size: 1.4em;
  line-height: 1;
}

.meal-name {
    flex-grow: 1; 
}

.meal-type {
  font-size: 0.8em;
  color: #888;
  font-style: italic;
}

.tag {
  font-size: 1em;
  margin-left: 0.3rem;
  cursor: help; 
}

.portable { 
	background-color: #e0f2fe; 
	color: #0c4a6e; 
}

.optional { 
	background-color: #fef9c3; 
	color: #713f12; 
}
.clickable-meal {
  cursor: pointer; 
  transition: background-color 0.15s ease-in-out;
}

.clickable-meal:hover {
  background-color: #eef2ff; 
}

.day-card h3 { margin-top: 1rem; margin-bottom: 0.8rem; color: #343a40; font-size: 1.2em; border-bottom: 1px solid #eee; padding-bottom: 0.3rem; }
.meal-list { list-style: none; padding: 0; margin: 0; }
.meal-item { display: flex; align-items: center; padding: 0.7rem 0; border-bottom: 1px dashed #e9ecef; }
.meal-item:last-child { border-bottom: none; }
.meal-emoji { font-size: 1.5rem; margin-right: 0.8rem; line-height: 1; }
.meal-details { flex-grow: 1; display: flex; flex-direction: column; }
.meal-tags { margin-left: 0.5rem; display: flex; gap: 0.3rem; }

</style>