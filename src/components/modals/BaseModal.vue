<template>
  <Teleport to="body">
    <transition name="modal-fade">
      <div
        v-if="localIsOpen"
        class="modal-overlay active"
        @click.self="close"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="ariaLabelledby"
        ref="modalOverlayRef"
      >
        <div class="modal-content" role="document">
          <button @click="close" class="close-button" aria-label="Fermer la fenêtre modale">×</button>
          <h3 v-if="title" v-html="title" :id="ariaLabelledby"></h3>
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch, computed, nextTick } from 'vue';

const props = defineProps({
  isOpen: { type: Boolean, required: true },
  title: { type: String, default: '' },
  modalId: { type: String, required: true }
});

const emit = defineEmits(['close']);
const localIsOpen = ref(props.isOpen);
const modalOverlayRef = ref(null);

const ariaLabelledby = computed(() => `modal-title-${props.modalId}`);

watch(() => props.isOpen, (newValue) => {
  localIsOpen.value = newValue;
  if (newValue) {
    nextTick(() => {
      modalOverlayRef.value?.querySelector('button.close-button')?.focus();
    });
  } 
});

const close = () => { emit('close'); };
</script>


<style scoped>
.modal-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex; justify-content: center; align-items: center;
    z-index: 1000; opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    padding: 20px;
}
.modal-content {
    background-color: #fff; padding: 30px 40px; border-radius: 18px;
    max-width: 650px; width: 100%; max-height: 85vh;
    overflow-y: auto; position: relative;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.modal-content h3 { margin-top: 0; margin-bottom: 25px; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 1.5em; border-bottom-width: 2px; border-bottom-style: solid; padding-bottom: 12px; text-align: center; }
.modal-content h3 .emoji { margin-right: 12px; }

.close-button {
    position: absolute; top: 15px; right: 20px;
    background: none; border: none; font-size: 2.4em;
    color: #bbb; cursor: pointer; line-height: 1;
    transition: color 0.2s ease, transform 0.2s ease;
    padding: 0; 
    border-radius: 50%; 
    width: 40px; 
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.close-button:hover {
    color: #e74c3c;
    transform: rotate(90deg) scale(1.1);
}

.close-button:focus {
    outline: none;
}

/* Transition */
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.modal-fade-enter-active .modal-content, .modal-fade-leave-active .modal-content { transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
.modal-fade-enter-from .modal-content, .modal-fade-leave-to .modal-content { transform: scale(0.9); }

:global(#recipe-modal-overlay) .modal-body :deep(h4) { color: var(--color-accent); }
:global(#shopping-list-modal-overlay) .modal-body h4 { color: var(--color-primary); border-bottom-style: solid; border-color: #e0f2f1;}
:global(#prep-list-modal-overlay) .modal-body h4 { color: var(--color-prep); border-bottom-style: dashed; border-color: #fdebd0;}
:global(#shopping-list-modal-overlay) .modal-body ul { list-style: none; padding-left: 10px; columns: 2; column-gap: 30px; }
:global(#shopping-list-modal-overlay) .modal-body li { margin-bottom: 8px; font-size: 0.95em; }
:global(#shopping-list-modal-overlay) .modal-body li strong { color: var(--color-text-light); font-weight: 400; margin-left: 5px; }
@media (max-width: 768px) { :global(#shopping-list-modal-overlay) .modal-body ul { columns: 1; } }
:global(#prep-list-modal-overlay) .modal-body ul { list-style: '🍳 '; padding-left: 25px; }
:global(#prep-list-modal-overlay) .modal-body li { margin-bottom: 10px; font-size: 1em; }
:global(#prep-list-modal-overlay) .modal-body li strong { color: var(--color-text); font-weight: 600; }
:global(#prep-list-modal-overlay) .modal-body .prep-note { font-size: 0.9em; color: var(--color-text-light); margin-top: 20px; text-align: center; font-style: italic; }
@media (max-width: 768px) { :global(#prep-list-modal-overlay) .modal-body ul { list-style-position: outside; } }
</style>