describe('isOdd Method', function(done) {
  it('Correctly says 0 is NOT odd', function(done) {
    console.assert(!isOdd(0));
    done();
  });
  it('Correctly says 2 is odd', function(done) {
    console.assert(isOdd(2));
    done();
  })
});