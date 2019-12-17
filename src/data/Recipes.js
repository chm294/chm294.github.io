const AllRecipes = [
    {
        title: 'Thai Tea',
        lastUpdated: '12/8/19',
        description: 'Ever go to your favorite boba place and walk out disappointed because they couldnt adjust the sugar level on your favorite drink?',
        tools: ['shaker', 'weight scale'], //optional field
        parts: [
            {
                title: 'Spencer\'s Thai Ice Tea',
                ingredients : ['tea leaves', 'cream or half & half', 'simple syrup'],
                method: ['brew the tea leaves in about 135 grams of water',
                    'add 40 grams of cream or half and half', 
                    'add 15g of simple syrup and more if needed']
            }
        ],
        keywords: ['drink', 'dessert', 'sweet'],
        cooktime: 10,
        difficulty: 'easy',
        path: 'thai-ice-tea',
        related: [],
        pairsWith: [],
    },
    {
        title: 'Biang Biang Noodles',
        lastUpdated: '12/8/19',
        description: '',
        tools: ['large surface for slapping noodles', 'large pot'],
        parts: [
            {
                title: 'Biang Biang Noodles',
                ingredients : [],
                method: ['Mix dough and bread for 10 min until taut, slightly sticky',
                'Divide into 4, roll each into a log and slightly flatten each one ',
                'Coat in neutral oil and rest for 30 mins',
                'Roll / press each piece into roughly 4" x 2" and use a chopstick to press an indent horizontally across the middle',
                'Gently pull the dough and begin stretching it into noodles. Wave up and down to slap dough onto table while stretching',
                'salt in the dough helps to keep it from tearing',
                'note noodles will be very sticky!',
                'Boil noodles and chopped cabbage in salted water for 60 - 90 seconds',
                'Strain out water, and pile up chopped aromatics and pour smoking hot peanut oil over them',
                'Add sauce, mix well, and enjoy']
            }
        ],
        keywords: ['noodles', 'carbs', 'asian', 'taiwanese'],
        cooktime: 60,
        difficulty: 'expert',
        path: 'biang-biang',
        related: [],
        pairsWith: [],
    },
    {
        title: 'Deep Dish Pizza',
        lastUpdated: '12/8/19',
        description: '',
        tools: ['Cast iron pan', ''],
        parts: [
            {
                title: 'Deep Dish Pizza',
                ingredients : ['flour', 'yeast', 'canned tomatoes'],
                method: [
                    'First ya make a da dough',
                    'Squish Squish',
                    'Mush',
                    ]
            }
        ],
        keywords: ['carbs', 'italian', 'comfort food'],
        cooktime: 60,
        difficulty: 'moderate',
        path: 'deep-dish-pizza',
        related: [],
        pairsWith: [],
    },
    {
        title: 'Basil Ricotta Gnocchi',
        lastUpdated: '12/8/19',
        description: '',
        tools: ['', ''],
        parts: [
            {
                title: 'Basil Ricotta Gnocchi',
                ingredients : [],
                method: ['step 1', 'step 2', 'step 3']
            }
        ],
        keywords: ['italian', 'carbs', 'comfort food'],
        cooktime: 60,
        difficulty: 'moderate',
        path: 'basil-ricotta-gnocchi',
        related: [],
        pairsWith: [],
    },
    {
        title: 'Spencer\'s Smoked Brisket',
        lastUpdated: '12/8/19',
        description: '',
        tools: ['', ''],
        parts: [
            {
                title: 'Spencer\'s Smoked Brisket',
                ingredients : [],
                method: ['step 1', 'step 2', 'step 3']
            }
        ],
        keywords: ['jewish', 'protein', 'beef'],
        cooktime: 60,
        difficulty: 'expert',
        path: 'brisket',
        related: [],
        pairsWith: [],
    },
    {
        title: 'Chocolate Mousse Pie',
        lastUpdated: '12/8/19',
        description: '',
        tools: ['', ''],
        parts: [
            {
                title: 'Chocolate Mousse Pie',
                ingredients : [],
                method: ['step 1', 'step 2', 'step 3']
            }
        ],
        keywords: ['dessert', 'sweets'],
        cooktime: 60,
        difficulty: 'difficulty',
        path: 'chocolate-mousse-pie',
        related: [],
        pairsWith: [],
    },
    {
        title: 'Creamy Tomato Soup',
        lastUpdated: '12/8/19',
        description: '',
        tools: ['', ''],
        parts: [
            {
                title: 'Creamy Tomato Soup',
                ingredients : [],
                method: ['step 1', 'step 2', 'step 3']
            }
        ],
        keywords: ['soup'],
        cooktime: 60,
        difficulty: 'easy',
        path: 'creamy-tomato-soup',
        related: [],
        pairsWith: [],
    },
    {
        title: 'Kouign Amann',
        lastUpdated: '12/8/19',
        description: '',
        tools: ['', ''],
        parts: [
            {
                title: 'Kouign Amann',
                ingredients : [],
                method: ['step 1', 'step 2', 'step 3']
            }
        ],
        keywords: ['dessert', 'sweet', 'pastry', 'baking'],
        cooktime: 60,
        difficulty: 'expert',
        path: 'kouign-amann',
        related: [],
        pairsWith: [],
    },
    {
        title: 'Sous Vide Pork',
        lastUpdated: '12/8/19',
        description: '',
        tools: ['', ''],
        parts: [
            {
                title: 'Sous Vide Pork',
                ingredients : [],
                method: ['step 1', 'step 2', 'step 3']
            }
        ],
        keywords: ['protein'],
        cooktime: 60,
        difficulty: 'easy',
        path: 'pork',
        related: [],
        pairsWith: [],
    }
  ];

  export default AllRecipes;
  