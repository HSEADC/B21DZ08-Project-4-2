import './index.css'
import React from 'react'
import './airtableData.js'
import { createRoot } from 'react-dom/client'
import O_BlockOfTarotCards from './components/O_BlockOfTarotCards/O_BlockOfTarotCards.jsx'
import O_BlockOfArticles from './components/O_BlockOfArticles/O_BlockOfArticles.jsx'
import { getArticles, getTarotCards } from './airtableData.js'


document.addEventListener('DOMContentLoaded', () => {

    let N = 4;
    let B = 3;

    if (
      window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
    ) {
      N = 3; 

    }
    if (
        window.matchMedia('(max-width: 1279px)').matches
      ) {
        B = 2; 

      }

  getTarotCards().then((data) => {
    const root = createRoot(document.querySelector('.W_FortuneTellings'))
    const requiredCards = [];

    let tarotCards = data.slice();

    for (let i = 0; i < N; i++) {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      const randomCard = tarotCards[randomIndex];
      requiredCards.push(randomCard);
      tarotCards.splice(randomIndex, 1); // Remove the selected card
    }

    root.render(
      <div>
        <O_BlockOfTarotCards data={requiredCards} />
      </div>
    );
  });
  getArticles().then((data) => {
    const root = createRoot(document.querySelector('.W_ArticleCardsIndex'))
    const requiredArticles = [];

    let Articles = data.slice(); 

    for (let i = 0; i < B; i++) {
      const randomIndex = Math.floor(Math.random() * Articles.length);
      const randomArticle= Articles[randomIndex];
      requiredArticles.push(randomArticle);
      Articles.splice(randomIndex, 1); 
    }

    root.render(
      <div>
        <O_BlockOfArticles data={requiredArticles} />
      </div>
    );
  });
});
