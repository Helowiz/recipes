// src/data/shoppingListData.js

export const shoppingListData = [
    {
        category: '🍎 Fruits & Légumes',
        emoji: '🍎', // Optionnel: pour le titre h4
        items: [
            { id: 'sl1', text: 'Pommes', quantity: '~4-5', checked: false },
            { id: 'sl2', text: 'Poires', quantity: '~3', checked: false },
            { id: 'sl3', text: 'Bananes', quantity: '~3-4', checked: false },
            { id: 'sl4', text: 'Oranges/Kiwis', quantity: '~2-3', checked: false },
            { id: 'sl5', text: 'Pommes de terre', quantity: '~1.5-2 kg', checked: false },
            { id: 'sl6', text: 'Carottes', quantity: '~1 kg', checked: false },
            { id: 'sl7', text: 'Oignons jaunes', quantity: 'Filet ~500g', checked: false },
            { id: 'sl8', text: 'Ail', quantity: '1 tête', checked: false },
            { id: 'sl9', text: 'Épinards frais', quantity: '2 sachets', checked: false },
            { id: 'sl10', text: 'Radis', quantity: '1 botte', checked: false },
            { id: 'sl11', text: 'Blettes', quantity: '1 botte', checked: false },
            { id: 'sl12', text: 'Laitue/Salade', quantity: '1', checked: false },
            { id: 'sl13', text: 'Champignons Paris', quantity: '250g', checked: false },
            { id: 'sl14', text: 'Concombre', quantity: '1', checked: false },
            { id: 'sl15', text: 'Citron', quantity: '2', checked: false },
            { id: 'sl16', text: 'Persil/Ciboulette', quantity: '1 botte', checked: false },
            { id: 'sl17', text: 'Avocat', quantity: '1', checked: false },
            { id: 'sl18', text: 'Option: Fraises...', quantity: null, checked: false },
        ]
    },
    {
        category: '🍞 Épicerie Sèche',
        emoji: '🍞',
        items: [
            { id: 'sl19', text: 'Flocons d\'avoine', quantity: 'Paquet 500g+', checked: false },
            { id: 'sl20', text: 'Riz complet', quantity: 'Paquet 500g+', checked: false },
            { id: 'sl21', text: 'Quinoa', quantity: 'Paquet 500g', checked: false },
            { id: 'sl22', text: 'Pâtes complètes', quantity: 'Paquet 500g', checked: false },
            { id: 'sl23', text: 'Semoule complète', quantity: 'Paquet 500g', checked: false },
            { id: 'sl24', text: 'Pain complet', quantity: '1 grand', checked: false },
            { id: 'sl25', text: 'Galettes de riz', quantity: '1 paquet', checked: false },
            { id: 'sl26', text: 'Galettes de sarrasin', quantity: '1 paquet', checked: false },
            { id: 'sl27', text: 'Wraps/Galettes blé', quantity: '1 paquet', checked: false },
            { id: 'sl28', text: 'Lentilles vertes sèches', quantity: 'Paquet 500g', checked: false },
            { id: 'sl29', text: 'Lentilles corail sèches', quantity: 'Paquet 500g', checked: false },
            { id: 'sl30', text: 'Pois chiches secs', quantity: 'Paquet 1kg', checked: false },
            { id: 'sl31', text: 'Haricots rouges secs', quantity: 'Paquet 500g', checked: false },
            { id: 'sl32', text: 'Haricots blancs secs', quantity: 'Paquet 500g', checked: false },
            { id: 'sl33', text: 'Graines de chia', quantity: 'Sachet', checked: false },
            { id: 'sl34', text: 'Graines de tournesol', quantity: 'Sachet', checked: false },
            { id: 'sl35', text: 'Graines de courge', quantity: 'Sachet', checked: false },
            { id: 'sl36', text: 'Amandes', quantity: 'Petit sachet ~50g', checked: false },
            { id: 'sl37', text: 'Chocolat noir >70%', quantity: '1 tablette', checked: false },
            { id: 'sl38', text: 'Option: Muesli/Granola', quantity: null, checked: false },
        ]
    },
    {
        category: '🥛 Crèmerie & Protéines',
        emoji: '🥛',
        items: [
            { id: 'sl39', text: 'Tofu Nature Ferme', quantity: '2 blocs ~400g', checked: false },
            { id: 'sl40', text: 'Œufs', quantity: 'Boîte 12', checked: false },
            { id: 'sl41', text: 'Yaourts nature', quantity: '~12 pots 125g', checked: false },
            { id: 'sl42', text: 'Fromage blanc', quantity: 'Pot 500g', checked: false },
            { id: 'sl43', text: 'Lait UHT', quantity: '1 litre', checked: false },
            { id: 'sl44', text: 'Option: Fromage frais, Beurre', quantity: null, checked: false },
        ]
    },
    {
        category: '🥫 Conserves & Bocaux',
        emoji: '🥫',
        items: [
            { id: 'sl45', text: 'Tomates concassées/Coulis', quantity: '3 x 400g', checked: false },
            { id: 'sl46', text: 'Maïs doux', quantity: '1 petite boîte', checked: false },
            { id: 'sl47', text: 'Compote pommes s/s', quantity: 'Pack 4 pots', checked: false },
            { id: 'sl48', text: 'Option: Lait coco, Tahini, Beurre cacahuète, Purée amande, Miel, Moutarde, Sauce Soja', quantity: null, checked: false },
        ]
    }
];

export const shoppingListNote = '<em>Vérifiez vos placards pour huiles, vinaigres & épices !</em>';