<template>
  <div class="weekly-menu-container">
    <!-- La vue principale est maintenant dans MenuView -->
    <MenuView
      @show-recipe-modal="showRecipeModal"
      @show-list-modal="showListModal"
      @show-prep-modal="showPrepModal"
    />
  </div> <!-- Fin weekly-menu-container -->

  <!-- Les Modals restent ici pour être au-dessus de tout -->
  <BaseModal
    :is-open="isRecipeModalOpen"
    :title="currentRecipe?.title"
    :content-html="currentRecipe?.content"
    @close="closeRecipeModal"
    id="recipe-modal-overlay"
  />

  <BaseModal
    :is-open="isListModalOpen"    
    title="<span class='emoji'>🛒</span> Liste de Courses (1 pers. / Semaine)"
    :content-html="shoppingListContentHTML"
    @close="closeListModal"
    id="shopping-list-modal-overlay"
  />

  <BaseModal
    :is-open="isPrepModalOpen"
    title="<span class='emoji'>🧑‍🍳</span> Préparation à l'Avance"
    :content-html="prepListContentHTML"
    @close="closePrepModal"
    id="prep-list-modal-overlay"
  />
</template>

<script setup>
import { ref } from 'vue';
import MenuView from './views/MenuView.vue';       // Composant Vue pour la page principale
import BaseModal from './components/BaseModal.vue'; // Composant Modal générique
import { useModal } from './composables/useModal.js'; // Composable pour la logique modale

// Importation des données statiques
import { recipes as recipesImport } from './data/recipes.js';
import { shoppingListHTML as shoppingListImport } from './data/shoppingListData.js';
import { prepListHTML as prepListImport } from './data/prepListData.js';

// Références pour les données
const allRecipes = ref(recipesImport);
const shoppingListContentHTML = ref(shoppingListImport);
const prepListContentHTML = ref(prepListImport);

// Utilisation du composable useModal pour chaque modal
const { isOpen: isRecipeModalOpen, open: openRecipeInternal, close: closeRecipeModal } = useModal();
const { isOpen: isListModalOpen, open: showListModal, close: closeListModal } = useModal();
const { isOpen: isPrepModalOpen, open: showPrepModal, close: closePrepModal } = useModal();

// Référence pour stocker la recette actuellement sélectionnée
const currentRecipe = ref(null);

// Fonction appelée lorsque MenuView émet 'show-recipe-modal'
const showRecipeModal = (recipeId) => {
  // Trouve la recette correspondante ou utilise la recette par défaut
  currentRecipe.value = allRecipes.value[recipeId] || allRecipes.value['default'];
  // Ouvre la modal recette via la fonction retournée par useModal
  openRecipeInternal();
};

// Note: showListModal et showPrepModal sont directement les fonctions 'open' retournées par useModal
// car elles n'ont pas besoin de charger de données spécifiques avant ouverture.

</script>

<style>
/* Styles globaux pour le conteneur principal (peuvent aussi être dans main.css) */
.weekly-menu-container {
  max-width: 95%; /* Utilise presque toute la largeur */
  margin: 30px auto;
  padding: 30px;
  background-color: var(--color-card-bg);
  border-radius: 25px;
  box-shadow: 0 12px 35px rgba(40, 100, 100, 0.1);
}

/* Styles spécifiques aux titres des modals via leur ID */
#recipe-modal-overlay .modal-content h3 { color: var(--color-secondary); border-bottom-color: var(--color-primary); }
#shopping-list-modal-overlay .modal-content h3 { color: var(--color-primary); border-bottom-color: var(--color-secondary); }
#prep-list-modal-overlay .modal-content h3 { color: var(--color-accent); border-bottom-color: var(--color-prep); }

/* Styles responsives globaux si nécessaire */
@media (max-width: 768px) {
  .weekly-menu-container {
    padding: 20px 15px;
    margin: 15px auto;
  }
}
</style>