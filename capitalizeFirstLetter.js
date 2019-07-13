// capitalizeFirstLetter.js

function capitalizeFirstLetter(input) {
  return input.length > 0
    ? input[0].toUpperCase() + input.slice(1)
    : '';
}
//ne pas toucher
module.exports = capitalizeFirstLetter;
