import React from 'react'
import './airtableData.js'
import { createRoot } from 'react-dom/client'
import O_MenuBar from './components/O_MenuBar/O_Menubar.jsx'
import { getSearchRequest } from './search.jsx'

document.addEventListener('DOMContentLoaded', () => {
    const root = createRoot(document.querySelector('.W_Menu'))
    root.render(<O_MenuBar searchInputValue={getSearchRequest()} />)
})