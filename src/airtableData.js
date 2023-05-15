import Airtable from 'airtable'
import tarotCardImage1 from './images/tarotcard1.png'
import tarotCardImage2 from './images/tarotcard2.png'
import tarotCardImage3 from './images/tarotcard3.png'

const token =
  'patTX1cwSKVpDKQ63.5bd9c7552485e54487c6e17913b4e7f0e68bfedf725a360c2d80673b4fdf9d27'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

const base = Airtable.base('appcttjzPgvmm4Gdx')

//карты таро для генерации карточек

function getTarotCards() {
  return new Promise((resolve, reject) => {
    let images = [tarotCardImage1, tarotCardImage2, tarotCardImage3]
    const tarotCardsMajorArcana = []
    base('TarotCards')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          tarotCardsMajorArcana.push({
            color: record.fields['color'],
            emoji: record.fields['emoji'],
            line1: record.fields['line1'],
            line2: record.fields['line2'],
            none: eval(record.fields['none']),
            image: eval(record.fields['image']),
            id: record.fields['id']
          })
        })

        resolve(tarotCardsMajorArcana)
      })
  })
}

function getSearchData() {
  return new Promise((resolve, reject) => {
    let images = [tarotCardImage1, tarotCardImage2, tarotCardImage3]
    const tarotCardsMajorArcana = []
    base('Articles')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          tarotCardsMajorArcana.push({
            title: record.fields['Заголовок'],
            description: record.fields['Описание'],
            id: record.fields['id']
          })
        })
        resolve(tarotCardsMajorArcana)
      })
  })
}

//все базы для поиска

// async function getSearchData(lines) {
//   return new Promise((resolve, reject) => {
//     const searchData = []

//     base('Articles')
//       .select({ maxRecords: 100 })
//       .firstPage()
//       .then((result) => {
//         result.forEach((record) => {
//           searchData.push({
//             title: record.fields['Заголовок'],
//             description: record.fields['Описание'],
//             id: record.fields['id']
//           })
//         })
//         resolve(searchData)
//       })

//     base('FortuneTellings')
//       .select({ maxRecords: 100 })
//       .firstPage()
//       .then((result) => {
//         result.forEach((record) => {
//           searchData.push({
//             title: record.fields['line1'],
//             description: record.fields['line2'],
//             id: record.fields['id']
//           })
//         })
//         resolve(searchData)
//       })

//     base('TarotCards')
//       .select({ maxRecords: 100 })
//       .firstPage()
//       .then((result) => {
//         result.forEach((record) => {
//           searchData.push({
//             title: record.fields['line1'],
//             description: record.fields['line2'],
//             id: record.fields['id']
//           })
//         })
//         resolve(searchData)
//       })

//     console.log(searchData)
//   })
// }

export { getTarotCards }
export { getSearchData }
