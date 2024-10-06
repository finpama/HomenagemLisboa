const funcDrop = document.querySelector('.funcDrop')
const nameDrop = document.querySelector('.nameDrop')
const bt = document.querySelector('.bt')

const nomes = {
  Professor: {
    damon: "https://www.google.com/search?q=damon",
    katia: "https://www.google.com/search?q=katia",
  },
  Dev: {
    pedro: "https://www.google.com/search?q=pedro",
    gui: "https://www.google.com/search?q=gui",
    ket: "https://www.google.com/search?q=ket",
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

  if (funcDrop.value == 'Visitante' && nameDrop.value != '') {
    window.open('https://www.google.com/search?q=Visitante')

  } else if (funcDrop.value == 'Visitante' && nameDrop.value == '') {
    alert('Por gentileza, insira um nome...')

  } else if (funcDrop.value == 'Dev' ||  funcDrop.value == 'Professor' && nameDrop.value != '') {
    window.open(nomes[funcDrop.value][nameDrop.value])

  } else if (funcDrop.value == 'Dev' ||  funcDrop.value == 'Professor'&& nameDrop.value == '') {
    alert('Por gentileza, escolha um nome...')

  }else if (funcDrop.value == '' ) {
    alert('Por gentileza, insira os dados...')
  }

})

funcDrop.focus()