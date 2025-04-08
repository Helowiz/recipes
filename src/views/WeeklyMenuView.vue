<script setup>
import { ref, computed } from 'vue';

import { weeklyMenu as rawData } from '@/data/weeklyMenuData.js';
import { recipes } from '@/data/recipes.js';
import { shoppingListData as initialShoppingList } from '@/data/shoppingListData.js';

import DayCard from '@/components/menu/DayCard.vue';
import RecipeModal from '@/components/RecipeModal.vue';
import ShoppingListModal from '@/components/ShoppingListModal.vue';

const sortedWeeklyMenu = computed(() => {
  return [...rawData].sort((dayA, dayB) => {
    const dayOfWeekA = dayA.dayOfWeek === 0 ? 7 : dayA.dayOfWeek;
    const dayOfWeekB = dayB.dayOfWeek === 0 ? 7 : dayB.dayOfWeek;

    return dayOfWeekA - dayOfWeekB;
  });
});

const selectedRecipeId = ref(null);
const shoppingList = ref([...initialShoppingList]);
const isShoppingListVisible = ref(false);

const selectedRecipe = computed(() => {
  if (!selectedRecipeId.value) {
    return null;
  }
  return recipes[selectedRecipeId.value] || recipes['default'];
});

const handleShowRecipe = (mealId) => {
  selectedRecipeId.value = mealId;
};

const closeRecipeModal = () => {
  selectedRecipeId.value = null;
};

const openShoppingList = () => {
  isShoppingListVisible.value = true;
};

const closeShoppingList = () => {
  isShoppingListVisible.value = false;
};

const updateShoppingItemChecked = (itemId, isChecked) => {
  const itemIndex = shoppingList.value.findIndex(item => item.id === itemId);
  if (itemIndex !== -1) {
    shoppingList.value[itemIndex].checked = isChecked;
  }
};

</script>

<template>
    <div class="weekly-menu-container">
        <div class="main-header">
            <h1 class="main-title">📅 Menu Hebdomadaire</h1>
            <button @click="openShoppingList" class="shopping-list-button">
                🛒 Voir la Liste de Courses
            </button>
        </div>
        <div class="days-grid">
        <DayCard
            v-for="day in sortedWeeklyMenu"
            :key="day.id"
            :day-data="day"
            @show-recipe="handleShowRecipe"
        />
        <RecipeModal
            v-if="selectedRecipe"
            :recipe="selectedRecipe"
            @close="closeRecipeModal"
        />
        <ShoppingListModal
            v-if="isShoppingListVisible"
            :shopping-list="shoppingList"
            @close="closeShoppingList"
            @update-item-checked="updateShoppingItemChecked"
        />
        </div>
    </div>
</template>

<style scoped>
.weekly-menu-container {
  max-width: 1200px; 
  margin: 1rem auto; 
  padding: 0 1rem;
}

.main-title {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem; 
}

@media (max-width: 768px) {
  .days-grid {
    grid-template-columns: 1fr; 
  }
}
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap; 
    gap: 1rem;
}

.main-title {
  margin-bottom: 0; 
  flex-grow: 1;
  text-align: center; 
}
@media (min-width: 600px) {
    .main-title {
        text-align: left; 
    }
}

.shopping-list-button {
    padding: 0.8rem 1.2rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: white;
    background-color: #1abc9c;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
    white-space: nowrap; 
}

.shopping-list-button:hover {
    background-color: #16a085; 
}
.shopping-list-button:active {
    transform: scale(0.98);
}
</style>