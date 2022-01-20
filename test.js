
describe("function checkPromoCode", function() {
  describe("should return 0", function() {
    it("input value 84533920 should return 0", function() {
      assert.equal(checkPromoCode(84533920), 0);
    });
    it("input value 1 should return 0", function() {
      assert.equal(checkPromoCode(1), 0);
    });
    it("input value 10000000000 should return 0", function() {
      assert.equal(checkPromoCode(10000000000), 0);
    });
    it("input value ABC should return 0", function() {
      assert.equal(checkPromoCode('ABC'), 0);
    }); 
  });
  describe("should return 100", function() {
    it("input value 48183276 should return 100", function() {
      assert.equal(checkPromoCode(48183276), 100);
    });
    it("input value 12121212 should return 100", function() {
      assert.equal(checkPromoCode(48183276), 100);
    });
    it("input value 22222222 should return 100", function() {
      assert.equal(checkPromoCode(22222222), 100);
  });
 
  });
  describe("should return 1000", function() {
    it("input value 73289388 should return 1000", function() {
      assert.equal(checkPromoCode(73289388), 1000);
    });
    it("input value 13381338 should return 1000", function() {
      assert.equal(checkPromoCode(73381338), 1000);
    });
    it("input value 31231231 should return 1000", function() {
      assert.equal(checkPromoCode(31231231), 1000);
    });
  });
  describe("should return 2000", function() {
    it("input value 37283988 should return 2000", function() {
      assert.equal(checkPromoCode(37283988), 2000);
    });
    it("input value 35235235 should return 2000", function() {
      assert.equal(checkPromoCode(35235235), 2000);
    });
    it("input value 17788177 should return 2000", function() {
      assert.equal(checkPromoCode(17788177), 2000);
    });
  });

});
  