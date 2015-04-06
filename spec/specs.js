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

  it("moves qu together to end of word and adds ay", function() {
    expect(pigLatin("quit")).to.equal("itquay");
  });

  it("moves squ together to end of word and adds ay", function() {
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });

  it("ensures that word that starts with u follows vowel rule", function() {
    expect(pigLatin("unusual")).to.equal("unusualay");
  });

});
