const form = document.querySelector("#form")
function numCompare(numeroUm, numeroDois){
  return numeroDois > numeroUm
}
form.addEventListener('submit', function(e){
  e.preventDefault()
  let [numeroUm, numeroDois] = [parseFloat(document.querySelector("#num-one").value), parseFloat(document.querySelector("#num-two").value)]
  const mensagem = numCompare(numeroUm, numeroDois) === true ? "O número do campo B é maior! Positivo" : "O número do campo A é maior ou igual ao campo B! Negativo"
  alert(mensagem)
})