import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import {
	Home,
	PostsPage,
	PostItemPage,
	Faq,
	Contacts,
	ConsularSection,
	About
} from './modules/main/pages'

import './index.css'
import 'assets/styles/global.sass'
import { ErrorBoundary, Page404 } from './shared'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<BrowserRouter basename='consulate'>
		<ErrorBoundary>
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/posts'} element={<PostsPage />} />
				<Route path={'/posts/:id'} element={<PostItemPage />} />
				<Route path={'/consular'} element={<ConsularSection />} />
				<Route path={'/about'} element={<About />} />
				<Route path={'/faq'} element={<Faq />} />
				<Route path={'/contacts'} element={<Contacts />} />
				<Route path={'*'} element={<Page404 />} />
			</Routes>
		</ErrorBoundary>
	</BrowserRouter>
)
