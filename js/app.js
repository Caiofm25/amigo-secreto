let amigos = [];
let savedAmigosLast = [];

function verifyEqual(arr1, arr2) {
    if (arr1.join(", ").toLowerCase() !== arr2.join(", ").toLowerCase()) {
      return false
    }
  return true
}

function adicionar() {
  let amigo = document.getElementById("nome-amigo")
  let lista = document.getElementById("lista-amigos")
  if (amigo.value.trim() === "") {
    alert("Por favor, insira o nome de um amigo")
    return
  } else if (amigos.includes(convCapitalize(amigo.value))) {
    alert("Amigo já adicionado")
    return
  }
    amigos.push(convCapitalize(amigo.value))
    
    if (lista.textContent == "") {
      lista.textContent = convCapitalize(amigo.value)
    } else {
      lista.textContent += `, ${convCapitalize(amigo.value)}`
    }
    amigo.value = ""
}

function sortear() {
  if (amigos.length === 0) {
    alert ("Por favor, adicione amigos")
    return
  } else if (amigos.length < 4) {
    alert ("Adicione pelo menos 4 amigos")
    return
  }
  savedAmigosLast = [...amigos];
  embaralha(amigos)
  while (amigos.length > 1 && verifyEqual(amigos, savedAmigosLast)) {
    embaralha(amigos)
  }
  document.getElementById("lista-sorteio").innerHTML = ""

  for (let i = amigos.length; i; i--)
    if (i == 1) {
      document.getElementById("lista-sorteio").innerHTML += `${amigos[i - 1]} --> ${amigos[amigos.length - 1]}`
    } else {
      document.getElementById("lista-sorteio").innerHTML += `${amigos[i - 1]} --> ${amigos[i - 2]}<br>`
    }
  }
  
  function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
      const indiceAleatorio = Math.floor(Math.random() * indice);
      
      // atribuição via destructuring
      [lista[indice - 1], lista[indiceAleatorio]] = 
    [lista[indiceAleatorio], lista[indice - 1]];
  }
}

function reiniciar() {
  amigos = []
  savedAmigosLast = [];
  document.getElementById("nome-amigo").value = ""
  document.getElementById("lista-sorteio").innerHTML = ""
  document.getElementById("lista-amigos").textContent= ""
}

function convCapitalize(str) {
  str = str.split(" ")
  let strConv = ""
  str.forEach((element, i) => {
    element = element.trim();
    if (i < str.length - 1) {
      strConv += element.charAt(0).toUpperCase() + element.substring(1).toLowerCase() + " "
    } else {
      strConv += element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
    }
  });
  return strConv
}
