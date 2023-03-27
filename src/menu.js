console.log('ready')

function initSelect() {
  const Search = document.querySelector('.A_Search')
  const SearchBox = document.querySelector('.M_SearchBox')

  Search.addEventListener('focus', () => {
    console.log('focus')
    SearchBox.classList.add('M_SearchBoxActive')
  })
  Search.addEventListener('blur', () => {
    console.log('focus')
    SearchBox.classList.remove('M_SearchBoxActive')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initSelect()
})
