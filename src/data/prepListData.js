// src/data/prepListData.js

export const prepListData = [
    {
        category: '🍚 Céréales',
        emoji: '🍚',
        tasks: [
            { id: 'pl1', text: 'Cuire le <strong>Quinoa Bio</strong>', details: '(Quantité semaine: ~200g sec)', checked: false },
            { id: 'pl2', text: 'Cuire le <strong>Riz Complet Bio</strong>', details: '(Quantité semaine: ~120g sec, ou plus si batch cook intense)', checked: false },
            { id: 'pl3', text: 'Cuire les <strong>Pommes de Terre Bio</strong>', details: '(une partie peut être cuite et conservée)', checked: false },
        ]
    },
    {
        category: '🌱 Légumineuses',
        emoji: '🌱',
        note: '(Après trempage si besoin)',
        tasks: [
            { id: 'pl4', text: 'Cuire les <strong>Pois Chiches Bio</strong>', details: '(Quantité semaine: ~500g sec)', checked: false },
            { id: 'pl5', text: 'Cuire les <strong>Lentilles Vertes Bio</strong>', details: '(Quantité semaine: ~140g sec)', checked: false },
            { id: 'pl6', text: 'Cuire les <strong>Haricots Rouges Bio</strong>', details: '(Quantité semaine: ~60g sec)', checked: false },
            { id: 'pl7', text: 'Cuire les <strong>Haricots Blancs Bio</strong>', details: '(Quantité semaine: ~80g sec)', checked: false },
        ]
    },
    {
        category: '🥣 Autres Préparations',
        emoji: '🥣',
        tasks: [
            { id: 'pl8', text: 'Cuire <strong>2-3 Œufs Durs Bio</strong>', details: null, checked: false },
            { id: 'pl9', text: 'Préparer le <strong>Houmous Maison</strong>', details: '(si utilisé et fait maison)', checked: false },
            { id: 'pl10', text: 'Laver et essorer les <strong>Feuilles de Salade</strong>', details: '(conserver avec papier absorbant)', checked: false },
            { id: 'pl11', text: '<em>Optionnel:</em> Laver et couper certains légumes', details: '(carottes, concombre, radis...)', checked: false },
            { id: 'pl12', text: '<em>Optionnel:</em> Préparer les <strong>Overnight Oats</strong>', details: 'la veille au soir', checked: false },
        ]
    }
];

export const prepListNote = 'Conserver toutes les préparations cuites au réfrigérateur dans des boîtes hermétiques (3-4 jours max).';