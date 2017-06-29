describe('isOdd Method', function() {
  it('Correctly says 0 is NOT odd', function(done) {
    if(isOdd(0)) {
      throw new Error('Expected 0 to NOT be odd.');
    }
    done();
  });
  it('Correctly says 1 is odd', function(done) {
    if(!isOdd(1)) {
      throw new Error('Expected 1 to be odd.');
    }
    done();
  })
});