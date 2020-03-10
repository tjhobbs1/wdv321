let recipes = {
	"recipe": [
        {
            name : "Crockpot Chili",
            image : "images/Crockpot-Chili.jpg",
            servings : 6,
            prepTime : "25 mins",
            cookTime : "6 hours",
            ingredients : [
                {
                    amount : 2,
                    units : "tbsp",
                    name : "cooking oil"
                },
                {
                    amount : 1,
                    units : "cup",
                    name : "onion"
                },
                {
                    amount : 1,
                    units : "cup",
                    name : "chopped peppers"
                },
                {
                    amount : 4,
                    units : "tbsp",
                    name : "Chili Powder"
                },
                {
                    amount : 1,
                    units : "tsp",
                    name : "Hot chili powder (optional)"
                },
                {
                    amount : 1,
                    units : "lb",
                    name : "ground beef or chicken"
                },
                {
                    amount : 2,
                    units : "cans",
                    name : "red beans"
                },
                {
                    amount : 2,
                    units : "cans",
                    name : "kidney beans"
                },
                {
                    amount : 2,
                    units : "cans",
                    name : "Tomato Puree"
                },
                {
                    amount : 2,
                    units : "can",
                    name : "Tomato Sauce"
                },
                {
                    amount : 1,
                    units : "cup",
                    name : "shredded cheese (optional)"
                },
                {
                    amount : .5,
                    units : "cup",
                    name : "sour cream"
                }
            ],
            "steps":[
                {
                    "description" : "Heat cooking oil in 2 quart skillet." 
                },
                {
                    "description" : "Saute onions and peppers for 5 minutes." 
                },
                {
                    "description" : "Add spices and stir for 30 seconds." 
                },
                {
                    "description" : "Add meat and cook until browned. Approximately 15 minutes." 
                },
                {
                    "description" : "Pour contents of skillet into 3 quart crock pot." 
                },
                {
                    "description" : "Rinse beans and place in crockpot." 
                },
                {
                    "description" : "Open and pour Tomato puree and sauce into crock pot." 
                },
                {
                    "description" : "Cover crockpot and cook on low for 6 hours." 
                },
                {
                    "description" : "Serve into individual bowls and top with sour cream and cheese." 
                }

            ]
        },

        
       
        {
            name : "Brownies",
            image : "images/brownie.jpeg",
            servings : 16,
            prepTime : "25 mins",
            cookTime : "35 mins",
            ingredients : [
                {
                    amount : .5,
                    units : "cup",
                    name : "butter"
                },
                {
                    amount : 1,
                    units : "cups",
                    name : "sugar"
                },
                
                {
                    amount : 3,
                    units : "",
                    name : "eggs"
                },
                {
                    amount : 1,
                    units : "tsp",
                    name : "vanilla extract"
                },
                {
                    amount : .3,
                    units : "cups",
                    name : "unsweetened cocoa powder"
                },
                {
                    amount : .5,
                    units : "cup",
                    name : "all-purpose flour"
                },
                {
                    amount : .25,
                    units : "tsp",
                    name : "salt"
                },
                {
                    amount : .25,
                    units : "tsp",
                    name : "baking powder"
                },
                {
                    amount : 3,
                    units : "tbsp",
                    name : "butter, soften"
                }, {
                    amount : 3,
                    units : "tbsp",
                    name : "unsweetended cocoa powder"
                },
                {
                    amount : 1,
                    units : "tbsp",
                    name : "honey"
                }, {
                    amount : 1,
                    units : "tsp",
                    name : "honey"
                },
                {
                    amount : 1,
                    units : "tsp",
                    name : "vanilla extract"
                },
                
                {
                    amount : 1,
                    units : "cup",
                    name : "confectioner's sugar"
                }
                
            ],
            "steps":[
                {
                    "description" : "Preheat oven to 350 degrees F (175 degrees C). Grease and flour an 8-inch square pan." 
                },
                {
                    "description" : "In a large saucepan, melt 1/2 cup butter. Remove from heat, and stir in sugar, eggs, and 1 teaspoon vanilla. Beat in 1/3 cup cocoa, 1/2 cup flour, salt, and baking powder. Spread batter into prepared pan." 
                }, 
                {
                    "description" : "Bake in preheated oven for 25 to 30 minutes. Do not overcook." 
                },
                {
                    "description" : "To Make Frosting: Combine 3 tablespoons softened butter, 3 tablespoons cocoa, honey, 1 teaspoon vanilla extract, and 1 cup confectioners' sugar. Stir until smooth. Frost brownies while they are still warm." 
                },

            ]


        },
        {
            name : "Pancakes",
            image : "images/pancake.jpg",
            servings : 4,
            ingredients : [
                {
                    amount : .75,
                    units : "cups",
                    name : "milk"
                },
                {
                    amount : 2,
                    units : "tbsp",
                    name : "vinegar"
                },
                {
                    amount : 1,
                    units : "cup",
                    name : "flour"
                },
                {
                    amount : 2,
                    units : "tbsp",
                    name : "white sugar"
                },
                {
                    amount : 1,
                    units : "tsp",
                    name : "baking powder"
                },
                {
                    amount : .5,
                    units : "tsp",
                    name : "baking soda"
                },
                {
                    amount : .5,
                    units : "tsp",
                    name : "salt"
                },
                {
                    amount : 1,
                    units : "",
                    name : "egg"
                }

                
            ],
            "steps":[
                {
                    "description" : "Combine milk with vinegar in a medium bowl and set aside for 5 minutes to 'sour'." 
                },
                {
                    "description" : "Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into 'soured' milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone." 
                },
                {
                    "description" : "Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side." 
                }

            ]


        }
    ]}


    recipes = JSON.stringify(recipes);