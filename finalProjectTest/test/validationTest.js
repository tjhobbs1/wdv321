var assert =chai.assert;

//Test Recipe Name Field
describe("Recipe Name Input Test", function(){
	it("Empty Field/Null Field/Undefinded should return False", function(){
        assert.isFalse(checkRecipeName(''));
        assert.isFalse(checkRecipeName('    '));
        assert.isFalse(checkRecipeName(null));
        assert.isFalse(checkRecipeName(undefined));
        	
    });

});

//Test Num Of Servings Field
describe("Num of Servings Input Test", function(){
	it("Empty Field/Null Field/Undefinded should return False", function(){
        assert.isFalse(checkServing(''));
        assert.isFalse(checkServing('    '));
        assert.isFalse(checkServing(null));
        assert.isFalse(checkServing(undefined));
       
    });

    it("A alpha character or negative char should return False", function(){
        assert.isFalse(checkServing("a"));
        assert.isFalse(checkServing("1a"));
        assert.isFalse(checkServing("a2"));
        assert.isFalse(checkServing("abg1"));
        assert.isTrue(checkServing("1"));
        assert.isTrue(checkServing("12"));
        assert.isTrue(checkServing("123"));
        assert.isFalse(checkServing("-1"));
        assert.isFalse(checkServing(-1));
        assert.isFalse(checkServing(-.5));
        assert.isTrue(checkServing(1));
        assert.isTrue(checkServing(12));
        assert.isTrue(checkServing(123));
        assert.isTrue(checkServing('1/4'));
        assert.isTrue(checkServing('1 1/4'));
        assert.isFalse(checkServing('-1/4'));
        assert.isFalse(checkServing('-1 1/4'));
        assert.isTrue(checkServing(0.5));

    });

});


//Test Prep Time Field
describe("Prep Time Input Test", function(){
	it("Empty Field/Null Field/Undefinded should return False", function(){
        assert.isFalse(checkPrepTime(''));
        assert.isFalse(checkPrepTime('    '));
        assert.isFalse(checkPrepTime(null));
        assert.isFalse(checkPrepTime(undefined));
       
    });

    it("A alpha character or negative char should return False", function(){
        assert.isFalse(checkPrepTime("a"));
        assert.isFalse(checkPrepTime("1a"));
        assert.isFalse(checkPrepTime("a2"));
        assert.isFalse(checkPrepTime("abg1"));
        assert.isTrue(checkPrepTime("1"));
        assert.isTrue(checkPrepTime("12"));
        assert.isTrue(checkPrepTime("123"));
        assert.isFalse(checkPrepTime("-1"));
        assert.isFalse(checkPrepTime(-1));
        assert.isTrue(checkPrepTime(1));
        assert.isTrue(checkPrepTime(12));
        assert.isTrue(checkPrepTime(123));
    });

});

//Test Prep Time Drop Down for no value
describe("Prep Time Value Drop Down Input Test", function(){
	it("Empty Field/Null Field/Undefinded should return False", function(){
        assert.isFalse(checkPrepTimeValue(''));
        assert.isFalse(checkPrepTimeValue('    '));
        assert.isFalse(checkPrepTimeValue(null));
        assert.isFalse(checkPrepTimeValue(undefined));
       
    });


});

describe("Check Amount Field", function(){
	it("Empty Field/Null Field/Undefinded should return False", function(){
        assert.isFalse(checkAmount(''));
        assert.isFalse(checkAmount('    '));
        assert.isFalse(checkAmount(null));
        assert.isFalse(checkAmount(undefined));
       
    });
    it("A alpha character or negative char should return False", function(){
        assert.isFalse(checkServing("a"));
        assert.isFalse(checkServing("1a"));
        assert.isFalse(checkServing("a2"));
        assert.isFalse(checkServing("abg1"));
        assert.isTrue(checkServing("1"));
        assert.isTrue(checkServing("12"));
        assert.isTrue(checkServing("123"));
        assert.isFalse(checkServing("-1"));
        assert.isFalse(checkServing(-1));
        assert.isFalse(checkServing(-.5));
        assert.isTrue(checkServing(1));
        assert.isTrue(checkServing(12));
        assert.isTrue(checkServing(123));
        assert.isTrue(checkServing('1/4'));
        assert.isTrue(checkServing('1 1/4'));
        assert.isFalse(checkServing('-1/4'));
        assert.isFalse(checkServing('-1 1/4'));
        assert.isTrue(checkServing(0.5));

    });
});

describe("Ingredient Unit Drop Down Value Drop Down Input Test", function(){
	it("Empty Field/Null Field/Undefinded should return False", function(){
        assert.isFalse(checkIngredUnitDropdown(''));
        assert.isFalse(checkIngredUnitDropdown('    '));
        assert.isFalse(checkIngredUnitDropdown(null));
        assert.isFalse(checkIngredUnitDropdown(undefined));
       
    });


});


describe("Check Ingredient Field for Blank", function(){
	it("Empty Field/Null Field/Undefinded should return False", function(){
        assert.isFalse(checkIngredient(''));
        assert.isFalse(checkIngredient('    '));
        assert.isFalse(checkIngredient(null));
        assert.isFalse(checkIngredient(undefined));
       
    });


});

describe("Check Step Field Field for Blank", function(){
	it("Empty Field/Null Field/Undefinded should return False", function(){
        assert.isFalse(checkStep(''));
        assert.isFalse(checkStep('    '));
        assert.isFalse(checkStep(null));
        assert.isFalse(checkStep(undefined));
       
    });


});





