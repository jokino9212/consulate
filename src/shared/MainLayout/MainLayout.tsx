import React from 'react'

import s from './MainLayout.module.sass'
import { Footer, Header, NavPanel } from './components'

const MainLayout = (props: any) => {
	return (
		<div>
			<Header />
			<NavPanel />
			<div className={s.container}>{props.children}</div>
			<Footer />
		</div>
	)
}

export default MainLayout
