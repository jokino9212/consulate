import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import {
	Home,
	Posts,
	Faq,
	Contacts,
	ConsularSection,
	About
} from './modules/main/pages'

import './index.css'
import 'assets/styles/global.sass'
import { Page404 } from './shared'
import PostItemPage from './modules/main/pages/PostItemPage/PostItemPage'
import { IPost } from './modules/main/pages/components/types/types'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<BrowserRouter>
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route path={'/posts'} element={<Posts />} />
			<Route path={'/post/:id'} element={<PostItemPage post={[]} />} />
			<Route path={'/consular'} element={<ConsularSection />} />
			<Route path={'/about'} element={<About />} />
			<Route path={'/faq'} element={<Faq />} />
			<Route path={'/contacts'} element={<Contacts />} />
			<Route path={'*'} element={<Page404 />} />
		</Routes>
	</BrowserRouter>
)
