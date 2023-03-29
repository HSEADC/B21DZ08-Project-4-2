console.log('ready')
const search = document.querySelector('.A_Search')
const searchBox = document.querySelector('.M_SearchBox')
const wrapperSearch = document.createElement('div')
const itemSearch = document.createElement('div')
const itemText = document.createElement('div')

function initSelect() {
  wrapperSearch.classList.add('W_SearchItems')

  search.addEventListener('focus', () => {
    console.log('focus')
    searchBox.classList.add('M_SearchBoxActive')
    searchBox.appendChild(wrapperSearch)
  })

  search.addEventListener('blur', () => {
    console.log('focus')
    searchBox.classList.remove('M_SearchBoxActive')
    searchBox.removeChild(wrapperSearch)
    searchBox.classList.remove('Modify')
  })

  search.addEventListener('input', () => {
    console.log('инпут лисенер')
    searchBox.classList.add('Modify')
    createElem('fregker', wrapperSearch)
    console.log('gvhj')
  })
}

function createElem(title, parentname) {
  itemSearch.classList.add('M_SearchItem')
  parentname.appendChild(itemSearch)
  itemSearch.appendChild(itemText)
  itemSearch.classList.add('A_Subtitle')
  itemSearch.innerText = title
  console.log('gvfrfhj')
}

document.addEventListener('DOMContentLoaded', () => {
  initSelect()
})
