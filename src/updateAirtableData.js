const fs = require('fs')
const Airtable = require('airtable')

// Используй твой токен и базу данных
const token =
  'patTX1cwSKVpDKQ63.5bd9c7552485e54487c6e17913b4e7f0e68bfedf725a360c2d80673b4fdf9d27'
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

const base = Airtable.base('appcttjzPgvmm4Gdx')

// Функция для получения данных и записи их в JSON
async function fetchAndSaveData() {
  const tarotCards = []
  const fortuneTellings = []
  const articles = []

  try {
    // Получаем данные для всех таблиц
    const tarotResult = await base('TarotCards')
      .select({ maxRecords: 100 })
      .firstPage()
    tarotResult.forEach((record) => {
      tarotCards.push({
        htmlname: record.fields['htmlPage'],
        color: record.fields['arcana'] === 'major' ? 'black' : 'pink',
        arcana: record.fields['arcana'],
        emoji: record.fields['icon'],
        line1: record.fields['line1'] || '',
        line2: record.fields['line2'],
        none: !record.fields['line1'],
        link: `cards/${record.fields['htmlPage']}.html`,
        image: record.fields['image'][0]['url'],
        id: record.fields['id'],
        texttype: record.fields['icon'].match(/[IVXLCDM]/)
          ? 'Antiqua'
          : 'Emoji',
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

    const fortuneResult = await base('fortuneTellings')
      .select({ maxRecords: 100 })
      .firstPage()
    fortuneResult.forEach((record) => {
      fortuneTellings.push({
        color: 'black',
        line1: record.fields['line1'],
        line2: record.fields['line2'],
        image: record.fields['image'][0]['url'],
        link: `fortunetellings/${record.fields['htmlPage']}.html`,
        id: record.fields['id'],
        emoji: record.fields['icon'],
        none: false,
        texttype: 'Emoji'
      })
    })

    const articlesResult = await base('Articles')
      .select({ maxRecords: 100 })
      .firstPage()
    articlesResult.forEach((record) => {
      articles.push({
        title: record.fields['Заголовок'],
        description: record.fields['Описание'],
        id: record.fields['id'],
        link: `articles/${record.fields['htmlPage']}.html`,
        image: record.fields['image'][0]['url']
      })
    })

    // Сохраняем все данные в JSON файл
    fs.writeFileSync(
      './src/data/tarotCards.json',
      JSON.stringify(tarotCards, null, 2)
    )
    fs.writeFileSync(
      './src/data/fortuneTellings.json',
      JSON.stringify(fortuneTellings, null, 2)
    )
    fs.writeFileSync(
      './src/data/articles.json',
      JSON.stringify(articles, null, 2)
    )

    console.log('Данные успешно сохранены!')
  } catch (error) {
    console.error('Ошибка получения данных:', error)
  }
}

fetchAndSaveData()
