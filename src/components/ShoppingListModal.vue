<script setup>
import { computed } from 'vue';

const props = defineProps({
  shoppingList: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['close', 'update-item-checked']);

const closeModal = () => {
  emit('close');
};

const stopPropagation = (event) => {
  event.stopPropagation();
};

const toggleItemChecked = (itemId, isChecked) => {
    emit('update-item-checked', itemId, isChecked);
};

const groupedList = computed(() => {
  return props.shoppingList.reduce((groups, item) => {
    const category = item.category || 'Autres';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});
});

const sortedCategories = computed(() => {
    const categoryOrder = [
        'Fruits & Légumes',
        'Crèmerie & Protéines',
        'Épicerie Sèche',
        'Conserves & Bocaux',
        'Options Épicerie',
        'Options Crèmerie',
        'Autres'
    ];
    return Object.keys(groupedList.value).sort((a, b) => {
        const indexA = categoryOrder.indexOf(a);
        const indexB = categoryOrder.indexOf(b);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return a.localeCompare(b);
    });
});

</script>

<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content shopping-list-modal" @click="stopPropagation">
      <button class="close-button" @click="closeModal">×</button>
      <h2>🛒 Liste de Courses</h2>

      <div v-for="category in sortedCategories" :key="category" class="category-group">
        <h3>{{ category }}</h3>
        <ul>
          <li
            v-for="item in groupedList[category]"
            :key="item.id"
            class="list-item"
            :class="{ 'item-checked': item.checked, 'item-optional': item.isOptional }"
          >
            <label :for="item.id" class="item-label">
              <input
                type="checkbox"
                :id="item.id"
                :checked="item.checked"
                @change="toggleItemChecked(item.id, $event.target.checked)"
                class="item-checkbox"
              />
              <span class="item-name">{{ item.item }}</span>
              <span v-if="item.quantity" class="item-quantity"> ({{ item.quantity }})</span>
              <span v-if="item.isOptional" class="optional-tag" title="Optionnel">[Opt]</span>
            </label>
          </li>
        </ul>
      </div>

      <p v-if="Object.keys(groupedList).length === 0">La liste de courses est vide.</p>

    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.6); display: flex;
  justify-content: center; align-items: center; z-index: 1000; padding: 1rem;
}

.modal-content {
  background-color: white; padding: 1.5rem 2rem; border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); max-width: 600px; width: 95%;
  max-height: 90vh; overflow-y: auto; position: relative;
}

.close-button {
  position: absolute; top: 10px; right: 15px; background: none; border: none;
  font-size: 2rem; font-weight: bold; color: #aaa; cursor: pointer; line-height: 1;
}
.close-button:hover { color: #333; }

h2 {
  margin-top: 0; color: #16a085; 
  text-align: center; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.category-group {
  margin-bottom: 1.5rem;
}

.category-group h3 {
  color: #2980b9; 
  margin-bottom: 0.8rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #ecf0f1;
  font-size: 1.2em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  margin-bottom: 0.5rem;
  padding: 0.3rem 0;
}

.list-item.item-checked .item-label {
  text-decoration: line-through;
  color: #95a5a6;
}
.list-item.item-checked .item-label .item-quantity {
    color: #bdc3c7;
}

.list-item.item-optional .item-name {
    font-style: italic;
}
.optional-tag {
    font-size: 0.8em;
    font-weight: bold;
    color: #f39c12; 
    margin-left: 0.3rem;
    cursor: help;
}


.item-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.item-checkbox {
  margin-right: 0.8rem;
  width: 1.1em;
  height: 1.1em;
  cursor: pointer;
}

.item-name {
  flex-grow: 1;
  font-weight: 500;
}

.item-quantity {
  font-size: 0.9em;
  color: #7f8c8d; 
  margin-left: 0.5rem;
  white-space: nowrap; 
}


</style>