import { ref } from 'vue';

/**
 * Composable pour gérer l'état d'ouverture/fermeture d'une modal.
 * @param {boolean} initialState - État initial de la modal (ouverte ou fermée).
 * @returns {{ isOpen: import('vue').Ref<boolean>, open: () => void, close: () => void }}
 */
export function useModal(initialState = false) {
  // ref pour l'état d'ouverture (réactif)
  const isOpen = ref(initialState);

  // Fonction pour ouvrir la modal
  const open = () => {
    isOpen.value = true;
    // Optionnel: bloquer le scroll du body quand la modal est ouverte
    // document.body.style.overflow = 'hidden';
  };

  // Fonction pour fermer la modal
  const close = () => {
    isOpen.value = false;
    // Optionnel: réactiver le scroll du body
    // document.body.style.overflow = '';
  };

  // Retourne l'état et les fonctions de contrôle
  return {
    isOpen,
    open,
    close,
  };
}