<template>
    <div class="shopping-list-content">
      <div v-for="categoryData in shoppingList" :key="categoryData.category" class="list-category">
        <h4>
          <span v-if="categoryData.emoji" class="emoji">{{ categoryData.emoji }}</span>
          {{ categoryData.category }}
        </h4>
        <ul class="item-list">
          <li v-for="item in categoryData.items" :key="item.id">
            <!-- Input Checkbox (lié à un état futur si on rend interactif) -->
            <input type="checkbox" :id="item.id" :checked="item.checked" @change="toggleItem(item.id)">
            <label :for="item.id">
              {{ item.text }}
              <strong v-if="item.quantity">({{ item.quantity }})</strong>
            </label>
          </li>
        </ul>
      </div>
      <p class="list-note" v-html="shoppingNote"></p>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref, watch } from 'vue';
  
  const props = defineProps({
    listData: {
      type: Array,
      required: true
    },
    note: {
        type: String,
        default: ''
    }
  });
  
  const shoppingNote = ref(props.note);
  
  watch(() => props.listData, (newList) => {
      shoppingList.value = newList;
  }, { deep: true }); 
  
  const toggleItem = (itemId) => {
      console.log("Toggle item:", itemId); 
      const category = shoppingList.value.find(cat => cat.items.some(it => it.id === itemId));
      if(category) {
          const item = category.items.find(it => it.id === itemId);
          if (item) {
              item.checked = !item.checked; 
          }
      }
  };
  
  </script>
  
  <style scoped>
  /* Styles spécifiques à la liste de courses */
  h4 {
    font-family: 'Poppins', sans-serif;
    color: var(--color-primary); /* Vert */
    margin: 20px 0 10px;
    font-weight: 600;
    border-bottom: 1px solid #e0f2f1;
    padding-bottom: 8px;
  }
  h4:first-of-type {
    margin-top: 0;
  }
  h4 .emoji {
      margin-right: 8px;
  }
  
  .item-list {
    list-style: none;
    padding-left: 5px; /* Léger retrait */
    margin-bottom: 15px;
    columns: 2;
    column-gap: 30px;
  }
  
  .item-list li {
    margin-bottom: 10px;
    font-size: 0.95em;
    display: flex; /* Pour aligner checkbox et label */
    align-items: flex-start; /* Aligner au début si texte long */
  }
  
  .item-list input[type="checkbox"] {
      margin-right: 10px;
      margin-top: 4px; /* Ajustement vertical */
      cursor: pointer;
      flex-shrink: 0; /* Empêche la checkbox de rétrécir */
  }
  
  .item-list label {
      cursor: pointer;
      flex-grow: 1; /* Le label prend l'espace restant */
  }
  
  .item-list label strong { /* Quantité */
    color: var(--color-text-light);
    font-weight: 400;
    margin-left: 5px;
    font-size: 0.9em;
  }
  
  .list-note {
    font-size: 0.85em;
    margin-top: 20px;
    text-align: center;
    color: var(--color-text-light);
    font-style: italic;
    width: 100%; /* Assurer qu'il prend toute la largeur */
    columns: 1; /* Forcer une seule colonne pour la note */
  }
  
  @media (max-width: 600px) { /* Une colonne sur écrans plus petits */
    .item-list {
      columns: 1;
    }
  }
  </style>