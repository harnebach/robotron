const lista = document.getElementById("lista")

function mostraTintas() {
  if (lista.classList.contains("lista_show")) {
    lista.classList.remove("lista_show")
  } else {
    lista.classList.add("lista_show")
  }
}