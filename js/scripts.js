function pigLatin(word) {
  var vowels = 'aeiou';
  var consonants = 'bcdfghjklmnpqrstvwxyz';

  if ($.inArray(word[0], vowels) !== -1) {
    // words that start with vowel
    return word + "ay";
  } else if ($.inArray(word[0], consonants) !== -1) {
    // words that start with consonant
    do {
      word = word.substring(1) + word[0];
      // words that start with a consonant and continue with a q
      if (word[word.length - 1] === 'q') {
        // words that continue with a q followed by a u
        if (word[0] === 'u') {
          word = word.substring(1) + word[0];
        }
      }
    } while ($.inArray(word[0], vowels) === -1);
    return word + "ay";
  }
}

jQuery(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    $("#error").empty();
    var word = $("#word").val();

    if (word.search(/[^a-z]/i) !== -1) {
      // word has character that is not a letter (ignore case)
      $("#error").prepend("<p>Only letters allowed</p>");
      $("#result").hide();
    } else {
      var pig_word = pigLatin(word);
      $("#pig_word").text(pig_word);
      $("#result").show();
    }

    event.preventDefault();
  });
});
