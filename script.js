const convertBtn = document.querySelector("#convert-btn");
const inputCurrency = document.querySelector(".input-currency");
const resultConverted = document.querySelector(".result-converted");
const valueReal = document.querySelector(".value-real");

const currencySelect = document.querySelector(".currency-select");
const imgFlag = document.querySelector(".img-flag");

const nameChange = document.querySelector(".name-change");

/* Função botão*/
async function convertMoney() {
  //  console.log(currencySelect.value);

  // Faz uma requisição HTTP para a AwesomeAPI.
  // A API retorna a cotação atual do Dólar (USD) e do Euro (EUR)
  // em relação ao Real (BRL).
  const response = await fetch(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL",
  );

  // Converte a resposta da API (JSON) em um objeto JavaScript.
  // O "await" faz o programa esperar até que a conversão seja concluída.
  const data = await response.json();

  const dolarToday = Number(data.USDBRL.bid);

  const euroToday = Number(data.EURBRL.bid);

  

  const value = Number(inputCurrency.value);

  if (currencySelect.value === "dolar") {
    resultConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value / dolarToday);
  }

  if (currencySelect.value === "euro") {
    resultConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(value / euroToday);
  }

  valueReal.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  // console.log("teste botão");
  //   console.log(inputCurrency.value);
}

convertBtn.addEventListener("click", convertMoney);

// Muda bandeira
function changeCurrency() {
  if (currencySelect.value === "dolar") {
    nameChange.innerHTML = "Dólar Americano";
    imgFlag.src = "./assets/img/logo-estados-unidos.png";
  }

  if (currencySelect.value === "euro") {
    nameChange.innerHTML = "Euro";
    imgFlag.src = "./assets/img/logo-euro.png";
  }
  convertMoney();
}

currencySelect.addEventListener("change", changeCurrency);
