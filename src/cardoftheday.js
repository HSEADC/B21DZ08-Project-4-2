console.log('cardoftheday')

function initCardOfTheDay() {
  console.log('cardoftheday init')
  const AccentBottom = document.querySelector('.A_AccentButtonTarotTellings')
  const FortuneTelling = document.querySelector('.W_ContentFortuneTelling')
  var Picture = document.querySelector('.A_TarotCardImage')
  var Name1 = document.querySelector('.A_TarotCardTitleAntiqua')
  var Name2 = document.querySelector('.A_TarotCardTitleGrotesk')
  var Number = document.querySelector('.A_TarotCardNumber')
  var Common = document.querySelector('.A_paragraph2.Common')
  var Love = document.querySelector('.A_paragraph2.Love')
  var Work = document.querySelector('.A_paragraph2.Work')
  var Advise = document.querySelector('.A_paragraph2.Advise')
  AccentBottom.addEventListener('click', () => {
    let Random = Math.floor(Math.random() * 4)
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
document.addEventListener('DOMContentLoaded', () => {
  initCardOfTheDay()
})

var TextOfTelling = [
  [
    '0',
    'дурак',
    'the fool',
    'ура, подруга, добро пожаловать в&nbsp;новую сюжетную арку! это арка будто в&nbsp;сезоне с&nbsp;12-ю сериями, так что все продвигается очень быстро.&nbsp;ты&nbsp;будто окажешься в&nbsp;Мондштадте в&nbsp;геншине, так что обретешь полную свободу, ультанешь и&nbsp;отправишься в&nbsp;бездну',
    'очень стремительно и&nbsp;необдуманно.&nbsp;ну, кто-то из&nbsp;вас точно дурак. только не&nbsp;нужно блин этой драмы, как обычно, пожалуйста.&nbsp;ты, конечно, драма квин, но&nbsp;уже ту&nbsp;мач',
    'поле для новых возможностей! может, пора сновать открыть хх.ру? или тиндер, тут как ляжет карта! короче просто ворк хард, а&nbsp;остальное само приложится, если работать по&nbsp;помидорам под лоу-фай в&nbsp;кофейне',
    'Мы&nbsp;разрисуем все заборы своими стихами <br>Достань, пожалуйста, краску из&nbsp;рюкзака <br>Нам ни&nbsp;к&nbsp;чему учителя&nbsp;&mdash; мы&nbsp;придумаем сами<br>Правила русского языка'
  ],
  [
    'I',
    'маг',
    'the magician',
    'вайб оби-вана из&nbsp;звездных войн, вот такой вот троп ментора. это все про духовное, траты денег по&nbsp;пушкинской карте и&nbsp;пролистывание литературных тиктоков. апостол петр вошел в&nbsp;чат',
    'открывай тиндер, это время для новых знакомств. пора забанить своего дединсайдика и&nbsp;начать искать масика вместо этого тюбика. это активное и&nbsp;быстрое время, так что придется писать первой',
    'забудь про бедное мышление и&nbsp;начинай читать &laquo;бедный папа, богатый папа&raquo;, &laquo;думай и&nbsp;богатей&raquo;, &laquo;илон маск&raquo;. напиши боссу о&nbsp;повышении в&nbsp;11:11, может прокатить',
    'визуализации и&nbsp;аффирмации работают.<br>Я&nbsp;лью Cristal или Chandon Mo&euml;t <br>Мечтал&nbsp;&mdash; теперь моё💅😇'
  ],
  [
    'II',
    'верхновная',
    'жрица',
    'ты&nbsp;что, дышишь маткой? тогда откуда такая мудрость и&nbsp;проницательность? можешь сделать свой инфопродукт об&nbsp;этом, потому что ты&nbsp;&mdash; сила, ты&nbsp;&mdash; красива. ❤️‍🔥 вокруг тебя окружает лишь успех, полный флекс.&nbsp;и&nbsp;все это не&nbsp;останется незамеченным!',
    'вокруг одни только траблы, подруга. полный непрогляд! ты&nbsp;будто главная героиня дурацкого фанфика, который так и&nbsp;не&nbsp;дописали, так что сейчас прислушийся к&nbsp;себе и&nbsp;делай, как тебе угодно',
    'выключай в&nbsp;себе конкуренцию, эта гонка никуда от&nbsp;тебя не&nbsp;денется! пора войти в&nbsp;поток и&nbsp;не&nbsp;надо спешить! ты&nbsp;все равно самая крутая герлллллл',
    '&mdash;&nbsp;Никогда ничего не&nbsp;бойтесь! Живите здесь и&nbsp;сейчас! Кайфуйте. Жизнь одна... А&nbsp;мне так страшно, но&nbsp;я&nbsp;с&nbsp;Вами ничего не&nbsp;боюсь, слышите?!&thinsp;&copy;Ольга Бузова'
  ],
  [
    'III',
    'шальная',
    'императрица',
    'ну&nbsp;ты&nbsp;мамми! вайб инстасамки на&nbsp;сегодня обеспечен. все роскошно, шик блеск, красота, счастье и&nbsp;сестринство! проведи этот день в&nbsp;компании прекрасных подруг, включай свою вумен пауэр и&nbsp;все будет суп!',
    'женская энергия просто на&nbsp;высоте, моя хорошая, моя ты&nbsp;бубочка! такая ты&nbsp;прямо роковая, будто&nbsp;бы фем фаталь, так что будь аккуратнее, чтобы не&nbsp;травмировать какого-то очередного тюбика.&nbsp;а&nbsp;если ты&nbsp;одинока, то&nbsp;это ненадолго! скоро в&nbsp;твоей жизни появится кто-то новый, присмотрись',
    'все круто, особенно, если ты&nbsp;работаешь с&nbsp;женщинами! только женская солидарность, никакого стеклянного потолка, долой белых цис мужчин и&nbsp;патрирхат! на&nbsp;костер!',
    'свари пельменей и сделай масочку'
  ],
  [
    'IV',
    'император',
    '🫃',
    'рядом с&nbsp;тобой шуга деддик! какой-то сильный мужичина! осторожно! опасно! осторожно! осторожно! подумай! отец? брат? никита? прошу, аккуратней',
    'какой-то овен скорее всего. какой-то надежный партнер. это все про серьезные отношения, так что проработай на&nbsp;следующей сеансе с&nbsp;психотерапией свой паттерн с&nbsp;избеганием, чтобы не&nbsp;отпугнуть этого масика.&nbsp;но&nbsp;в&nbsp;целом, это все про стабильность и&nbsp;соулмейтов',
    'полное благополучие! займись только соушл нетворкингом по&nbsp;возможности, полистай новые вакансии на&nbsp;хедхантере и&nbsp;сходи по&nbsp;приколу на&nbsp;пару собесов. никогда не&nbsp;будет лишним, а&nbsp;так все в&nbsp;шоколаде!',
    'пора расставить приоритеты с&nbsp;внешних на&nbsp;внутренние, проявить стойкость и&nbsp;терпение. тут висит ружье чехова&nbsp;&mdash; значит, скоро оно выстрелит'
  ],
  [
    'V',
    'иерофант',
    'верхновный жрец',
    'емае общее',
    'емае любовь',
    'емае работа',
    'емае совет'
  ]
]
