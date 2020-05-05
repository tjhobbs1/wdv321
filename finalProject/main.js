

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

 
//Reference Collection
var database = firebase.firestore();

var rootRef = firebase.database().ref().child("contactData")

//Variable to track Num of steps added
let count = 1;

//Variable to track ingred
let ingredCount = 1;



//Listen for form submit
document.getElementById('theForm').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
    //Prevent the default behavior
    e.preventDefault();

    //Count for while loop for steps to add to array
    let stepCount = (count);
 
    //Get Values
    let name = getInputVal('name');
    let numOfServings = getInputVal('numOfServings');
    let prepTime = getInputVal('prepTime');
    let timeSelect = getInputVal('timeSelect');
    let description = getInputVal('description');
    let ingredDict = getIngred();
    
    
    let steps = []
    
    //Array to obtain steps values. 
    counter = 1;
    while(counter != stepCount){
        let step = document.getElementById('step'+counter).value;
        steps.push(step);
        counter++;
    }

    checkPrepTimeValue(timeSelect)
    

    if(checkPrepTimeValue(timeSelect)){
        const db = database.collection("contactData");

    db.add({
        name : name,
        numOfServings : numOfServings,
        prepTime : prepTime,
        timeSelect : timeSelect,
        description : description,
        ingredDict : ingredDict,
        steps : steps

    })
    .then(function(docRef) {
        console.log("data saved");
        localStorage.id = docRef.id;
        
        window.location.href = "success.html";
    })
    .catch(function (error) {
        console.log(error);
    })
    }
}



//Function to add Ingredients

function addIngredient(){
   
    //Get Values from fields
    let amount = document.getElementById("amount").value;
    let unit = document.getElementById("unit").value;
    let ingred = document.getElementById("ingred").value;

    let checkinAmountField = checkAmount(amount);
    let checkDropDown = checkIngredDropDown(unit);
    let checkIngredField = checkIngredient(ingred);
    

    if((checkIngredField == true) && (checkinAmountField == true) && (checkDropDown == true)){
        let parentDiv = document.getElementById('ingredient_fields'); // point to the parent Div
        let childDiv = document.createElement("div"); // create child div on the fly
        childDiv.setAttribute("class", "ingred"+ingredCount); // add a dynamic class to the child div

    childDiv.innerHTML = '<h3>Ingredient '+ingredCount+'</h3>'
                        + '<label for="amount'+ingredCount+'">Amount</label>'
                        +'<input type="text" name="amount'+ingredCount+'" value="'+amount+'" id="amount'+ingredCount+'">'
                        +'<label for="unit'+ingredCount+'">Unit</label><select class="select-css" id="unit'+ingredCount+'" name="unit'+ingredCount+'"><option value="'+unit+'">'+unit+'</option></select>'
                        + '<label for="ingred">Ingredient</label>'
                        +'<input type="text" name="ingred'+ingredCount+'" value="'+ingred+'" id="ingred'+ingredCount+'">';
    
                        
    //Append to parent div
    parentDiv.appendChild(childDiv); 

    //Repopulate the drop down after ingredient is moved
    populateUnitList('unit'+ingredCount);
    let unitVal = document.getElementById('unit'+ingredCount);
    unitVal.value = unit


    //Reset Fields
    amountField = document.getElementById("amount");
    unitField = document.getElementById("unit");
    ingredField = document.getElementById("ingred");

    populateUnitList('unit');

    amountField.value = '';
    unitField.value = '';
    ingredField.value = '';
    populateUnitList('unit');
    ingredCount++;
   

    }

    

    
}

function createDict(count,amount,unit,ingred){
    ingred[count] = {}


    
    

}

//Function to turn Ingred into Dict

function getIngred(){
    numOfIngred = ingredCount;
    ingredDict = {}
    let count1 = 1

    while(count1 != numOfIngred){
        ingredDict[count1] = {}
        let amount = getInputVal('amount'+count1);
        let unit = getInputVal('unit'+count1);
        let ingred = getInputVal('ingred'+count1);

        
        ingredDict[count1]['amount'] = amount;
        ingredDict[count1]['unit'] = unit;
        ingredDict[count1]['ingred'] = ingred;
        count1++
    }
    return ingredDict;
                    }

//Function to add a step

function addStep(){
    //Get Data from step input field
    let step = document.getElementById("step").value;

    let checkInput = checkStep(step)
    
    if(checkInput){
        let parentDiv = document.getElementById('step_fields'); // point to the parent Div
        let childDiv = document.createElement("div"); // create child div on the fly
        childDiv.setAttribute("class", "savedStep"+count); // add a dynamic class to the child div
    

        childDiv.innerHTML = '<label for="step'+count+'">Step '+count+'</label>'
                            +'<input type="text" name="step'+count+'"value="'+step+'" id="step'+count+'">';
        parentDiv.appendChild(childDiv); //  append or inject dynamic fields to the parent div
        count++;

        stepVal = document.getElementById("step");
        stepVal.value = '';
    }

        
    
}

//Function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//Retrive Saved Data

function loadData(){
    let data =[];
    let key = [];
    let str="";
    const db = database.collection("contactData");
    const ref = database.collection('contactData').doc();
    
    
    db.get().then(function(query){
       query.forEach(function (doc){
           data.push(doc.data());
           console.log(doc.data())
           
       });
       data.forEach(doc=>{
           str=str+ doc.name +'  ' + ref.id + '////';
       });
       console.log(str) 
    })
}

var exRef = database.collection('contactData');
var allex = exRef
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
        var EName = doc.data().name;
        var id = doc.id
        
        
       
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });


//Used to populate the units list of ingred
  function populateUnitList(unitList){
    let units = ["Teaspoon","Tablespoon","Fluid Ounces","Cup","Pint","Quart","Gallon","Milliliter","Liter","Pound","Ounce","Mg","Gram","Kg","Milimeter","Centimeter","Meter","Inch","Dash","Pinch"];     
    let unitsSorted = units.sort();
    let sel = document.getElementById(unitList);
        let titleOpt = document.createElement('option');
        titleOpt.innerHTML = "Choose A Unit";
        titleOpt.value = "";
        sel.appendChild(titleOpt);
    
    for(let i = 0; i < unitsSorted.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = unitsSorted[i];
        opt.value = unitsSorted[i];
        sel.appendChild(opt);
    }
}

// database.collection('contactData').get().then((snapshot) =>{
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data())
//     })
// })










