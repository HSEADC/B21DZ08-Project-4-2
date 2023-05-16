import React from 'react'
import Airtable from 'airtable'
import './airtableData.js'
import { createRoot } from 'react-dom/client'
import M_SearchBox from './components/M_SearchBox/M_SearchBox.jsx'

  let searchBox

  document.addEventListener('DOMContentLoaded', () => {
      const root = createRoot(document.querySelector('.O_Menu'))
  root.render(
    <div>
    <M_SearchBox />
    </div>) 
  })