describe('pigLatin', function() {
  it("adds ay to end for word that starts with a vowel a", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("adds ay to end of word that starts with vowel e", function() {
    expect(pigLatin("earth")).to.equal("earthay");
  });

  it("moves single consonant to end of word and adds ay", function() {
    expect(pigLatin("submarine")).to.equal("ubmarinesay");
  });

  it("moves two consecutive consonants to end of word and adds ay", function() {
    expect(pigLatin("start")).to.equal("artstay");
  });

});
