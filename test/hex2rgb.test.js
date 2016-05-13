var hex2rgb = require("../lib/hex2rgb"); 
var assert = require("assert");
var expect = require("chai").expect;

describe.only("hex2rgb", function(){

   it("should return an error if the value is not a hex code", function(done){
      hex2rgb("blue", function(error, result){
      expect(error).to.exist;
      done();	

      });
  }); 
                  
 
   it("should return a correctly converted rgb value", function(done){
     hex2rgb("#fff", function(error, result) {
       assert.strictEqual(error, null);
       assert.deepEqual(result, [255, 255, 255]);
       done();
     });

   });

});   