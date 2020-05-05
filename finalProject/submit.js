
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDA_yaUBnjRvtfBeAZhyVRQcm8ZLp0F9X4",
    authDomain: "form-demo-9dde4.firebaseapp.com",
    databaseURL: "https://form-demo-9dde4.firebaseio.com",
    projectId: "form-demo-9dde4",
    storageBucket: "form-demo-9dde4.appspot.com",
    messagingSenderId: "828360459149",
    appId: "1:828360459149:web:f0663915e8027ab5a933c4"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

 
// //Reference Collection
var database = firebase.firestore();





//Get ID of submitted Recipe
let itemId = localStorage.id;

firebase.firestore().collection('contactData').doc(itemId).get().then((doc) => {
    let recipeName = doc.data().name;
    document.getElementById('recipeName').innerHTML = recipeName;

    let recipeNumOfServings = doc.data().numOfServings;
    document.getElementById('recipeNumOfServings').innerHTML = recipeNumOfServings;

    let recipeCookTime = doc.data().prepTime;
    let timeSelect = doc.data().timeSelect
    document.getElementById('recipeCookTime').innerHTML = recipeCookTime +' '+ timeSelect;

    let recipeDescription = doc.data().description;
    document.getElementById('recipeDescription').innerHTML = recipeDescription;

    let ingredDict = doc.data().ingredDict
    
    let count = 0;
    
    for (var ingred in ingredDict) {
        
        let amount1 = ingredDict[ingred].amount;
        let unit1 = ingredDict[ingred].unit;
        let ingred1 = ingredDict[ingred].ingred;


        
        let ul = document.getElementById('ingredList');
        let childDiv = document.createElement("li");
        childDiv.setAttribute("class", "savedIngred"+count);
        childDiv.innerHTML = amount1 +' '+ unit1 +' '+ ingred1;
        ul.appendChild(childDiv);
      }

    let steps = doc.data().steps
    

    let step = 0;
    while(step < steps.length){
        let ulStep = document.getElementById('stepsList');
        let childDiv = document.createElement("li");
        childDiv.setAttribute("class", "savedStep"+count);
        childDiv.innerHTML = "Step "+(step + 1)+": " + steps[step];
        ulStep.appendChild(childDiv);
        step++;

    }
    
})





