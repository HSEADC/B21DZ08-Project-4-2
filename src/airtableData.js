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
    const tarotCards = []
    base('TarotCards')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          let none = false
          if (record.fields['line1'] == undefined) {
            none = true
          }
          let texttype = 'Emoji'
          let icon = record.fields['icon']
          if (
            icon.includes('I') ||
            icon.includes('V') ||
            icon.includes('X') ||
            icon.includes('L') ||
            icon.includes('C')
          ) {
            texttype = 'Antiqua'
          }

          let color = 'pink'
          if (record.fields['arcana'] == 'major') {
            color = 'black'
          }

          let link = 'cards/' + record.fields['htmlPage'] + '.html'
          tarotCards.push({
            htmlname: record.fields['htmlPage'],
            color,
            arcana: record.fields['arcana'],
            emoji: record.fields['icon'],
            line1: record.fields['line1'],
            line2: record.fields['line2'],
            none,
            link,
            image: record.fields['image'][0]['url'],
            id: record.fields['id'],
            texttype,
            name: record.fields['name'],
            basics: record.fields['basics'],
            love: record.fields['love'],
            work: record.fields['work'],
            advice: record.fields['advice'],
            basicMeaning: record.fields['basicMeaning'],
            loveTelling: record.fields['loveTelling'],
            answer: record.fields['answer'],
            cardOfTheDay: record.fields['cardOfTheDay'],
            adviceLong: record.fields['adviceLong'],
            history: record.fields['history']
          })
        })

        resolve(tarotCards)
      })
  })
}

function getFortuneTellings() {
  return new Promise((resolve, reject) => {
    const fortuneTellings = []
    base('fortuneTellings')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          let link = 'cards/' + record.fields['htmlPage'] + '.html'
          fortuneTellings.push({
            color: 'black',
            line1: record.fields['line1'],
            line2: record.fields['line2'],
            image: record.fields['image'][0]['url'],
            link,
            id: record.fields['id'],
            emoji: record.fields['icon'],
            none: false,
            texttype: 'Emoji'
          })
        })
        resolve(fortuneTellings)
      })
  })
}

//все базы для поиска

async function getSearchData() {
  let counter = 0
  return new Promise((resolve, reject) => {
    const searchData = []

    base('Articles')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          let link = 'articles/' + record.fields['htmlPage'] + '.html'
          searchData.push({
            title: record.fields['Заголовок'],
            description: record.fields['Описание'],
            id: record.fields['id'],
            link,
            image: record.fields['image'][0]['url'],
            similarWords: record.fields['для поиска']
          })
        })
        counter += 1
        if (counter === 3) {
          resolve(searchData)
        }
      })
    base('FortuneTellings')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          let link = 'cards/' + record.fields['htmlPage'] + '.html'
          searchData.push({
            color: 'black',
            line1: record.fields['line1'],
            line2: record.fields['line2'],
            image: record.fields['image'][0]['url'],
            link: link,
            id: record.fields['id'],
            emoji: record.fields['icon'],
            none: false,
            texttype: 'Emoji',
            similarWords: record.fields['для поиска']
          })
        })
        counter += 1
        if (counter === 3) {
          resolve(searchData)
        }
      })

    base('TarotCards')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          // let title = record.fields['line1']
          // if (title === undefined) {
          //   title = ' '
          // }
          // searchData.push({
          //   title,
          //   description: record.fields['line2'],
          //   id: record.fields['id']
          let none = false
          let line1 = record.fields['line1']
          if (line1 == undefined) {
            none = true
            line1 = ' '
          }
          let texttype = 'Emoji'
          let icon = record.fields['icon']
          if (
            icon.includes('I') ||
            icon.includes('V') ||
            icon.includes('X') ||
            icon.includes('L') ||
            icon.includes('C')
          ) {
            texttype = 'Antiqua'
          }

          let color = 'pink'
          if (record.fields['arcana'] == 'major') {
            color = 'black'
          }

          let link = 'cards/' + record.fields['htmlPage'] + '.html'
          searchData.push({
            color,
            arcana: record.fields['arcana'],
            emoji: icon,
            line1: line1,
            line2: record.fields['line2'],
            none,
            link,
            image: record.fields['image'][0]['url'],
            id: record.fields['id'],
            texttype,
            name: record.fields['name'],
            similarWords: record.fields['для поиска']
          })
        })
        counter += 1
        if (counter === 3) {
          resolve(searchData)
        }
      })
  })
}

export { getTarotCards }
export { getSearchData }
export { getFortuneTellings }
