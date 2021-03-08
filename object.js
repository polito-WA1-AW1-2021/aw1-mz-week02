let persona = {
  nome: "Luigi",
  cognome: "De Russis",
};
let persona3 = {
  name: "Mario",
  surname: "Rossi",
};
persona["eta"] = 37;

/*for (const chiave in persona) {
  console.log(`${chiave} è ${persona[chiave]}`);
}

for (let [c, v] of Object.entries(persona)) {
  console.log(c + ' è ' + v);
}*/

altraPersona = Object.assign({}, persona);
nuovaPersona = Object.assign({}, persona3, persona);
persona2 = Object.assign(persona3, persona);

console.log(persona3);
console.log(nuovaPersona);