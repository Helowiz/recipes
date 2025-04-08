// src/data/recipes.js

export const recipes = {
    'porridge': {
        id: 'porridge',
        title: 'Porridge Avoine/Fruit/Graines',
        emoji: '🥣',
        mealType: 'breakfast',
        ingredients: [
            { item: 'Flocons d\'avoine Bio', quantity: 70, unit: 'g' },
            { item: 'Lait Bio ou Eau', quantity: 250, unit: 'ml', note: 'environ' },
            { item: 'Fruit de saison Bio', quantity: 1, unit: 'unité' },
            { item: 'Graines de chia Bio', quantity: 1, unit: 'c.s.' },
            { item: 'Graines de tournesol Bio', quantity: 20, unit: 'g' },
        ],
        steps: [
            'Chauffer les flocons d\'avoine et le liquide dans une casserole (~5 min) en remuant jusqu\'à épaississement.',
            'Verser dans un bol.',
            'Garnir avec le fruit coupé et les graines.'
        ]
    },
    'quinoa_lentil_salad': {
        id: 'quinoa_lentil_salad',
        title: 'Salade Quinoa/Lentilles/Légumes',
        emoji: '🥗',
        mealType: 'lunch',
        ingredients: [
            { item: 'Quinoa Bio', quantity: 150, unit: 'g', note: 'CUIT (env. 80g sec)', prepSuggestion: 'Cuire en grande quantité en début de semaine' },
            { item: 'Lentilles vertes Bio', quantity: 200, unit: 'g', note: 'CUIT (env. 70g sec)', prepSuggestion: 'Cuire en grande quantité en début de semaine' },
            { item: 'Légumes crus Bio variés', quantity: 1, unit: 'Grande portion', prepSuggestion: 'Laver/Couper certains légumes à l\'avance' },
            { item: 'Huile colza Bio', quantity: 1, unit: 'c.s.' },
            { item: 'Vinaigre Bio', quantity: 1, unit: 'c.s.' },
            { item: 'Sel, Poivre', quantity: null, unit: 'Selon goût' }
        ],
        steps: [
            'Mélanger le quinoa cuit, les lentilles cuites et les légumes coupés/râpés dans un saladier.',
            'Préparer la vinaigrette avec l\'huile, le vinaigre, sel et poivre.',
            'Assaisonner la salade.'
        ]
    },
    'snack_yogurt_fruit_seeds': {
        id: 'snack_yogurt_fruit_seeds',
        title: 'Collation Yaourt/Fruit/Graines',
        emoji: '🍎',
        mealType: 'snack',
        ingredients: [
            { item: 'Yaourts nature Bio', quantity: 2, unit: 'pots (2x125g)' },
            { item: 'Fruit de saison Bio', quantity: 1, unit: 'unité' },
            { item: 'Graines de courge Bio', quantity: 15, unit: 'g' },
        ],
        steps: ['Couper le fruit et mélanger tous les ingrédients dans un bol.']
    },
    'dinner_tofu_potato_spinach': {
        id: 'dinner_tofu_potato_spinach',
        title: 'Dîner Tofu/PDT/Épinards',
        emoji: '🍽️',
        mealType: 'dinner',
        ingredients: [
            { item: 'Tofu nature Bio', quantity: 180, unit: 'g' },
            { item: 'Pommes de terre Bio', quantity: 250, unit: 'g', note: 'environ', prepSuggestion: 'Cuire à l\'avance si désiré' },
            { item: 'Épinards frais Bio', quantity: 1, unit: 'sachet', prepSuggestion: 'Laver/Essorer à l\'avance' },
            { item: 'Huile Bio', quantity: 1, unit: 'c.c.' },
            { item: 'Sauce Soja Bio', quantity: 1, unit: 'c.s.' },
            { item: 'Ail', quantity: 0.5, unit: 'gousse', optional: true },
            { item: 'Sel, Poivre', quantity: null, unit: 'Selon goût' }
        ],
        steps: [
            'Si les pommes de terre ne sont pas précuites, les couper et les faire bouillir dans l\'eau salée jusqu\'à tendreté (~15-20 min).',
            'Couper le tofu en dés ou tranches. Le faire dorer à la poêle avec l\'huile et la sauce soja. Réserver.',
            'Dans la même poêle, faire revenir l\'ail haché (si utilisé) puis ajouter les épinards (lavés si nécessaire) et faire sauter jusqu\'à ce qu\'ils soient "tombés" (~5 min). Saler, poivrer.',
            'Égoutter les pommes de terre si elles viennent d\'être cuites. Servir le tofu, les pommes de terre et les épinards ensemble.'
        ]
    },
    'snack_evening_ricecake': {
        id: 'snack_evening_ricecake',
        title: 'Collation Galettes/Purée Oléagineux',
        emoji: '🌙',
        mealType: 'evening-snack',
        isOptional: true,
        ingredients: [
            { item: 'Galettes de riz Bio', quantity: 3, unit: 'unités' },
            { item: 'Purée amande/cacahuète Bio', quantity: 1, unit: 'c.s. (15g)' },
        ],
        steps: ['Tartiner les galettes avec la purée d\'oléagineux.']
    },
    'overnight_oats_1': { 
        id: 'overnight_oats_recipe', 
        title: 'Overnight Oats',
        emoji: '☀️',
        mealType: 'breakfast',
        prepRequiredTheDayBefore: true,
        prepTasks: [
             'Mélanger flocons d\'avoine, liquide, graines de chia et fruit dans un contenant hermétique.',
             'Laisser au frigo toute la nuit.'
        ],
        ingredients: [
            { item: 'Flocons d\'avoine Bio', quantity: 60, unit: 'g' },
            { item: 'Lait Bio ou Yaourt', quantity: 175, unit: 'ml/g', note: '150-200' },
            { item: 'Graines de chia Bio', quantity: 1, unit: 'c.s.' },
            { item: 'Fruit Bio (ex: poire, banane écrasée)', quantity: 100, unit: 'g', note: 'râpé ou coupé' },
        ],
        steps: [
            'Sortir du réfrigérateur et déguster !'
        ]
    },
     'lunch_quinoa_chickpea_salad': {
        id: 'lunch_quinoa_chickpea_salad',
        title: 'Salade Quinoa/Pois Chiches (Portable)',
        emoji: '🍱',
        mealType: 'lunch',
        isPortable: true,
        ingredients: [
            { item: 'Quinoa Bio', quantity: 150, unit: 'g', note: 'CUIT froid', prepSuggestion: 'Cuire en grande quantité en début de semaine' },
            { item: 'Pois chiches Bio', quantity: 150, unit: 'g', note: 'CUITS', prepSuggestion: 'Cuire en grande quantité en début de semaine' },
            { item: 'Légumes crus Bio variés', quantity: 150, unit: 'g', note: 'coupés/râpés', prepSuggestion: 'Laver/Couper certains légumes à l\'avance' },
            { item: 'Vinaigrette (Huile, Vinaigre, Sel, Poivre)', quantity: 1, unit: 'portion', note: 'à préparer' },
        ],
        steps: [
            'Dans une lunch box, mélanger le quinoa, les pois chiches et les légumes.',
            'Préparer la vinaigrette dans un petit pot séparé.',
            'Ajouter la vinaigrette juste avant de manger.'
        ]
    },
     'snack_fromageblanc_compote': {
        id: 'snack_fromageblanc_compote',
        title: 'Collation Fromage Blanc/Compote',
        emoji: '🥛',
        mealType: 'snack',
        ingredients: [
            { item: 'Fromage blanc Bio', quantity: 200, unit: 'g' },
            { item: 'Compote pommes Bio (s/s)', quantity: 1, unit: 'pot (100g)' },
            { item: 'Graines de tournesol Bio', quantity: 10, unit: 'g' },
        ],
        steps: ['Mélanger tous les ingrédients dans un bol.']
    },
    'dinner_pasta_chickpeas': {
        id: 'dinner_pasta_chickpeas',
        title: 'Dîner Pâtes/Pois Chiches',
        emoji: '🍝',
        mealType: 'dinner',
        ingredients: [
            { item: 'Pâtes complètes Bio', quantity: 80, unit: 'g', note: 'sec' },
            { item: 'Coulis tomate Bio', quantity: 200, unit: 'g' },
            { item: 'Pois chiches Bio', quantity: 150, unit: 'g', note: 'CUITS', prepSuggestion: 'Cuire en grande quantité en début de semaine' },
            { item: 'Huile olive Bio', quantity: 1, unit: 'c.c.' },
            { item: 'Oignon Bio', quantity: 0.5, unit: 'unité', optional: true },
            { item: 'Ail Bio', quantity: 0.5, unit: 'gousse', optional: true },
            { item: 'Sel, Poivre, Herbes de Provence Bio', quantity: null, unit: 'Selon goût' }
        ],
        steps: [
            'Faire cuire les pâtes selon les instructions du paquet.',
            'Pendant ce temps, faire revenir l\'oignon et l\'ail hachés (si utilisés) dans l\'huile d\'olive.',
            'Ajouter le coulis de tomate, les pois chiches cuits, le sel, le poivre et les herbes.',
            'Laisser mijoter la sauce 5-10 minutes.',
            'Égoutter les pâtes et les mélanger avec la sauce chaude.'
        ],
        notes: 'Rapide (~15 min).'
    },
     'breakfast_yogurt_muesli': {
        id: 'breakfast_yogurt_muesli',
        title: 'Pdj Yaourt/Muesli/PB',
        emoji: '🍓',
        mealType: 'breakfast',
        ingredients: [
            { item: 'Yaourt nature Bio', quantity: 200, unit: 'g' },
            { item: 'Fruit de saison Bio', quantity: 1, unit: 'unité (150g)' },
            { item: 'Muesli/Granola Bio', quantity: 40, unit: 'g' },
            { item: 'Beurre de cacahuète Bio', quantity: 1, unit: 'c.s. (15g)' },
        ],
        steps: ['Mélanger tous les ingrédients dans un bol.']
    },
    'lunch_wrap_hummus': {
        id: 'lunch_wrap_hummus',
        title: 'Wrap Houmous (Portable)',
        emoji: '🌯',
        mealType: 'lunch',
        isPortable: true,
        ingredients: [
            { item: 'Galette blé complet Bio', quantity: 1, unit: 'grande' },
            { item: 'Houmous', quantity: 100, unit: 'g', note:'env. 3-4 c.s. (maison/acheté)', prepSuggestion: 'Préparer le houmous à l\'avance'},
            { item: 'Légumes crus Bio variés', quantity: 150, unit: 'g', note: 'râpés/coupés', prepSuggestion: 'Laver/Couper certains légumes à l\'avance' },
            { item: 'Feta Bio ou Restes Tofu', quantity: 30, unit: 'g', optional: true }
        ],
        steps: [
            'Étaler le houmous sur la galette.',
            'Disposer les légumes (et feta/tofu si utilisé) par-dessus.',
            'Rouler serré et emballer pour le transport.'
        ]
    },
     'snack_fruit_galette': {
        id: 'snack_fruit_galette',
        title: 'Collation Fruit/Galettes',
        emoji: '🍊',
        mealType: 'snack',
        ingredients: [
            { item: 'Fruit de saison Bio', quantity: 1, unit: 'unité' },
            { item: 'Galettes de sarrasin Bio', quantity: 2, unit: 'unités' },
        ],
        steps: ['Manger le fruit avec les galettes.']
    },
     'dinner_wok_tofu': {
        id: 'dinner_wok_tofu',
        title: 'Dîner Wok Tofu',
        emoji: '🥡',
        mealType: 'dinner',
        ingredients: [
            { item: 'Riz complet Bio', quantity: 150, unit: 'g', note: 'CUIT (env. 70g sec)', prepSuggestion: 'Cuire en grande quantité en début de semaine' },
            { item: 'Tofu ferme Bio', quantity: 180, unit: 'g' },
            { item: 'Légumes Bio variés', quantity: 200, unit: 'g', note: 'champignons, épinards, carottes...', prepSuggestion: 'Couper les légumes du wok à l\'avance' },
            { item: 'Huile sésame/tournesol Bio', quantity: 1, unit: 'c.c.' },
            { item: 'Sauce soja Bio', quantity: 1.5, unit: 'c.s.', note: '1 à 2' }
        ],
        steps: [
            'Réchauffer le riz si nécessaire.',
            'Couper le tofu en dés et les légumes en morceaux (s\'ils ne sont pas pré-coupés).',
            'Faire chauffer l\'huile dans un wok ou une grande poêle.',
            'Ajouter le tofu et faire sauter 2-3 minutes jusqu\'à coloration.',
            'Ajouter les légumes (les plus durs d\'abord) et faire sauter 3-5 minutes jusqu\'à ce qu\'ils soient tendres mais encore croquants.',
            'Ajouter la sauce soja, bien mélanger.',
            'Servir immédiatement sur le riz chaud.'
        ],
        notes: 'Rapide (~15 min si riz et légumes prêts).'
    },
     'breakfast_yogurt_granola': {
        id: 'breakfast_yogurt_granola',
        title: 'Pdj Yaourt/Granola',
        emoji: '🥝',
        mealType: 'breakfast',
        ingredients: [
            { item: 'Yaourt nature Bio', quantity: 200, unit: 'g' },
            { item: 'Fruit de saison Bio', quantity: 1, unit: 'unité (150g)' },
            { item: 'Granola Bio', quantity: 30, unit: 'g' }, // Différence ici
            { item: 'Graines (chia, tournesol...)', quantity: 1, unit: 'c.s.' }
        ],
        steps: ['Mélanger tous les ingrédients dans un bol.']
    },
     'lunch_potato_egg_chickpea_salad': {
        id: 'lunch_potato_egg_chickpea_salad',
        title: 'Déj Salade PDT/Œufs/Pois Chiches',
        emoji: '🥔',
        mealType: 'lunch',
        ingredients: [
            { item: 'Pommes de terre Bio', quantity: 200, unit: 'g', note: 'CUITes froides', prepSuggestion: 'Cuire à l\'avance'},
            { item: 'Œufs durs Bio', quantity: 2, unit: 'unités', note: 'CUITS', prepSuggestion: 'Cuire à l\'avance'},
            { item: 'Pois chiches Bio', quantity: 150, unit: 'g', note: 'CUITS', prepSuggestion: 'Cuire en grande quantité en début de semaine'},
            { item: 'Légumes crus Bio variés coupés', quantity: 150, unit: 'g'},
            { item: 'Vinaigrette', quantity: 1, unit: 'portion', note: 'à préparer (Huile, Vinaigre, Moutarde, Sel, Poivre)'}
        ],
        steps: [
            'Couper les pommes de terre et les œufs durs.',
            'Mélanger tous les ingrédients solides dans un saladier.',
            'Préparer la vinaigrette et assaisonner.'
        ]
    },
     'snack_bread_pb_fruit': {
        id: 'snack_bread_pb_fruit',
        title: 'Collation Pain/PB/Fruit',
        emoji: '🥜',
        mealType: 'snack',
        ingredients: [
            { item: 'Pain complet Bio', quantity: 1, unit: 'tranche (35g)' },
            { item: 'Beurre de cacahuète Bio', quantity: 1, unit: 'c.s. (15-20g)' },
            { item: 'Fruit de saison Bio', quantity: 1, unit: 'unité' }
        ],
        steps: ['Tartiner le pain avec le beurre de cacahuète.', 'Manger avec le fruit.']
    },
     'dinner_cold_bowl': {
        id: 'dinner_cold_bowl',
        title: 'Dîner Bowl Froid Quinoa/Lentilles',
        emoji: '🥣',
        mealType: 'dinner',
        ingredients: [
            { item: 'Quinoa Bio', quantity: 150, unit: 'g', note: 'CUIT froid', prepSuggestion: 'Cuire en grande quantité en début de semaine' },
            { item: 'Lentilles vertes Bio', quantity: 200, unit: 'g', note: 'CUITes froides', prepSuggestion: 'Cuire en grande quantité en début de semaine' },
            { item: 'Légumes crus Bio variés', quantity: 1, unit: 'Grande portion', note: 'coupés/râpés', prepSuggestion: 'Laver/Couper certains légumes à l\'avance'},
            { item: 'Huile olive Bio', quantity: 1, unit: 'c.s.' },
            { item: 'Jus de citron Bio', quantity: 1, unit: 'c.s.' },
            { item: 'Herbes fraîches Bio hachées', quantity: null, unit: 'Selon goût', optional: true },
            { item: 'Sel, Poivre', quantity: null, unit: 'Selon goût' }
        ],
        steps: [
            'Disposer le quinoa et les lentilles dans un grand bol.',
            'Ajouter les légumes crus par-dessus.',
            'Préparer la sauce en mélangeant huile, citron, herbes (si utilisé), sel et poivre.',
            'Verser la sauce sur le bowl.'
        ],
        notes: 'Préparer une portion en plus pour le déjeuner du lendemain!'
    },
     'snack_evening_fromageblanc': {
        id: 'snack_evening_fromageblanc',
        title: 'Collation Soirée Fromage Blanc',
        emoji: '🥛',
        mealType: 'evening-snack',
        isOptional: true,
        ingredients: [
            { item: 'Fromage blanc Bio', quantity: 150, unit: 'g' },
            { item: 'Graines de courge Bio', quantity: 10, unit: 'g' }
        ],
        steps: ['Mélanger les graines dans le fromage blanc.']
    },
    'overnight_oats_2': { // ID pour Vendredi, utilise la même recette que le 1
        id: 'overnight_oats_1', // Référence la recette déjà définie
    },
     'lunch_leftover_bowl_or_bean_salad': {
        id: 'lunch_leftover_bowl_or_bean_salad',
        title: 'Déj Restes Bowl / Salade Haricots',
        emoji: '🍱',
        mealType: 'lunch',
        isPortable: true,
        ingredients: [ // Liste les ingrédients pour l'option Salade Haricots
             { item: 'Haricots blancs Bio', quantity: 200, unit: 'g', note: 'CUITS', prepSuggestion: 'Cuire en grande quantité en début de semaine'},
             { item: 'Légumes crus Bio variés coupés', quantity: 150, unit: 'g' },
             { item: 'Vinaigrette', quantity: 1, unit: 'portion', note: 'à préparer, à part' }
        ],
        steps: [
            'Option 1: Emporter la portion supplémentaire du Bowl Froid (Dîner Jeudi) préparée la veille.',
            'Option 2: Mélanger les haricots blancs cuits et les légumes crus dans une lunch box. Emporter la vinaigrette séparément.'
        ],
        notes: 'Choisir une des deux options.'
    },
     'snack_banana_almonds_choco': {
        id: 'snack_banana_almonds_choco',
        title: 'Collation Banane/Amandes/Choco',
        emoji: '🍌',
        mealType: 'snack',
        ingredients: [
            { item: 'Banane Bio', quantity: 1, unit: 'unité' },
            { item: 'Amandes Bio', quantity: 15, unit: 'g' },
            { item: 'Chocolat noir >70% Bio', quantity: 2, unit: 'carrés (20g)' }
        ],
    },
     'dinner_curry_chickpea': {
        id: 'dinner_curry_chickpea',
        title: 'Dîner Curry Pois Chiches',
        emoji: '🍛',
        mealType: 'dinner',
        canBatchCook: true,
        batchCookNotes: 'Se congèle bien (sans le riz).',
        ingredients: [
            { item: 'Riz basmati Bio', quantity: 150, unit: 'g', note: 'CUIT (env. 60g sec)', prepSuggestion: 'Cuire en grande quantité en début de semaine'},
            { item: 'Oignon Bio', quantity: 0.5, unit: 'unité' },
            { item: 'Curry en poudre Bio', quantity: 1, unit: 'c.c.' },
            { item: 'Huile Bio', quantity: 1, unit: 'c.c.' },
            { item: 'Légumes Bio variés coupés', quantity: 200, unit: 'g', note: '(courgette, carotte, patate douce...)' },
            { item: 'Pois chiches Bio', quantity: 150, unit: 'g', note: 'CUITS', prepSuggestion: 'Cuire en grande quantité en début de semaine'},
            { item: 'Tomates concassées Bio', quantity: 200, unit: 'g' },
            { item: 'Lait de coco Bio', quantity: 100, unit: 'ml', optional: true },
            { item: 'Sel, Poivre', quantity: null, unit: 'Selon goût' }
        ],
        steps: [
            'Réchauffer le riz si nécessaire.',
            'Faire revenir l\'oignon haché et le curry dans l\'huile dans une sauteuse.',
            'Ajouter les légumes coupés et cuire 5 minutes.',
            'Ajouter les pois chiches, les tomates concassées, le lait de coco (si utilisé), le sel et le poivre.',
            'Laisser mijoter environ 10 minutes, jusqu\'à ce que les légumes soient tendres.',
            'Servir le curry sur le riz.'
        ],
        notes: 'Relativement rapide (~20 min).'
    },
     'snack_evening_yogurt': {
        id: 'snack_evening_yogurt',
        title: 'Collation Soirée Yaourt',
        emoji: '🥄',
        mealType: 'evening-snack',
        isOptional: true,
        ingredients: [
            { item: 'Yaourt nature Bio', quantity: 1, unit: 'pot (125g)' }
        ]
    },
     'breakfast_egg_avocado_toast': {
        id: 'breakfast_egg_avocado_toast',
        title: 'Pdj Œuf Poché/Avocat Toast',
        emoji: '🍳',
        mealType: 'breakfast',
        ingredients: [
            { item: 'Œuf Bio', quantity: 1, unit: 'unité' },
            { item: 'Pain complet Bio', quantity: 2, unit: 'tranches' },
            { item: 'Avocat Bio', quantity: 0.33, unit: 'unité', note: '1/4 - 1/3' },
            { item: 'Vinaigre blanc', quantity: 1, unit: 'trait', note: 'pour pochage', optional: true },
            { item: 'Sel, Poivre', quantity: null, unit: 'Selon goût' }
        ],
        steps: [
            'Porter de l\'eau à frémissement dans une petite casserole, ajouter un trait de vinaigre (optionnel).',
            'Casser l\'œuf délicatement dans un petit ramequin puis le verser doucement dans l\'eau frémissante.',
            'Pocher environ 3 minutes pour un jaune coulant.',
            'Pendant ce temps, toaster le pain.',
            'Écraser la chair de l\'avocat sur les toasts, saler et poivrer.',
            'Retirer l\'œuf poché avec une écumoire, l\'égoutter et le déposer sur les toasts à l\'avocat.'
        ]
    },
     'lunch_semolina_bowl': {
        id: 'lunch_semolina_bowl',
        title: 'Déj Bowl Semoule',
        emoji: '🍲',
        mealType: 'lunch',
        ingredients: [
            { item: 'Semoule complète Bio', quantity: 70, unit: 'g', note: 'sec' },
            { item: 'Eau bouillante', quantity: null, unit: 'QS', note: 'environ 1.5x le volume' },
            { item: 'Pois chiches Bio', quantity: 100, unit: 'g', note: 'CUITS', prepSuggestion: 'Cuire en grande quantité en début de semaine'},
            { item: 'Légumes variés crus/cuits Bio', quantity: 200, unit: 'g'},
            { item: 'Yaourt nature Bio', quantity: 2, unit: 'c.s.', note: 'pour la sauce' },
            { item: 'Jus de citron Bio', quantity: 0.25, unit: 'unité', note: 'pour la sauce' },
            { item: 'Herbes fraîches Bio hachées', quantity: null, unit: 'Selon goût', optional: true },
            { item: 'Sel, Poivre', quantity: null, unit: 'Selon goût', note: 'pour la sauce' }
        ],
        steps: [
            'Mettre la semoule dans un bol. Verser l\'eau bouillante juste assez pour couvrir. Couvrir le bol et laisser gonfler 5 minutes.',
            'Égrener la semoule à la fourchette.',
            'Dans un autre bol, préparer la sauce en mélangeant le yaourt, le jus de citron, les herbes (si utilisé), sel et poivre.',
            'Assembler le bowl : déposer la semoule, ajouter les pois chiches et les légumes par-dessus.',
            'Napper avec la sauce.'
        ]
    },
     'snack_fruit_nutbutter': {
        id: 'snack_fruit_nutbutter',
        title: 'Collation Fruit/Purée Oléagineux',
        emoji: '🍏',
        mealType: 'snack',
        ingredients: [
            { item: 'Fruit de saison Bio', quantity: 1, unit: 'unité' },
            { item: 'Purée d\'amande/cacahuète Bio', quantity: 2, unit: 'c.c. (15g)' }
        ],
        steps: ['Couper le fruit si besoin et le déguster avec la purée d\'oléagineux.']
    },
    'dinner_scrambledtofu_potato_chard': {
        id: 'dinner_scrambledtofu_potato_chard',
        title: 'Dîner Tofu Brouillé/PDT/Blettes',
        emoji: '🍳',
        mealType: 'dinner',
        ingredients: [
            { item: 'Tofu ferme Bio', quantity: 180, unit: 'g' },
            { item: 'Pommes de terre Bio', quantity: 250, unit: 'g', note: 'CUITes', prepSuggestion: 'Cuire à l\'avance'},
            { item: 'Blettes Bio', quantity: 1, unit: 'partie de botte', prepSuggestion: 'Laver/Couper à l\'avance' },
            { item: 'Oignon Bio', quantity: 0.5, unit: 'unité' },
            { item: 'Curcuma Bio', quantity: 0.5, unit: 'c.c.' },
            { item: 'Huile Bio', quantity: 1.5, unit: 'c.c.', note: '1-2' },
            { item: 'Sel, Poivre', quantity: null, unit: 'Selon goût' }
        ],
        steps: [
            'Couper les pommes de terre cuites en dés.',
            'Laver les blettes (si pas déjà fait). Séparer les côtes des feuilles. Émincer les côtes et hacher grossièrement les feuilles.',
            'Faire chauffer 1 c.c. d\'huile dans une poêle. Ajouter les dés de pommes de terre et faire sauter jusqu\'à ce qu\'ils soient dorés. Réserver.',
            'Ajouter un peu d\'huile si besoin. Faire revenir les côtes de blettes quelques minutes. Ajouter les feuilles et cuire jusqu\'à ce qu\'elles soient tendres. Saler, poivrer. Réserver avec les pommes de terre.',
            'Émietter le tofu à la fourchette.',
            'Dans la même poêle, faire revenir l\'oignon haché dans un peu d\'huile.',
            'Ajouter le tofu émietté, le curcuma, sel et poivre. Cuire 5-7 minutes en remuant.',
            'Servir le tofu brouillé avec les pommes de terre et les blettes sautées.'
        ]
    },
    'snack_evening_yogurt_fb': {
        id: 'snack_evening_yogurt_fb',
        title: 'Collation Soirée Yaourt/FB',
        emoji: '🌙',
        mealType: 'evening-snack',
        isOptional: true,
        ingredients: [
            { item: 'Yaourt nature Bio (125g) OU Fromage Blanc Bio (100g)', quantity: 1, unit: 'portion' }
        ]
    },
    'breakfast_omelette': {
        id: 'breakfast_omelette',
        title: 'Pdj Omelette Champignons',
        emoji: '🍳',
        mealType: 'breakfast',
        ingredients: [
            { item: 'Œufs Bio', quantity: 3, unit: 'unités' },
            { item: 'Champignons de Paris Bio', quantity: 100, unit: 'g' },
            { item: 'Pain complet Bio', quantity: 1, unit: 'tranche (35g)' },
            { item: 'Fruit de saison Bio', quantity: 1, unit: 'unité' },
            { item: 'Huile Bio', quantity: 0.5, unit: 'c.c.' },
            { item: 'Sel, Poivre', quantity: null, unit: 'Selon goût' }
        ],
        steps: [
            'Nettoyer et émincer les champignons.',
            'Faire chauffer l\'huile dans une poêle et y faire revenir les champignons jusqu\'à ce qu\'ils soient dorés.',
            'Battre les œufs dans un bol avec le sel et le poivre.',
            'Verser les œufs battus sur les champignons dans la poêle.',
            'Cuire l\'omelette à feu moyen, en ramenant les bords vers le centre, jusqu\'à la cuisson désirée.',
            'Servir immédiatement avec la tranche de pain complet et le fruit.'
        ]
    },
    'lunch_chili_sin_carne': {
        id: 'lunch_chili_sin_carne',
        title: 'Déj Chili Sin Carne',
        emoji: '🌶️',
        mealType: 'lunch',
        canBatchCook: true,
        batchCookNotes: 'Excellent réchauffé, se conserve 3 jours au frigo.',
        ingredients: [
            { item: 'Riz complet Bio', quantity: 150, unit: 'g', note: 'CUIT (env. 50g sec)', prepSuggestion: 'Cuire en grande quantité en début de semaine'},
            { item: 'Oignon Bio', quantity: 0.5, unit: 'unité' },
            { item: 'Huile Bio', quantity: 1, unit: 'c.c.' },
            { item: 'Paprika doux Bio', quantity: 0.5, unit: 'c.c.' },
            { item: 'Cumin en poudre Bio', quantity: 0.5, unit: 'c.c.', optional: true },
            { item: 'Haricots rouges Bio', quantity: 150, unit: 'g', note: 'CUITS', prepSuggestion: 'Cuire en grande quantité en début de semaine'},
            { item: 'Maïs doux Bio', quantity: 80, unit: 'g', note: 'égoutté' },
            { item: 'Tomates concassées Bio', quantity: 200, unit: 'g' },
            { item: 'Sel, Poivre', quantity: null, unit: 'Selon goût' }
        ],
        steps: [
            'Réchauffer le riz si nécessaire.',
            'Hacher l\'oignon. Le faire revenir dans l\'huile chaude dans une sauteuse.',
            'Ajouter le paprika et le cumin (si utilisé) et cuire 1 minute en remuant.',
            'Ajouter les haricots rouges cuits (rincés si conserve), le maïs égoutté et les tomates concassées.',
            'Saler et poivrer. Bien mélanger.',
            'Laisser mijoter à feu doux pendant 15-20 minutes.',
            'Servir le chili chaud sur le riz.'
        ]
    },
    'snack_yogurt_fruit': {
        id: 'snack_yogurt_fruit',
        title: 'Collation Yaourt/Fruit',
        emoji: '🍇',
        mealType: 'snack',
        ingredients: [
            { item: 'Yaourt nature Bio', quantity: 200, unit: 'g' },
            { item: 'Fruit de saison Bio coupé', quantity: 100, unit: 'g' }
        ],
        steps: ['Mélanger le fruit coupé dans le yaourt.']
    },
    'dinner_soup_lentil': {
        id: 'dinner_soup_lentil',
        title: 'Dîner Soupe Légumes/Lentilles',
        emoji: '🥣',
        mealType: 'dinner',
        canBatchCook: true,
        batchCookNotes: 'Se conserve très bien 3-4 jours, idéale pour plusieurs repas.',
        ingredients: [
            { item: 'Oignon Bio', quantity: 0.5, unit: 'unité' },
            { item: 'Légumes de saison Bio variés', quantity: 300, unit: 'g', note: 'carottes, poireaux, céleri, PDT...' },
            { item: 'Lentilles corail Bio sèches', quantity: 50, unit: 'g' },
            { item: 'Eau ou Bouillon de légumes', quantity: 750, unit: 'ml', note: '~700-800' },
            { item: 'Huile Bio', quantity: 1, unit: 'c.c.' },
            { item: 'Sel, Poivre', quantity: null, unit: 'Selon goût' }
        ],
        steps: [
            'Hacher l\'oignon. Couper les légumes en morceaux.',
            'Faire chauffer l\'huile dans une grande casserole ou une marmite.',
            'Faire revenir l\'oignon haché jusqu\'à ce qu\'il soit translucide.',
            'Ajouter les légumes coupés et cuire 5 minutes en remuant.',
            'Rincer les lentilles corail à l\'eau froide.',
            'Ajouter les lentilles rincées dans la casserole, verser l\'eau ou le bouillon. Saler et poivrer.',
            'Porter à ébullition, puis réduire le feu, couvrir et laisser mijoter 20-25 minutes, jusqu\'à ce que les légumes et les lentilles soient bien tendres.',
            'Optionnel : Mixer la soupe à l\'aide d\'un mixeur plongeant pour obtenir une consistance plus lisse.'
        ]
    },
    'snack_evening_compote_fruit': {
        id: 'snack_evening_compote_fruit',
        title: 'Collation Soirée Compote/Fruit',
        emoji: '🌙',
        mealType: 'evening-snack',
        isOptional: true,
        ingredients: [
            { item: 'Compote pommes Bio (s/s)', quantity: 1, unit: 'pot (100g)', optional: true },
            { item: 'OU Fruit de saison Bio', quantity: 1, unit: 'unité (150g)', optional: true }
        ],
        notes: 'Choisir l\'un ou l\'autre.'
    },
    'default': {
        id: 'default',
        title: 'Recette à venir',
        emoji: '🚧',
        mealType: 'unknown',
        ingredients: [],
        steps: ['La recette détaillée pour ce plat sera bientôt ajoutée !']
    }
};

if (recipes['overnight_oats_1']) {
    recipes['overnight_oats_2'] = recipes['overnight_oats_1'];
} else {
    recipes['overnight_oats_2'] = recipes['default'];
    console.warn("Recette source 'overnight_oats_1' non trouvée pour 'overnight_oats_2'");
}