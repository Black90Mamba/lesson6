console.log(validator);
console.log(validator.isEmail("petra@seznam.cz"));


const email = prompt("Zadej e-mail");

if (validator.isEmail(email)) {
    document.body.innerHTML = "<h1>Vítej na stránce!</h1>";
} else {
    document.body.innerHTML = "<h1>Špatně zadaný e-mail!</h1>";
}

function validateEmail() {
  const emailInput = document.querySelector("#email").value;
  const message = document.querySelector("#message");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput)) {
      message.textContent = "E-mail je platný.";
      message.className = "msg--valid";
    
  } else {
      message.textContent = "E-mail je neplatný.";
      message.className = "msg--invalid";
  
  }
}


  console.log(validator.isCreditcard("4125010001000208", "CZ"))
