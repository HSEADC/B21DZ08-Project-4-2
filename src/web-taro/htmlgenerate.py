# from airtable import Airtable

# Укажите ваши данные авторизации и параметры подключения к базе данных в Airtable
# base_key = 'appcttjzPgvmm4Gdx'
# table_name = 'TarotCards'
# api_key = 'patTX1cwSKVpDKQ63.5bd9c7552485e54487c6e17913b4e7f0e68bfedf725a360c2d80673b4fdf9d27'


# Создайте экземпляр класса Airtable
# airtable = Airtable(base_key, table_name, api_key)

# Получить все записи из таблицы
# records = airtable.get_all()

# Считываем значения конкретного столбца и сохраняем их в массиве
# column_values = []
# for record in records:
#     fields = record["fields"]
#     # Здесь "column_name" - это имя нужного вам столбца
#     column_value = fields.get("column_name")
#     if column_value:
#         column_values.append(column_value)

import os
page_names = ['fool', 'theMagician', 'priestess', 'bashnya', 'empress', 
         'emperor', 'priest', 'lovers', 'chariot', 'strength', 'hermit', 
         'wheelOfFortune', 'justice', 'theHangedMan', 'death', 'temperance', 
         'theDevil', 'star', 'moon', 'sun', 'judgement', 'world', 'wandsAce', 
         'kingOfWands', 'queenOfWands', 'knightOfWands', 'pageOfWands', 'wands2', 
         'wands3', 'wands4', 'wands5', 'wands6', 'wands7', 'wands8', 'wands9', 
         'wands10', 'aceOfCups', 'kingOfCups', 'queenOfCups', 'cupsKnight', 
         'pageCups', 'cups2', 'cups3', 'cups4', 'cups5', 'cups6', 'cups7', 
         'cups8', 'cups9', 'cups10', 'aceOfSwords', 'kingOfSwords', 
         'queenOfSwords', 'knightOfSwords', 'pageOfSwords', 'swords2', 
         'swords3', 'swords4', 'swords5', 'swords6', 'swords7', 'swords8', 
         'swords9', 'swords10', 'aceOfPentacles', 'kingOfPentacles', 
         'queenOfPentacles', 'knightOfPentacles', 'pageOfPentacles', 'pentacles2', 
         'pentacles3', 'pentacles4', 'pentacles5', 'pentacles6', 'pentacles7', 
         'pentacles8', 'pentacles9', 'pentacles10']

headings = ['дурак',
        'маг', 'жрица', 'башня', 'императрица', 'император', 'жрец', 'влюбленные', 'колесница',
        'сила', 'отшельник',  'фортуна',  'справедливость', 'повешенный',  'смерть', 'умеренность',  'дьявол', 'звезда', 
        'луна', 'солнце', 'суд', 'мир', 'туз жезлов', 'король жезлов', 'королева жезлов', 'рыцарь жезлов', 'паж жезлов', 
        'двойка жезлов', 'тройка жезлов',  'четверка жезлов',  'пятерка жезлов', 'шестерка жезлов',  'семерка жезлов', 
        'восьмерка жезлов',  'девятка жезлов', 'десятка жезлов','туз кубков', 'король кубков',
        'королева кубков', 'рыцарь кубков', 'паж кубков', 'двойка кубков', 'тройка кубков',
        'четверка кубков', 'пятерка кубков', 'шестерка кубков', 'семерка кубков', 'восьмерка кубков', 'девятка кубков',
        'десятка кубков', 'туз мечей', 'король мечей', 'королева мечей', 'рыцарь мечей',
        'паж мечей', 'двойка мечей', 'тройка мечей', 'четверка мечей', 'пятерка мечей', 'шестерка мечей', 'семерка мечей', 'восьмерка мечей',
        'девятка мечей', 'десятка мечей', 'туз пентаклей', 'король пентаклей', 'королева пентаклей',
        'рыцарь пентаклей', 'паж пентаклей', 'двойка пентаклей', 'тройка пентаклей', 'четверка пентаклей',
        'пятерка пентаклей', 'шестерка пентаклей', 'семерка пентаклей', 'восьмерка пентаклей', 'девятка пентаклей', 'десятка пентаклей']

# for i in page_names:
#     print(i)
# Получение пути к текущему скрипту
current_script_path = os.path.abspath(__file__)
# Получение пути к папке скрипта
script_dir = os.path.dirname(current_script_path)
# Получение пути к соседней папке
sibling_dir = os.path.join(script_dir, '..', 'cards')

# Создание директории соседней папки, если она не существует
if not os.path.exists(sibling_dir):
    os.makedirs(sibling_dir)

#Создание HTML-страниц с именами из массива
for i in range(len(page_names)):
    if 'пентаклей' in headings[i] or 'мечей' in headings[i] or 'кубков' in headings[i] or 'жезлов' in headings[i]:
         arcana = 'младшие арканы'
    else:
         arcana = 'старшие арканы'
    page_content = f'''<!DOCTYPE html>
<html lang="ru" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>толкования карт | расклад</title>
    <!-- Primary Meta Tags -->
    <meta name="title" content="(рас)клад — медиа о таро" />
    <meta
      name="description"
      content="(рас)клад — это медиа о таро для зумерок, сочетающее в себе онлайн-гадания в различных форматах, актуальные статьи о культуре таро и справочник с трактовками карт."
    />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="(рас)клад — медиа о таро" />
    <meta
      property="og:description"
      content="(рас)клад — это медиа о таро для зумерок, сочетающее в себе онлайн-гадания в различных форматах, актуальные статьи о культуре таро и справочник с трактовками карт."
    />

    <meta
      property="og:image"
      content="https://rasklad.adc.ac/share/metatags.jpg"
    />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="(рас)клад — медиа о таро" />
    <meta
      property="twitter:description"
      content="(рас)клад — это медиа о таро для зумерок, сочетающее в себе онлайн-гадания в различных форматах, актуальные статьи о культуре таро и справочник с трактовками карт."
    />
    <meta
      property="twitter:image"
      content="https://rasklad.adc.ac/share/metatags.jpg"
    />

    <analytics></analytics>

    <link rel="shortcut icon" href="../images/icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Emoji&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <menu></menu>
    <div class="M_Header">
      <div class="W_HeaderText">
        <div class="A_Paragraph Center">{arcana}</div>
        <div class="W_HeaderHeading">
          <div class="A_Heading2Grotesk">{headings[i]}</div>
        </div>
      </div>
    </div>
    <div class="CardContainer"></div>
    <div></div>
    <svg
      style="visibility: hidden; position: absolute"
      width="0"
      height="0"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
    <footer></footer>
  </body>
</html>'''
    # Запись содержимого в файл HTML
    file_path = os.path.join(sibling_dir, f'{page_names[i]}.html')
    with open(file_path, 'w') as f:
        f.write(page_content)

    print(f'Страница {page_names[i]}.html создана по пути: {file_path}')

print('Генерация HTML-страниц завершена.')



# # Путь к текстовому файлу
# # file_path = os.path.join(sibling_dir, 'webpack.txt')

# # # Открытие файла для записи
# # with open(file_path, 'w') as f:
# #     # Запись строки в файл для каждого элемента массива
# #     for name in page_names:
# #         line = f"new HtmlWebpackPlugin({{\n  template: './src/cards/{name}.html',\n  filename: './cards/{name}.html',\n  chunks: ['cardTelling', 'menu']\n}}),\n"
# #         f.write(line)

# # print(f'Файл создан по пути: {file_path}')