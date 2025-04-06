// Données structurées pour le menu hebdomadaire
export const weeklyMenu = [
    {
        id: 1, name: 'Lundi', dayOfWeek: 1, activity: 'Rameur', activityEmoji: '🚣‍♀️',
        meals: [
            { id: 'porridge', type: 'breakfast', emoji: '🥣', name: 'Porridge Avoine/Fruit/Graines' },
            { id: 'quinoa_lentil_salad', type: 'lunch', emoji: '🥗', name: 'Salade Quinoa/Lentilles/Légumes' },
            { id: 'snack_yogurt_fruit_seeds', type: 'snack', emoji: '🍎', name: 'Yaourt/Fruit/Graines' },
            { id: 'dinner_tofu_potato_spinach', type: 'dinner', emoji: '🍽️', name: 'Tofu Poêlé/PDT Bouillies/Épinards' },
            { id: 'snack_evening_ricecake', type: 'evening-snack', emoji: '🌙', name: 'Galettes riz/Purée Oléagineux', isOptional: true },
        ]
    },
    {
        id: 2, name: 'Mardi', dayOfWeek: 2, activity: 'Repos Actif', activityEmoji: '🚴‍♀️',
        meals: [
            { id: 'overnight_oats_1', type: 'breakfast', emoji: '☀️', name: 'Overnight Oats' },
            { id: 'lunch_quinoa_chickpea_salad', type: 'lunch', emoji: '🍱', name: 'Salade Quinoa/Pois Chiches', isPortable: true },
            { id: 'snack_fromageblanc_compote', type: 'snack', emoji: '🥛', name: 'Fromage Blanc/Compote/Graines' },
            { id: 'dinner_pasta_chickpeas', type: 'dinner', emoji: '🍝', name: 'Pâtes Complètes/Pois Chiches' },
        ]
    },
    {
        id: 3, name: 'Mercredi', dayOfWeek: 3, activity: 'Repos Actif', activityEmoji: '🚶‍♀️',
        meals: [
            { id: 'breakfast_yogurt_muesli', type: 'breakfast', emoji: '🍓', name: 'Yaourt/Fruit/Muesli/PB' },
            { id: 'lunch_wrap_hummus', type: 'lunch', emoji: '🌯', name: 'Wrap Houmous/Légumes', isPortable: true },
            { id: 'snack_fruit_galette', type: 'snack', emoji: '🍊', name: 'Fruit/Galettes Sarrasin' },
            { id: 'dinner_wok_tofu', type: 'dinner', emoji: '🥡', name: 'Wok Tofu/Riz Complet' },
        ]
    },
     {
        id: 4, name: 'Jeudi', dayOfWeek: 4, activity: 'Aviron', activityEmoji: '🚣‍♂️',
        meals: [
            { id: 'breakfast_yogurt_granola', type: 'breakfast', emoji: '🥝', name: 'Yaourt/Fruit/Granola' },
            { id: 'lunch_potato_egg_chickpea_salad', type: 'lunch', emoji: '🥔', name: 'Salade PDT/Œufs/Pois Chiches' },
            { id: 'snack_bread_pb_fruit', type: 'snack', emoji: '🥜', name: 'Pain Complet/PB/Fruit' },
            { id: 'dinner_cold_bowl', type: 'dinner', emoji: '🥣', name: 'Bowl Froid Quinoa/Lentilles' },
            { id: 'snack_evening_fromageblanc', type: 'evening-snack', emoji: '🥛', name: 'Fromage Blanc/Graines', isOptional: true },
        ]
    },
     {
        id: 5, name: 'Vendredi', dayOfWeek: 5, activity: 'Course à Pied', activityEmoji: '🏃‍♀️',
         meals: [
            { id: 'overnight_oats_2', type: 'breakfast', emoji: '☀️', name: 'Overnight Oats' },
            { id: 'lunch_leftover_bowl_or_bean_salad', type: 'lunch', emoji: '🍱', name: 'Restes Bowl / Salade Haricots', isPortable: true },
            { id: 'snack_banana_almonds_choco', type: 'snack', emoji: '🍌', name: 'Banane/Amandes/Choco' },
            { id: 'dinner_curry_chickpea', type: 'dinner', emoji: '🍛', name: 'Curry Pois Chiches/Riz' },
            { id: 'snack_evening_yogurt', type: 'evening-snack', emoji: '🥄', name: 'Yaourt', isOptional: true },
        ]
    },
    {
        id: 6, name: 'Samedi', dayOfWeek: 6, activity: 'Repos Actif', activityEmoji: '🚴‍♂️',
        meals: [
            { id: 'breakfast_egg_avocado_toast', type: 'breakfast', emoji: '🍳', name: 'Œuf Poché/Avocat Toast' },
            { id: 'lunch_semolina_bowl', type: 'lunch', emoji: '🍲', name: 'Bowl Semoule/Pois Chiches' },
            { id: 'snack_fruit_nutbutter', type: 'snack', emoji: '🍏', name: 'Fruit/Purée Oléagineux' },
            { id: 'dinner_scrambledtofu_potato_chard', type: 'dinner', emoji: '🍳', name: 'Tofu Brouillé/PDT/Blettes' },
            { id: 'snack_evening_yogurt_fb', type: 'evening-snack', emoji: '🌙', name: 'Yaourt/Fromage Blanc', isOptional: true },
        ]
    },
    {
        id: 0, name: 'Dimanche', dayOfWeek: 0, activity: 'Course à Pied', activityEmoji: '🏃‍♂️',
         meals: [
             { id: 'breakfast_omelette', type: 'breakfast', emoji: '🍳', name: 'Omelette Champignons' },
             { id: 'lunch_chili_sin_carne', type: 'lunch', emoji: '🌶️', name: 'Chili Sin Carne/Riz' },
             { id: 'snack_yogurt_fruit', type: 'snack', emoji: '🍇', name: 'Yaourt/Fruit' },
             { id: 'dinner_soup_lentil', type: 'dinner', emoji: '🥣', name: 'Soupe Légumes/Lentilles' },
             { id: 'snack_evening_compote_fruit', type: 'evening-snack', emoji: '🌙', name: 'Compote/Fruit', isOptional: true },
        ]
    }
];