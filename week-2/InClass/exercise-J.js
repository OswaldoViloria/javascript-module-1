function secondMatchesAmy(array) {
  if (array[1] === "Amy" ) {
    return "Second index matched!";
  }
  return "Second index not matched";
}
const names = ["Oswaldo", "Amy", "Francisco", "Mirna"]
console.log(secondMatchesAmy(names));