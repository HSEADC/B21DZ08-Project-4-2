console.log('cardoftheday')
document.addEventListener('DOMContentLoaded', () => {
  CardOfTheDay()
})

function CardOfTheDay() {
  console.log('cardoftheday init')
  const AccentBottom = document.querySelector('.A_AccentButtonTarotTellings')
  const FortuneTelling = document.querySelector('.W_ContentFortuneTelling')
  const Picture = document.querySelector('.A_TarotCardImage')
  const Name1 = document.querySelector('.A_TarotCardTitleAntiqua')
  const Name2 = document.querySelector('.A_TarotCardTitleGrotesk')
  const Number = document.querySelector('.A_TarotCardNumber')
  const Common = document.querySelector('.A_paragraph2.Common')
  const Love = document.querySelector('.A_paragraph2.Love')
  const Work = document.querySelector('.A_paragraph2.Work')
  const Advise = document.querySelector('.A_paragraph2.Advise')

  AccentBottom.addEventListener('click', () => {
    let Random = Math.floor(Math.random() * 1)
    console.log(Number)
    Number.innerHTML = TextOfTelling[Random][0]
    Name1.innerHTML = TextOfTelling[Random][1]
    Name2.innerHTML = TextOfTelling[Random][2]
    Common.innerHTML = TextOfTelling[Random][3]
    Love.innerHTML = TextOfTelling[Random][4]
    Work.innerHTML = TextOfTelling[Random][5]
    Advise.innerHTML = TextOfTelling[Random][6]
    AccentBottom.classList.toggle('NotShowing')
    FortuneTelling.classList.toggle('NotShowing')
  })
}

var TextOfTelling = [
  [
    '0',
    'дурак',
    '',
    'ура, подруга, добро пожаловать в&nbsp;новую сюжетную арку! это арка будто в&nbsp;сезоне с&nbsp;12-ю сериями, так что все продвигается очень быстро.&nbsp;ты&nbsp;будто окажешься в&nbsp;Мондштадте в&nbsp;геншине, так что обретешь полную свободу, ультанешь и&nbsp;отправишься в&nbsp;бездну',
    'очень стремительно и&nbsp;необдуманно.&nbsp;ну, кто-то из&nbsp;вас точно дурак. только не&nbsp;нужно блин этой драмы, как обычно, пожалуйста.&nbsp;ты, конечно, драма квин, но&nbsp;уже ту&nbsp;мач',
    'поле для новых возможностей! может, пора сновать открыть хх.ру? или тиндер, тут как ляжет карта! короче просто ворк хард, а&nbsp;остальное само приложится, если работать по&nbsp;помидорам под лоу-фай в&nbsp;кофейне',
    'Мы&nbsp;разрисуем все заборы своими стихами <br>Достань, пожалуйста, краску из&nbsp;рюкзака <br>Нам ни&nbsp;к&nbsp;чему учителя&nbsp;&mdash; мы&nbsp;придумаем сами<br>Правила русского языка'
  ],
  [
    'I',
    'маг',
    '',
    'вайб оби-вана из&nbsp;звездных войн, вот такой вот троп ментора. это все про духовное, траты денег по&nbsp;пушкинской карте и&nbsp;пролистывание литературных тиктоков. апостол петр вошел в&nbsp;чат',
    'открывай тиндер, это время для новых знакомств. пора забанить своего дединсайдика и&nbsp;начать искать масика вместо этого тюбика. это активное и&nbsp;быстрое время, так что придется писать первой',
    'забудь про бедное мышление и&nbsp;начинай читать &laquo;бедный папа, богатый папа&raquo;, &laquo;думай и&nbsp;богатей&raquo;, &laquo;илон маск&raquo;. напиши боссу о&nbsp;повышении в&nbsp;11:11, может прокатить',
    'визуализации и&nbsp;аффирмации работают.<br>Я&nbsp;лью Cristal или Chandon Mo&euml;t <br>Мечтал&nbsp;&mdash; теперь моё💅😇'
  ]
]
