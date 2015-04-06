describe('pigLatin', function() {
  it("adds ay to end for word that starts with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

});
