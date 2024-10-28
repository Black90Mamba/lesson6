
console.log(validator)
console.log(validator.isEmail("pepik@seznam.cz"))

const email = prompt("Zadej e-mail")

if(validator.isEmail(email)) {
    document.body.innerHTML = "<h1>Vitej na strance!</h1>"
} else {
    document.body.innerHTML = "<h1>Spatne zadany e-mail!</h1>"
}


console.log(validator.isEmail("pepik@seznam.cz"))
console.log(validator.isMobilePhone("111 222 333", "cs-CZ"))
console.log(validator.isMobilePhone("11122233", "cs-CZ"))
console.log(validator.isPostalCode("16900", "CZ"))

const cas = new Date()
console.log(cas.getDay())
console.log(cas.getHours())
console.log(cas.getTime())

const cas2 = dayjs()
console.log(cas2)
console.log(cas2.format("DD-MM-YYYY"))
console.log(cas2.format("MM/DD/YYYY"))

const novyRok = dayjs("2025-01-01")
console.log(novyRok)
console.log(cas2.isAfter(novyRok))

const ahoj = (jmeno, idZamestnance) => {
  console.log(`Ahoj uzivateli ${jmeno} - ${idZamestnance}`)
}

const nasobeni = (cislo1, cislo2) => {
  return cislo1 * cislo2
}

const spravneTelCislo = (tel) => {
  if(validator.isMobilePhone(tel, "cs-CZ")) {
      return true
  } else {
      return false
  }
}

ahoj("Michal", 123)
ahoj("Jana", 12)
ahoj("Erik", 3)
ahoj("Lucie", 1234)

console.log(nasobeni(10, 10))
console.log(spravneTelCislo("123456789"))

const bezpecneHeslo = (heslo) => {
  if(heslo.length >= 16 && heslo.contains("@")) {
      return true
  }

  return false
}

const heslo = prompt("Zadej heslo")

if(bezpecneHeslo(heslo)) {
  console.log("Super!")
} else {
  console.log("Nebezpecne heslo")
}
