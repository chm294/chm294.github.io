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
                ingredients : [{}],
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
                ingredients : [{
                    dough: ['flour', 'yeast'],
                    sauce: ['canned tomatoes'],
                    toppings: ['artichokes', 'basil', 'parmesian cheese']
                }],
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
    // {
    //   title: 'beef brisket',
    //   lastUpdated: '12/8/19',
    //   keywords: ['meat', 'protein', 'smoked'],
    //   cooktime: 8,
    //   difficulty: 'expert',
    //   path: 'brisket',
    // },
    // {
    //   title: 'beef brisket',
    //   lastUpdated: '12/8/19',
    //   keywords: ['meat', 'protein', 'smoked'],
    //   cooktime: 8,
    //   difficulty: 'expert',
    //   path: 'brisket',
    // },
    // {
    //   title: 'beef brisket',
    //   lastUpdated: '12/8/19',
    //   keywords: ['meat', 'protein', 'smoked'],
    //   cooktime: 8,
    //   difficulty: 'expert',
    //   path: 'brisket',
    // },
    // {
    //   title: 'beef brisket',
    //   lastUpdated: '12/8/19',
    //   keywords: ['meat', 'protein', 'smoked'],
    //   cooktime: 8,
    //   difficulty: 'expert',
    //   path: 'brisket',
    // },
    // {
    //   title: 'beef brisket',
    //   lastUpdated: '12/8/19',
    //   keywords: ['meat', 'protein', 'smoked'],
    //   cooktime: 8,
    //   difficulty: 'expert',
    //   path: 'brisket',
    // },
    // {
    //   title: 'beef brisket',
    //   lastUpdated: '12/8/19',
    //   keywords: ['meat', 'protein', 'smoked'],
    //   cooktime: 8,
    //   difficulty: 'expert',
    //   path: 'brisket',
    // },
  ];

  export default AllRecipes;
  