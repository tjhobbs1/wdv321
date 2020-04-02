var assert =chai.assert;

describe("Email Address Testing", function(){
	
	it("Empty Field/Null Field/Undefinded should return False", function(){
        assert.isFalse(validEmail(''));
        assert.isFalse(validEmail('    '));
        assert.isFalse(validEmail(null));
        assert.isFalse(validEmail(undefined));
        	
    });
    it("Test for a Valid Email Address", function(){
        assert.isTrue(validEmail("tjhobbs1@gmail.edu"));
        assert.isTrue(validEmail("bob@aol.com"));
        assert.isTrue(validEmail("Pete@dmacc.edu"));
        assert.isTrue(validEmail("bob@usda.gov"));
        assert.isTrue(validEmail("bob@aol.biz"));
        assert.isTrue(validEmail("jim@gmail.thisisatest"));
        
        assert.isFalse(validEmail("ty"));
        assert.isFalse(validEmail("ty@"));
        assert.isFalse(validEmail("ty@gmail."));
        assert.isFalse(validEmail("@gmail.com"));
        assert.isFalse(validEmail("@gmail"));
        assert.isFalse(validEmail("gmail"));
    });
	
	
	
});	//end "Testing Input Required"

describe("Testing Valid For Valid Zip Code", function(){
	it("Input is required",function(){
		assert.isFalse(validZip(null));
		assert.isFalse(validZip());
		assert.isFalse(validZip(undefined));
    });
    
    it("Valid Zip Code",function(){
        assert.isTrue(validZip(50023));
        assert.isTrue(validZip(50023-1234));
        assert.isFalse(validZip(5));
        assert.isFalse(validZip(50));
        assert.isFalse(validZip(500));
        assert.isFalse(validZip(5002));
        assert.isFalse(validZip("50023-"));
        assert.isFalse(validZip("50023-1"));
        assert.isFalse(validZip("50023-12"));
        assert.isFalse(validZip("50023-123"));
        assert.isFalse(validZip("50023-1aaa"));
        assert.isFalse(validZip("A0023-1aaa"));
        assert.isFalse(validZip("50023-aaaa"));
        assert.isFalse(validZip("abcd"));
        assert.isFalse(validZip("abcde-fghi"));  
		
	});
	
	
});// End Zip Code Testing 

describe("Testing Valid For Replacing Character", function(){
	it("Input is required",function(){
		assert.isFalse(replaceChar(null));
		assert.isFalse(replaceChar());
		assert.isFalse(replaceChar(undefined));
    });
    
    it("Replace Character",function(){
        assert.equal(replaceChar("Ty's"),"Ty-s")
        assert.equal(replaceChar("'"),"-")
        assert.equal(replaceChar("/"),"-")
        assert.equal(replaceChar("<"),"-")
        assert.equal(replaceChar(">"),"-")
        assert.equal(replaceChar("<>/"),"---")
        assert.equal(replaceChar("It/s <h1>"),"It-s -h1-")
        
		
	});
	
	
});// End Replacement Testing
