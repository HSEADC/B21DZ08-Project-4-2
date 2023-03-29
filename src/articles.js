import './articles.css'

console.log('cardfilter')

function initFilter() {
  const filtername = document.getElementsByClassName('A_ArticlesСategory')
  const allarticlescards = document.getElementById('W_AllArticleCards')
  const allchildren = allarticlescards.children
  console.log(filtername, allchildren)
  for (let i = 0; i < filtername.length; i++) {
    const currentfilter = filtername[i]
    currentfilter.addEventListener('click', function () {
      console.log('clickclock')
      console.log(currentfilter.dataset.type)
      const datafilter = currentfilter.dataset.type
      for (let b = 0; b < allchildren.length; b++) {
        const element = allchildren[b]
        element.classList.add('NotShowing')
        const dataofelem = element.dataset.category
        if (dataofelem.includes(datafilter)) {
          element.classList.remove('NotShowing')
        }
      }
    })
  }
}
document.addEventListener('DOMContentLoaded', () => {
  initFilter()
})
