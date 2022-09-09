const names = [ "Miguel" ,"Natalia" ,"Wiston", "Gabriel", "Andrea", "Mirna", "Oswaldo" ]

const myName = names.find((arraysName) => arraysName === "Oswaldo")

if (myName) {
    return console.log("Found me!");
} else {
    return console.log("Haven't found me :(");
}

