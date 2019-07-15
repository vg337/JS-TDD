// capitalizeFirstLetter.js

function capitalizeFirstLetter(input) {
  var chaine = input.split(" ");
  return chaine.map(function(majMot){
    majMot[0].toUpperCase() + majMot.slice(1);
    return majMot;
  });
  .join(" ");
}
//ne pas toucher
module.exports = capitalizeFirstLetter;
