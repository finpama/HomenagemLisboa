const funcDrop = document.querySelector('.funcDrop')
const nameDrop = document.querySelector('.nameDrop')
const bt = document.querySelector('.bt')

const nomes = {
  Professor: {
    Damon: "site_damon.html",
    Kátia: "site_katia.html",
    Thaiany: "site_thaiany.html",
    Luciana : "site_luciana.html",
    Roseli : "site_roseli.html",
    Alessandra  : "site_alessandra.html",
    Michele : "site_michele.html",
    Cândida  : "site_candida.html",
    Ceci  : "site_ceci.html",
    Cristiane  : "site_cris.html",
    Fabiana  : "site_fabiana.html",
    Gislaine  : "site_gislaine.html",
    Jéssica  : "site_jessica.html",
    Josiane  : "site_josiane.html",
    Marinalva  : "site_marinalva.html",
    Selma  : "site_selma.html",
    Sônia  : "site_sonia.html",
    Abner  : "site_abner.html",
    Anderson  : "site_anderson.html",
    Bruno  : "site_bruno.html",
    Claubio  : "site_sadao.html",
    David  : "site_david.html",
    Pacheco  : "site_pacheco.html",
  }

}

function setList() {
  const form = document.querySelector('.form')
 
  const datalist = document.createElement("datalist")
  datalist.id = 'names'
  
  const func = funcDrop.value
  
  for (const nome in nomes[func]) {
    const option = document.createElement("option")
    option.innerHTML = nome
    datalist.appendChild(option)
  }
     
  form.appendChild(datalist)
  
  
}

function visit() {
  if (funcDrop.value == 'Visitante' && nameDrop.value != '') {
    window.location.href = ('site_Visitante.html')

  } else if (funcDrop.value == 'Visitante' && nameDrop.value == '') {
    alert('Por gentileza, insira um nome...')

  } else if (funcDrop.value == 'Dev' ||  funcDrop.value == 'Professor' && nameDrop.value != '') {
    window.location.href = (nomes[funcDrop.value][nameDrop.value])

  } else if (funcDrop.value == 'Dev' ||  funcDrop.value == 'Professor'&& nameDrop.value == '') {
    alert('Por gentileza, escolha um nome...')

  }else if (funcDrop.value == '' ) {
    alert('Por gentileza, insira os dados...')
  }
}



funcDrop.addEventListener('change', (e) => {
  const datalist = document.querySelector("#names")
  if (datalist) { datalist.remove() }
  
  setList()
  
  nameDrop.focus()
})


funcDrop.addEventListener('focus', e => {
  const datalist = document.querySelector("#names")
  if (datalist) { datalist.remove() }
  
  funcDrop.value = ""
  nameDrop.value = ""
})

nameDrop.addEventListener('focus', e => {
  nameDrop.value = ""
})


bt.addEventListener('click', (e) => {
  visit()
})

document.addEventListener("keypress", (e) => {

  if (e.key === "Enter") {
    visit()
  }
})

funcDrop.focus()
