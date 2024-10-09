const fs = require('fs')
const Airtable = require('airtable')
const axios = require('axios')
const path = require('path')

// Используй твой токен и базу данных
const token =
  'patTX1cwSKVpDKQ63.5bd9c7552485e54487c6e17913b4e7f0e68bfedf725a360c2d80673b4fdf9d27'
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

const base = Airtable.base('appcttjzPgvmm4Gdx')

// Функция для получения данных и записи их в JSON и локальные изображения
async function fetchAndSaveData() {
  const tarotCards = []
  const fortuneTellings = []
  const articles = []

  try {
    // Получаем данные для всех таблиц
    const tarotResult = await base('TarotCards')
      .select({ maxRecords: 100 })
      .firstPage()

    for (let record of tarotResult) {
      const imageUrl = record.fields['image'][0]['url']
      const mimeType = record.fields['image'][0]['type'] // Проверяем MIME-тип
      const extension = mimeType.split('/')[1] // Получаем расширение из MIME-типа
      const imageFileName = `${record.fields['id']}.${extension}` // Имя файла с расширением

      // Скачиваем и сохраняем изображение локально
      const imageResponse = await axios({
        url: imageUrl,
        responseType: 'stream'
      })
      const imagePath = path.join(__dirname, 'data', imageFileName)
      imageResponse.data.pipe(fs.createWriteStream(imagePath))

      tarotCards.push({
        htmlname: record.fields['htmlPage'],
        color: record.fields['arcana'] === 'major' ? 'black' : 'pink',
        arcana: record.fields['arcana'],
        emoji: record.fields['icon'],
        line1: record.fields['line1'] || '',
        line2: record.fields['line2'],
        none: !record.fields['line1'],
        link: `cards/${record.fields['htmlPage']}.html`,
        image: imageFileName, // Используем локальное изображение
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
    }

    // Сохраняем данные в JSON файл
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

    console.log('Данные успешно сохранены и изображения загружены!')
  } catch (error) {
    console.error('Ошибка получения данных:', error)
  }
}

fetchAndSaveData()
