import './articles.css'

// console.log('cardfilter')

// function initFilter() {
//   const allarticlescards = document.getElementById('W_AllArticleCards')
//   const allchildren = allarticlescards.children
//   console.log(allchildren)
//   const Category = document.getElementsByClassName('A_ArticlesСategory')
//   const Compilation = document.getElementsByClassName('M_ArticlesCompilation')
//   const CardSmall = document.getElementsByClassName('M_CardArticle')
//   const CardBig = document.getElementsByClassName('M_ArticleCardBig')
//   const datacards = document.querySelector('[data-type="Cards"]')
//   console.log(datacards)
//   const datadecks = document.querySelector('[data-type="Decks"]')
//   console.log(Category)

//   for (let i = 0; i < Category.length; i++) {
//     Category[i].addEventListener('click', function () {
//       console.log(this.innerHTML)
//       console.log('click')
//       if (this.innerHTML == 'все статьи') {
//         console.log('all')
//         for (let b = 0; b < Compilation.length; b++) {
//           Compilation[b].classList.add('NotShowing')
//         }
//         for (let b = 0; b < CardSmall.length; b++) {
//           CardSmall[b].classList.remove('NotShowing')
//         }
//         for (let b = 0; b < CardBig.length; b++) {
//           CardBig[b].classList.remove('NotShowing')
//         }
//       }

//       if (this.innerHTML == 'все подборки') {
//         console.log('подборки')
//         for (let b = 0; b < Compilation.length; b++) {
//           Compilation[b].classList.remove('NotShowing')
//         }
//         for (let b = 0; b < CardSmall.length; b++) {
//           CardSmall[b].classList.add('NotShowing')
//         }
//         for (let b = 0; b < CardBig.length; b++) {
//           CardBig[b].classList.add('NotShowing')
//         }
//       }
//       if (this.innerHTML == 'о картах') {
//         console.log('карты')

//         for (let b = 0; b < allchildren.length; b++) {
//           allchildren[b].classList.add('NotShowing')
//         }
//         for (let b = 0; b < datacards.length; b++) {
//           datacards[b].classList.remove('NotShowing')
//         }
//       }

//       for (let i = 0; i < Category.length; i++) {
//         Category[i].classList.remove('Underlined')
//       }
//       this.classList.add('Underlined')
//     })
//   }
//   //   [...document.getElementsByClassName('A_ArticlesCategory')].forEach((i) => {
//   //     i.addEventListener('click', function () {
//   //       console.log('click')
//   //       console.log(Category.innerHTML)
//   //       i.classList.add('.Underlined')
//   //     })
//   //   })
// }

// document.addEventListener('DOMContentLoaded', () => {
//   initFilter()
// })
