import React from 'react'

import s from './MainLayout.module.sass'
import { Footer, Header, NavPanel } from './components'

const MainLayout = (props: any) => {
	return (
		<div className={s.content}>
			<div className={s.header}>
				<Header />
			</div>
			<NavPanel />
			<div className={s.container}>{props.children}</div>
			<div className={s.footer}>
				<Footer />
			</div>
		</div>
	)
}

export default MainLayout
