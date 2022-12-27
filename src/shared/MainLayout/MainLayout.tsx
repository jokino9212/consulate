import React from 'react'

import './MainLayout.module.sass'
import { Footer, Header, NavPanel } from './components'

const MainLayout = (props: any) => {
	return (
		<div>
			<Header />
			<NavPanel />
			<div>{props.children}</div>
			<Footer />
		</div>
	)
}

export default MainLayout
