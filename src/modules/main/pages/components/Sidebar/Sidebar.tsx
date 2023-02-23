import React from 'react'

import { Layout, Menu } from 'antd'
import s from './Sidebar.module.sass'

const { Sider } = Layout

const Sidebar: React.FC = () => {
	return (
		<Layout className={s.root}>
			<Sider
				className={s.container}
				breakpoint='lg'
				collapsedWidth='0'
				onBreakpoint={(broken) => {
					console.log(broken)
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type)
				}}
			>
				<div className={s.logo}>News categories</div>
				<Menu
					className={s.menu}
					theme='dark'
					mode='inline'
					defaultSelectedKeys={['4']}
				>
					<Menu.Item key='1'>
						<span className={s.span}>Ads</span>
					</Menu.Item>
					<Menu.Item key='2'>
						<span className={s.span}>Events</span>
					</Menu.Item>
					<Menu.Item key='3'>
						<span className={s.span}>Changes in regulations</span>
					</Menu.Item>
				</Menu>
			</Sider>
		</Layout>
	)
}

export default Sidebar
