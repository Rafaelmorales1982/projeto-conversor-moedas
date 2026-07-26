const convertBtn = document.querySelector("#convert-btn");
const inputCurrency = document.querySelector(".input-currency");
const resultConverted = document.querySelector(".result-converted");

/* Função botão*/
function convertMoney() {
  const dolarToday = 5.2;
  const value  = Number(inputCurrency.value);


  const convertedValue = value  / dolarToday;
  

  resultConverted.innerHTML = convertedValue.toFixed(2);

  // console.log("teste botão");
  //   console.log(inputCurrency.value);
}

convertBtn.addEventListener("click", convertMoney);
