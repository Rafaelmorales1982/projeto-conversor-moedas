const convertBtn = document.querySelector("#convert-btn");
const inputCurrency = document.querySelector(".input-currency");
const currencyConverted = document.querySelector(".result-converted");

/* Função botão*/
function convertMoney() {
  const dolarToday = 5.2;
  const value  = Number(inputCurrency.value);


  const convertedValue = value  / dolarToday;
  

  currencyConverted.innerHTML = convertedValue.toFixed(2);

  // console.log("teste botão");
  //   console.log(inputCurrency.value);
}

convertBtn.addEventListener("click", convertMoney);
