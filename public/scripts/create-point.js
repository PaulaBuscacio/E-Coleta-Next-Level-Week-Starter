

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json())
    .then(states => {

        for( state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

        
    })
}

populateUFs();

function getCities (event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true;

    fetch(url)
    .then( res => res.json() )
    .then(cities => {

       for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false;
    })
}

document
       .querySelector("select[name=uf]")
       .addEventListener("change", getCities)

//Itens de coleta
//pegar todos os li

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    
    const itemLi = event.target

     //add or remove class in js
     itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    //console.log('ITEM ID: ', itemId)




//verificar se existem ítens selecionados, se sim, pegá-los. 
//Sejá estiver selecionado, tirar da seleção

    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId
        return itemFound
       
    })
//Se já estiver selecionado
    if(alreadySelected >= 0) {
//tirar da seleção
    const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
    //Se não, adicionar à seleção
        selectedItems.push(itemId)

    }

    //console.log('selectedItems: ', selectedItems)
//atualizar o campo escondido com os ítens selecionados
  collectedItems.value = selectedItems;
}