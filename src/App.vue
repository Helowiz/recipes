<template>
  <div class="weekly-menu-container">
    <MenuView
      @show-recipe-modal="showRecipeModal"
      @show-list-modal="showListModal"
      @show-prep-modal="showPrepModal"
    />
  </div>

  <!-- Modal Recette : Utilise le slot par défaut de BaseModal -->
  <BaseModal
    :is-open="isRecipeModalOpen"
    :title="currentRecipe?.title"
    @close="closeRecipeModal"
    modal-id="recipe"
    id="recipe-modal-overlay"
  >
    <!-- Injecte le composant RecipeModalContent dans le slot -->
    <RecipeModalContent :recipe="currentRecipe" />
  </BaseModal>

  <!-- Modal Liste Courses : Utilise TOUJOURS contentHtml (pour l'instant) -->
   <!-- NOTE: Pour une cohérence parfaite, il faudrait aussi créer des composants pour ces contenus -->
  <BaseModal
    :is-open="isListModalOpen"
    title='<span class="emoji">🛒</span> Liste de Courses (1 pers. / Semaine)'
    :content-html="shoppingListContentHTML"
    @close="closeListModal"
    modal-id="shopping-list"
    id="shopping-list-modal-overlay"
  />

   <!-- Modal Préparation : Utilise TOUJOURS contentHtml (pour l'instant) -->
   <BaseModal
    :is-open="isPrepModalOpen"
    title="<span class='emoji'>🧑‍🍳</span> Préparation à l'Avance"
    :content-html="prepListContentHTML"
    @close="closePrepModal"
    modal-id="prep-list"
    id="prep-list-modal-overlay"
  />
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import MenuView from './views/MenuView.vue';
import BaseModal from './components/modals/BaseModal.vue';
import RecipeModalContent from './components/modals/RecipeModalContent.vue'; // <-- Importer le nouveau composant
import { useModal } from './composables/useModal.js';
import { recipes as recipesImport } from './data/recipes.js';
import { shoppingListHTML as shoppingListImport } from './data/shoppingListData.js';
import { prepListHTML as prepListImport } from './data/prepListData.js';

const allRecipes = ref(recipesImport);
const shoppingListContentHTML = ref(shoppingListImport); // Gardé pour l'instant
const prepListContentHTML = ref(prepListImport);       // Gardé pour l'instant

// Modals states and controls
const { isOpen: isRecipeModalOpen, open: openRecipeInternal, close: closeRecipeModal } = useModal();
const { isOpen: isListModalOpen, open: showListModal, close: closeListModal } = useModal();
const { isOpen: isPrepModalOpen, open: showPrepModal, close: closePrepModal } = useModal();

const currentRecipe = ref(null);

const showRecipeModal = (recipeId) => {
  currentRecipe.value = allRecipes.value[recipeId] || allRecipes.value['default'];
  openRecipeInternal();
};

// --- Gestion centralisée du scroll ---
const isAnyModalOpen = computed(() => {
    return isRecipeModalOpen.value || isListModalOpen.value || isPrepModalOpen.value;
});

watch(isAnyModalOpen, (newValue) => {
    if (typeof document !== 'undefined') {
        if (newValue) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }
});

// --- Gestion Touche Échap ---
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    if (isPrepModalOpen.value) {
      closePrepModal();
    } else if (isListModalOpen.value) {
      closeListModal();
    } else if (isRecipeModalOpen.value) {
      closeRecipeModal();
    }
  }
};

onMounted(() => { window.addEventListener('keydown', handleKeydown); });
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  if (typeof document !== 'undefined') {
    document.body.classList.remove('modal-open');
  }
});
</script>


<style>
/* Styles Globaux App (peut être dans main.css) */
.weekly-menu-container { max-width: 95%; margin: 30px auto; padding: 30px; background-color: var(--color-card-bg); border-radius: 25px; box-shadow: 0 12px 35px rgba(40, 100, 100, 0.1); }
@media (max-width: 768px) { .weekly-menu-container { padding: 20px 15px; margin: 15px auto; } }

/* Styles spécifiques aux titres des modals via leur ID */
/* Ces styles définissent la couleur du titre et de sa bordure */
#recipe-modal-overlay .modal-content h3 { color: var(--color-secondary); border-bottom-color: var(--color-primary); }
#shopping-list-modal-overlay .modal-content h3 { color: var(--color-primary); border-bottom-color: var(--color-secondary); }
#prep-list-modal-overlay .modal-content h3 { color: var(--color-accent); border-bottom-color: var(--color-prep); }
</style>