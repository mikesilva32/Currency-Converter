const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

// Função para converter valores de moeda
function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//Valor em REal
  const currencyValueConverted = document.querySelector(".currency-value")//Outras moedas


 
  console.log(currencySelect.value)
  const dolarToday = 5.2
  const euroToday = 6.2
  const libraToday = 7.5
  const bitcoinToday = 661927.77 // Valor fictício para o Bitcoin, ajuste conforme necessário
  const realToday = 1 // Valor fictício para o Real, ajuste conforme necessário 

  if (currencySelect.value === "dolar") { // Se o select estiver selecionado o valor de dolar , entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"

    }).format(inputCurrencyValue / dolarToday) //Formata o valor em Dolar

  }
  if (currencySelect.value == "euro") { // Se o select estiver selecionado o valor de euro , entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday) //Formata o valor em Euro
  }
  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday)

  }


  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"


    }).format(inputCurrencyValue / bitcoinToday)

  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue) //Formata o valor em Real

  








}
function currencyChange() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/dolar.png"
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "libra"
    currencyImage.src = "./assets/libra.png"
  }
  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
  }
  convertValues()




}

currencySelect.addEventListener("change", currencyChange);
convertButton.addEventListener("click", convertValues);      
