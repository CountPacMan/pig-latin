function pigLatin(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  var consonants = 'bcdfghjklmnpqrstvwxyz';

  if ($.inArray(word[0], vowels) !== -1) {
    return word + "ay";
  } else if ($.inArray(word[0], consonants) !== -1) {
    do {
      word = word.substring(1) + word[0];
    } while ($.inArray(word[0], vowels) === -1);
    return word + "ay";
  }


}

jQuery(document).ready(function() {



  event.preventDefault();



});
