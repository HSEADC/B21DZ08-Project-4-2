import React from 'react'
import { createRoot } from 'react-dom/client'
import O_BlockOfTarotCards from './components/O_BlockOfTarotCards/O_BlockOfTarotCards.jsx'

const tarotCardsMajorArcana = [
{ color:"pink", emoji:'ы', line1: 'дурак', line2: 'шут', image:'images/tarotcard6.png'},
{ color:"black", emoji:'r', line1: 'дурак', line2: 'шут', image:'tarotCardImage2'},
{ color:"pink", emoji:'ы', line1: 'дурак', line2: 'шут', image:'tarotCardImage3'},
{ color:"black", emoji:'r', line1: 'дурак', line2: 'шут', image:'tarotCardImage1'},
{ color:"black", emoji:'r', line1: 'дурак', line2: 'шут', image:'tarotCardImage2'},
{ color:"black", emoji:'r', line1: 'дурак', line2: 'шут', image:'tarotCardImage3'},
{ color:"black", emoji:'r', line1: 'дурак', line2: 'шут', image:'tarotCardImage1'}
]
const root = createRoot(document.querySelector('.Testtt'))
root.render(
<div>
    <O_BlockOfTarotCards tarotCardsMajorArcana={tarotCardsMajorArcana}/>
    </div>)