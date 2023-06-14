import React from 'react'
import Airtable from 'airtable'
import './airtableData.js'
import { createRoot } from 'react-dom/client'
import M_SearchBar from './components/M_SearchBar/M_SearchBar.jsx'

  let searchBox

  document.addEventListener('DOMContentLoaded', () => {
      const root = createRoot(document.querySelector('.W_SearchBoxContainer'))
  root.render(
    <div>
    <M_SearchBar />
    </div>) 
  })