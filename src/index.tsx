import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import {
	Main,
	News,
	Faq,
	Contacts,
	ConsularSection,
	About
} from './modules/main/pages'

import './index.css'
import { Page404 } from './shared'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<BrowserRouter>
		<Routes>
			<Route path={'/'} element={<Main />} />
			<Route path={'/news'} element={<News />} />
			<Route path={'/consular'} element={<ConsularSection />} />
			<Route path={'/about'} element={<About />} />
			<Route path={'/faq'} element={<Faq />} />
			<Route path={'/contacts'} element={<Contacts />} />
			<Route path={'*'} element={<Page404 />} />
		</Routes>
	</BrowserRouter>
)
