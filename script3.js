// Rewrite the expression whose result is assigned to message using a template string.
// Indicate this template string in the response. Example response: `Hello!`

let energy = 5
let name = "Robo"
// let message = name + " имеет " + energy + " единиц энергии"
let message = `${name} имеет ${energy} единиц энергии`

console.log(message)

